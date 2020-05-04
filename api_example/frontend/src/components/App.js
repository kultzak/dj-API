import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import CrossWords from './layout/CrossWords';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <CrossWords />
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));