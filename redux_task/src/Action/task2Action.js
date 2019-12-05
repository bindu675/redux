import *as ActionTypes from './type';

export function updateA(b){
    return function (dispatch)
    {
        dispatch({type:'UPDATEA',value:b});
    }
}

export function updateB(a){
    return function(dispatch)
    {
        dispatch({type:'UPDATEB',value:a});
    }
}

