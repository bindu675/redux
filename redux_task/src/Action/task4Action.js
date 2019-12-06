import * as ActionTypes from './type';
export function onadd()
{
return function(dispatch)
{
dispatch({type:'ADD',value:1});
}
}
export function onsub()
{
return function(dispatch)
{
dispatch({type:'SUB',value:1});
}
}
export function INCREMENT()
{
return function(dispatch)
{
dispatch({type:'INCREMENT',value:1});
}
}
