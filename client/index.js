import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import store, {history} from './store';

// Import stylesheet
import './public/stylesheets/semantic.min.css';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


const router = (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={PhotoGrid}></IndexRoute>
                    <Route path='/view/:postId' component={Single}></Route>
                </Route>
            </Router>
        </Provider>
        );


ReactDOM.render(
        router,
        document.getElementById('root')
        );