function login(state = [], action){
    switch(action.type){
        case "FETCH_USER_ACCOUNT_SUCCESS":
            console.log("Got user account information");
            console.log(action.payload);
            return action.payload;
            break;
        default:
            return state;
    }
}

export default login;

