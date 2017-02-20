import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import Home from './Home';

@observer
export default class App extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store
    }

    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <Provider store={this.store}>
                    <div className="wrapper">
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                    </div>
                </Provider>
            </Router>
        )
    }
}