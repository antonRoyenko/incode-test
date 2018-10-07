import React, {Fragment, Component} from 'react';
import {List, SearchInput, UserDetail} from "../../components/App";
import {createSelector} from 'reselect';
import {getUsers, searchUser} from '../../actions/user.action'
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            active: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.setActive = this.setActive.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.searchUser(event.target.value);
    }

    setActive(id) {
        this.setState({active: id});
    }

    render() {
        const {usersList, initialList} = this.props;
        const {value, active} = this.state;
        console.log();

        return (
            <Fragment>
                {
                    usersList.length !== 0 ? (
                        <Fragment>
                            <nav>
                                <SearchInput value={value} handleChange={this.handleChange}/>
                                <List users={usersList} setActive={this.setActive} request={value}/>
                            </nav>
                            <main>
                                <Container>
                                    <UserDetail user={initialList[active]}/>
                                </Container>
                            </main>
                        </Fragment>
                    ) : (
                        <div>
                            Loading
                        </div>
                    )
                }

            </Fragment>

        )
    }
}

const getListing = createSelector(
    state => state.usersById,
    state => state.usersListing,
    (users, listing) => listing.users.map((id) => {
        return {
            user: users.users[id]
        }
    })
);

function mapStateToProps(state) {
    return {
        usersList: getListing(state),
        initialList: state.usersById.initialList
    };
}

export default connect(mapStateToProps, { getUsers, searchUser })(App);
