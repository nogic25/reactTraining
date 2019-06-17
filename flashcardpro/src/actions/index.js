// redux has it own objects and type
// function creates an action and return an action 
export const SET_STACK='SET_STACK';
export function setStack(stack){
    return{
        type: SET_STACK, 
        stack:stack
    }    
    };


