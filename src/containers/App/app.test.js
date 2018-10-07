import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import App from './App';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
const mockStore = configureMockStore();
const store = mockStore({});

configure({ adapter: new Adapter() });

describe('App', () => {
   const mockGetUsers = jest.fn();
   let app = shallow(
       <Provider store={store}>
           <App />
       </Provider>
   );

   it('renders app', () => {
      expect(app).toMatchSnapshot()
   });

    describe('when mounted', () => {
       beforeEach(() => {
          app = mount(<Provider store={store}>
              <App/>
          </Provider>
          )
       });

        // it('dispatch the `getUsers()` method', () => {
        //     expect(mockGetUsers).toHaveBeenCalled();
        // })
    })
});
