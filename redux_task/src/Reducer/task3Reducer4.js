import *as ActionTypes from '../Action/type';

const initialstate={
d:1,
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.UPDATE_D:
{
return {...state,d:state.d+action.value};
}
break;
default:
return state;
}
}