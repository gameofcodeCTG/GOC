function messages(state = [], action) {
    console.log('messages will change');
    console.log(state, action);
    switch (action.type) {
        case 'FETCH_MESSAGES_SUCCESS':
            console.log("FETCH MESSAGES SUCCESS");
            console.log("Old messages" + state);
            console.log("New messages" + action.payload);
            return action.payload;
            break;
        case 'POST_MESSAGE_SUCCESS':
            console.log("POST MESSAGES SUCCESS");
            console.log(state);
            const ns = state.slice();
            ns.unshift(action.payload);
            return ns;
            break;
        default:
            return state;
    }
    return state;
}

export default messages;