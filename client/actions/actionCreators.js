import axios from 'axios';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';


// increment 
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    };
}

// add comment
export function addComment(postId, author, comment) {
    return{
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    };
}

// remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    };
}


export function fetchMessages() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/Messages`)
                .then(function (response) {
                    console.log(response);
                    dispatch(fetchMessagesSuccess(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
    };
}

export function fetchMessagesSuccess(messages) {
    return {
        type: "FETCH_MESSAGES_SUCCESS",
        payload: messages
    };
}

