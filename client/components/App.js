import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments,
        quartiers: state.quartiers,
        communes:state.communes,
        messages:state.messages,
        services:state.services,
        servicescategories:state.servicescategories,
        account:state.login
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;