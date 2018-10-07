import React from 'react';
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchInput } from './SearchInput';
import { List } from './List';

const data = [{
    user: {
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
    }
}];

configure({ adapter: new Adapter() });

describe('SearchInput', () => {
    const props = { value: 'test' };
    const searchInput = shallow(<SearchInput {...props}/>);

    it('renders search input', () => {
        expect(searchInput).toMatchSnapshot();
    });

    it('create input', () => {
        expect(searchInput.find('.search-input').exists()).toBe(true);
    });

    describe('when user types in input', () => {
        const userValue = 'test';

        beforeEach(() => {
            searchInput.find('.search-input').simulate('change', { target: { value: userValue } })
        });

        it('updatet input state', () => {
            expect(searchInput.find('.search-input').props().value).toEqual(userValue);
        });
    })
});

describe('List', () => {
    const props = { value: 'test' };
    const list = shallow(<List users={data} />);

    it('renders users list', () => {
        expect(list.props()).toMatchSnapshot();
    });

    it('exist list', () => {
        expect(list.find('li').exists()).toBe(true);
    });
});
