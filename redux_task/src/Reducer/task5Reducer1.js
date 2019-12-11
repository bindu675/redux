import *as ActionTypes from '../Action/type';

const initialstate={
    number1:' ',
    number2:' ',
    operator:' ',
    result:' ',
    msg:' '
}
export default(state=initialstate,action)=>{
    switch(action.type){
        case "SEND":{
            return{...state,[action.payload.name]:action.payload.value}
        }
        case "CHECK" :{
            switch(state.operator){
                case '+':
                    if(parseInt(state.number1) + parseInt(state.number2)==state.result)
                    return{...state,msg:'correct'}
                    else
                    return{...state,msg:'incorrecr'}
                case '-':
                    if((state.number1-state.number2)==state.result)
                    return{...state,msg:'correct'}
                    else 
                    return{...state,msg:'incorrect'}
                case '*':
                    if((state.number1*state.number2)==state.result)
                    return{...state,msg:'correct'}
                    else 
                    return{...state,msg:'incorrect'}
                case '/':
                    if((state.number1/state.number2)==state.result)
                    return{...state,msg:'correct'}
                    else 
                    return{...state,msg:'incorrect'}  
                    default:return{...state,msg:"SUCCESFULL TASK"}  
            }
        }
        default:
          return state;
    }
}