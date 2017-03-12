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

export function fetchServiceCategories() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/ServiceCategories`)
                .then(function (response) {
                    console.log(response);
                    dispatch(fetchServiceCategoriesSuccess(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
    };
}

export function fetchServiceCategoriesSuccess(serviceCategories) {
    return {
        type: "FETCH_SERVICE_CATEGORIES_SUCCESS",
        payload: serviceCategories
    };
}

export function postMessage(message) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/Messages`, message)
                .then(function (response) {
                    console.log(response);
                    dispatch(postMessageSuccess(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
    };
}

export function postMessageSuccess(message) {
    return {
        type: "POST_MESSAGE_SUCCESS",
        payload: message
    };
}

export function login(email, password) {
    return function (dispatch) {
        const credentials = {email, password};
        axios.post(`${ROOT_URL}/Users/login`, credentials).
                then(function (response) {
                    console.log(response);
                    dispatch(loginSuccess(response.data));
                }).catch(function (error) {
            console.log(error);
        });
    };
}

export function loginSuccess(data) {

    return function (dispatch) {
        axios.get(`${ROOT_URL}/Users/` + data.userId, {headers: {"Authorization": data.id}}).
                then(function (response) {
                    console.log(response);
                    dispatch(fetchUserAccountSuccess(response.data, data.id));
                }).catch(function (error) {
            console.log(error);
        });
    };
}

export function fetchUserAccountSuccess(account, sessionToken) {
    const payload = {account, sessionToken};
    return {
        type: "FETCH_USER_ACCOUNT_SUCCESS",
        payload: payload
    };
}
