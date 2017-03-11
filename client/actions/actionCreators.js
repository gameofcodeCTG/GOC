import {fetchMessages} from '../xhr/index';

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

export function fetchMessages(communeId){
    return {
        type:"FETCH_MESSAGES",
        result:getMessages(communeId)
    };
}
