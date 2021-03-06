import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import communes from './communes';
import messages from './messages';
import quartiers from './quartiers';
import services from './services';
import servicescategories from './servicescategories';
import login from './login';

const rootReducer = combineReducers({posts, comments,communes,messages,quartiers,services,servicescategories,login, routing: routerReducer});

export default rootReducer;

