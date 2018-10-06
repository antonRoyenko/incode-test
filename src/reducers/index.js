import { combineReducers } from 'redux';
import { userConstants } from '../constants';

const initialState = {
    loading: false,
    users: [],
    error: null
};

const usersByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GET_USER_REQUEST_SUCCESS:
            const newState = {...state};
            action.data.forEach((user, id) => {
                newState[id] = user;
            });
            return {
                users: newState,
                loading: false,
                error: null
            };
        case userConstants.GET_USER_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export const usersListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GET_USER_REQUEST_SUCCESS:
            return {
                users: action.data.map(x => x),
                loading: false,
                error: null
            };
        case userConstants.GET_USER_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    usersById: usersByIdReducer,
    usersListing: usersListingReducer
});

export default rootReducer;
