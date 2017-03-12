// a reducer takes in two things

// 1. copy of current state

// 2. the action (info about what happend)


function posts(state = [],action){
    console.log('Post will change');
    console.log(state,action);
    return state;
}

export default posts;
