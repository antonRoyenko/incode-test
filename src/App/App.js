import React, { Component } from 'react';
import { SideBar } from '../containers/SideBar';
import { Detail } from '../containers/UserDetail';

class App extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <Detail />
            </div>
        );
    }
}

export default App;
