import { combineReducers } from 'redux';
import { userConstants } from '../constants';

const initialState = {
    loading: false,
    users: [],
    error: null
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.GET_USER_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.data
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
    users,
});

export default rootReducer;
