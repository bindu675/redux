import *as ActionTypes from '../Action/type';

const initialstate={
a:1
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.UPDATEA:
{
return {...state,a:state.a+action.value};
}
break;
default:
return state;
}
}