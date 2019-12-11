import * as ActionTypes from './type';
export function redSwitch()
{
return function(dispatch)
{
dispatch({type:'RED'});
}
}
export function blueSwitch()
{
return function(dispatch)
{
dispatch({type:'BLUE'});
}
}
export function greenSwitch()
{
return function(dispatch)
{
dispatch({type:'GREEN'});
}
}
export function yellowSwitch()
{
return function(dispatch)
{
dispatch({type:'YELLOW'});
}
}
export function whiteSwitch()
{
return function(dispatch)
{
dispatch({type:'WHITE'});
}
}