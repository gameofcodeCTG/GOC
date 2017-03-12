import {fetchMessages} from '../xhr/index';

// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    };
}

export function selectCommune(value) {
  return {type: 'SELECT_COMMUNE', value: value}
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


/*export function fetchMessages() {
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
}*/

export function fetchMessagesSuccess(messages) {
    return {
        type: "FETCH_MESSAGES_SUCCESS",
        payload: messages
    };
}

