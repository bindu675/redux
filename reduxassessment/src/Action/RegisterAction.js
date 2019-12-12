import * as ActionTypes from './type';
export function firstname()
{
return function(dispatch)
{
dispatch({type:'USERNAME'});
}
}
export function lastname()
{
return function(dispatch)
{
dispatch({type:'PASSWORD'});
}
}
