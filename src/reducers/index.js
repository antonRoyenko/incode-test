import { combineReducers } from 'redux';
import { userConstants } from '../constants';

const initialState = {
    loading: false,
    users: [],
    initialList: [],
    error: null
};

export const usersByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GET_USER_REQUEST_SUCCESS:
            let newState = {...state};
            action.data.forEach((user) => {
                newState[user.id] = user;
            });
            return {
                users: newState,
                initialList: action.data,
                loading: false,
                error: null
            };
        case userConstants.SEARCH_USER:
            newState = {...state};
            action.data.forEach((user) => {
                newState[user.id] = user;
            });
            return {
                ...state,
                users: newState,
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
                users: action.data.map((item) => item.id),
                initialList: action.data,
                loading: false,
                error: null
            };
        case userConstants.SEARCH_USER:
            return {
                ...state,
                users: action.data.map((item) => item.id),
            };
        case userConstants.GET_USER_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: return state
    }
};

const rootReducer = combineReducers({
    usersById: usersByIdReducer,
    usersListing: usersListingReducer,
});

export default rootReducer;
