function servicescategories(state = [],action){
    switch(action.type){
        case "FETCH_SERVICE_CATEGORIES_SUCCESS":
            console.log("Fetch service categories success");
            console.log(action.payload);
            console.log(state);
            return action.payload;
            break;
    }
    return state;
}

export default servicescategories;