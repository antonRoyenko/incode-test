import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {userConstants } from '../constants';
import { getUsers} from "./user.action";
import data from "../helpers/users";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ data: {} });
const mockResponse = { body: { general: 'info about user' } };

// test for get user request

// fetchMock.get('/api/get_user', mockResponse);
//
// it('async fetch for getting list of users', () => {
//    const expectedActions = [{ type: userConstants.GET_USER_REQUEST_SUCCESS, mockResponse.body,  }];
//
//   return store.dispatch(getUsers().then(() => {
//       expect(store.getActions()).toEqual(expectedActions)
//   }))
// });
