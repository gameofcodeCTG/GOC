import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';
import {servicecategories,services,communes,quartiers,messages} from './data/services';

const defaultState = {
    posts,
    comments,
    servicecategories,
    services,
    communes,
    quartiers,
    messages
};


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

