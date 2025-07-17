
let initialValue = 0;

function reducer(state,action){
    if(action.type == "LIKE"){
        return state+1;
    }
}

export {initialValue , reducer};