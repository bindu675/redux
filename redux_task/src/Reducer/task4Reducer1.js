import *as ActionTypes from '../Action/type';

const initialstate={
num:1
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.ADD:
{
return {...state,num:state.num+action.value};
}
break;
case ActionTypes.SUB:
{
return {...state,num:state.num-action.value};
}
break;
case ActionTypes.INCREMENT:
    {
        if(state.num%2==0){    

return {...state,num:state.num+action.value};
}
  }
// break;
default:
return state;
}
}
