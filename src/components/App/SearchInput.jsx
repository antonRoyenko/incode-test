import React from 'react';

export const SearchInput = (props) => (
    <div>
        <form>
            <label>
                Name:
                <input type="text" value={props.value} onChange={props.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
);
