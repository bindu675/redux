import *as ActionTypes from '../Action/type';

const initialstate={
c:1,
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.UPDATEC:
{
return {...state,c:state.c+action.value};
}
break;
default:
return state;
}
}