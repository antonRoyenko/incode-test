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

    function getUserStarted() { return { type: userConstants.GET_USER_REQUEST} };
    function getUserFailure(message) { return { type: userConstants.GET_USER_REQUEST_FAILURE, message} };
    function getUserSuccess(data) { return { type: userConstants.GET_USER_REQUEST_SUCCESS, data} };
};
