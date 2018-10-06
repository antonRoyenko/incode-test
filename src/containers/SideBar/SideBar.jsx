import React from 'react';
import {List, SearchInput} from "../../components/SideBar";
import {createSelector} from 'reselect';
import { getUsers } from '../../actions/user.action'
import {connect} from 'react-redux';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getUsers());
    }

    render() {
        const { usersList } = this.props;
        return(
            <nav>
                <SearchInput />
                <List users={usersList}/>
            </nav>
        )
    }
}

const getListing = createSelector(
    state => state.usersById,
    state => state.usersListing,
    (users, listing) => listing.users.map((id, key) => {
        return {user: id}
    })
);

function mapStateToProps(state) {
    return {usersList: getListing(state)};
}

const connectedSideBar = connect(mapStateToProps)(SideBar);
export {
    connectedSideBar as SideBar
};
