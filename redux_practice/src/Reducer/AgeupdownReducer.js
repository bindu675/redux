import *as ActionTypes from '../Actions/type';

const initialstate={
age:20
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.AGE_UP1:
{
return {...state,age:state.age+action.value};
}
break;
case ActionTypes.AGE_DOWN1:
{
return {...state,age:state.age-action.value};
}
break;
default:
return state;
}
}


