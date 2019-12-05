import *as ActionTypes from '../Action/type';

const initialstate={
b:1,
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.UPDATEB:
{
return {...state,b:state.b+action.value};
}
break;
default:
return state;
}
}