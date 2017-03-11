function messages(state = [], action) {
    console.log('messages will change');
    console.log(state, action);
    switch (action.type) {
        case 'FETCH_MESSAGES_SUCCESS':
            console.log("FETCH MESSAGES SUCCESS");
            console.log(state);
            return action.payload;
            break;
        default:
            return state;
    }
    return state;
}

export default messages;