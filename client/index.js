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
import Messages from './components/Messages';
import PhotoGrid from './components/PhotoGrid';
import Commune from './components/Commune';
import CommuneList from './components/CommuneList';


const router = (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={CommuneList}></IndexRoute>
                    <Route path='/view/:postId' component={Single}></Route>
                    <Route path='/messages' component={Messages}></Route>
                    <Route path='/messages/add/:communeId' component={Single}></Route>
                    <Route path='/commune' component={Commune}/>
                </Route>
            </Router>
        </Provider>
        );


ReactDOM.render(
        router,
        document.getElementById('root')
        );
