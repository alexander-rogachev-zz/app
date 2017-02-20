import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import { Provider } from 'mobx-react';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import Jobs from './components/pages/JobsPage';
import App from './components/App';
import stores from './stores';

import './styles/main.scss';

render((
    <Provider store={stores}>
        <Router history={browserHistory}>
            <Route name="root" path="/" component={App}>
                <Route path="/jobs" component={Jobs}/>
                <IndexRedirect to="/jobs"/>
            </Route>
        </Router>
    </Provider>), document.getElementById('root'));