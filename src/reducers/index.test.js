import rootReducer from './index';
import { usersByIdReducer, usersListingReducer } from './index';
import { userConstants } from "../constants";

const initialState = {
    loading: false,
    users: [],
    initialList: [],
    error: null
};

const error = undefined;

const data = [{
    "id": 20,
    "general": {
        "firstName": "Elmer",
        "lastName": "D'Amore",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg"
    },
    "job": {
        "company": "Schaden Group",
        "title": "Regional Brand Strategist"
    },
    "contact": {
        "email": "Margarett57@gmail.com",
        "phone": "1-236-341-6098 x2838"
    },
    "address": {
        "street": "26952 Welch Course",
        "city": "Lake Carmella land",
        "zipCode": "85577-5136",
        "country": "Israel"
    }
}];

describe('usersByIdReducer', () => {

    let newState = {};
    data.forEach((user) => {
        newState[user.id] = user;
    });

    const result = {
        users: newState,
        initialList: data,
        loading: false,
        error: null
    };

    it('sets users data', () => {
        expect(usersByIdReducer({}, {type: userConstants.GET_USER_REQUEST }))
            .toEqual({loading: true});
    });

    it('sets users data', () => {
        expect(usersByIdReducer({}, {type: userConstants.GET_USER_REQUEST_SUCCESS, data }))
            .toEqual(result);
    });

    it('sets users data', () => {
        expect(usersByIdReducer({}, {type: userConstants.GET_USER_REQUEST_FAILURE }))
            .toEqual({
                loading: false,
                error: error
            });
    });
});

describe('usersListingReducer', () => {
    const error = undefined;

    it('sets users data', () => {
        expect(usersListingReducer({}, {type: userConstants.GET_USER_REQUEST }))
            .toEqual({loading: true});
    });

    const result = {
        users: data.map((item) => item.id),
        initialList: data,
        loading: false,
        error: null
    };

    it('sets users data', () => {
        expect(usersListingReducer({}, {type: userConstants.GET_USER_REQUEST_SUCCESS, data }))
            .toEqual(result);
    });

    it('sets users data', () => {
        expect(usersListingReducer({}, {type: userConstants.GET_USER_REQUEST_FAILURE }))
            .toEqual({
                loading: false,
                error: error
            });
    });
});

describe('rootReducer', () => {
   it('default state', () => {
       expect(rootReducer({}, {})).toEqual({ usersById: initialState, usersListing: initialState });
   })
});
