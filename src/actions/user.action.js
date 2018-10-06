import {userConstants} from '../constants';
import data from '../helpers/users';

export const getUsers = () => {
    return dispatch => {
        dispatch(getUserStarted());

        // fetch('/api/get_user')
        //     .then(response => {return response.json()})
        //     .then(data => {
        //         dispatch(getUserSuccess(data));
        //     })
        //     .catch(error => {
        //         dispatch(getUserFailure(error.message));
        //     });

        // it's our fake data from request promise, if request success
        dispatch(getUserSuccess(data));
    };

    function getUserStarted() {
        return {type: userConstants.GET_USER_REQUEST}
    };

    function getUserFailure(message) {
        return {type: userConstants.GET_USER_REQUEST_FAILURE, message}
    };

    function getUserSuccess(data) {
        return {type: userConstants.GET_USER_REQUEST_SUCCESS, data}
    };
};

export const searchUser = (searchValue) => {
    return (dispatch, getState) => {
        let value = searchValue.toLowerCase();

        let result = getState().usersListing.initialList.filter(user => {
            
            const info = user.general.firstName + ' ' + user.general.lastName + ' ' +
                user.job.company + ' ' + user.contact.email + ' ' +user.contact.phone
                + ' ' + user.address.street + ' ' + user.address.city + ' ' + user.address.zipCode + ' ' +
                user.address.country;

            return info.toLowerCase().includes(value);
        });

        if (result.length === 0) {
            result = [`no data`];
        }

        dispatch(userResult(result));
    };

    function userResult(data) {
        return {type: userConstants.SEARCH_USER, data}
    };
};
