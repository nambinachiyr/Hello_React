
let initialValue = {
    like:0,
    dislike:0
};

function reducer(state,action){
    if(action.type == "DISLIKE"){
        return {
            ...state,
            dislike: state.dislike+1
        };
    }
    else if(action.type == "LIKE"){
        return {
            ...state,
            like:state.like+1
        }

    }
    return state;// This is current state
}

export {initialValue , reducer};