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
        return(
            <nav>
                <SearchInput />
                <List />
            </nav>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state,
    }
}

const connectedSideBar = connect(mapStateToProps)(SideBar);
export {
    connectedSideBar as SideBar
};
