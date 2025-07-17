
let initialValue = 0;

function reducer(state,action){
    if(action.type == "DISLIKE"){
        return state-1;
    }
    else if(action.type == "LIKE"){
        return state+1;
    }
    return state;// This is current state
}

export {initialValue , reducer};