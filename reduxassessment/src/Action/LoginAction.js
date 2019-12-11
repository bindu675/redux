import * as ActionTypes from './type';
export function username()
{
return function(dispatch)
{
dispatch({type:'USERNAME'});
}
}
export function password()
{
return function(dispatch)
{
dispatch({type:'PASSWORD'});
}
}
