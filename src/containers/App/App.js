import React, {Fragment} from 'react';
import {List, SearchInput, UserDetail} from "../../components/App";
import {createSelector} from 'reselect';
import {getUsers, searchUser} from '../../actions/user.action'
import {connect} from 'react-redux';

class App extends React.Component {
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
        this.props.dispatch(getUsers());
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.dispatch(searchUser(event.target.value));
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
                                <List users={usersList} setActive={this.setActive}/>
                            </nav>
                            <main>
                                <UserDetail user={initialList[active]}/>
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


const connectedApp = connect(mapStateToProps)(App);
export {
    connectedApp as App
};
