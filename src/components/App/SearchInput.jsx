import React from 'react';
import { Input } from 'semantic-ui-react'

export const SearchInput = (props) => (
    <div className="search-block">
        <Input icon={{ name: 'search', circular: true, link: true }} onChange={props.handleChange} value={props.value} placeholder='Search...' />
    </div>
);
