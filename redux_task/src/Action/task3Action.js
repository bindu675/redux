import *as ActionTypes from './type';

export function updateA(c){
    return function (dispatch)
    {
        dispatch({type:'UPDATEA',value:c});
    }
}

export function updateB(d){
    return function(dispatch)
    {
        dispatch({type:'UPDATEB',value:d});
    }
}

export function updateC(a){
    return function(dispatch)
    {
        dispatch({type:'UPDATEC',value:a});
    }
}

export function update_D(b){
    return function(dispatch)
    {
        dispatch({type:'UPDATE_D',value:b});
    }
}