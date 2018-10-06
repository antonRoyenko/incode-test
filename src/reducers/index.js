import { combineReducers } from 'redux';

const users = (state = {}, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    users,
});

export default rootReducer;
