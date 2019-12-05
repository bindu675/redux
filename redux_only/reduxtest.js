const {createStore} = require ('redux');

const initialState ={
    age:21,
    // name:"vandhu"

};


const myReducer = (state=initialState, action)=>{
    const newState ={...state};
//     if(action.type === 'ADD'){
//         // newState.name+="gowda";
//         newState.age+=10;
//     }
//     if(action.type === 'SUB'){
//         newState.age-=5;
//     }
//     if(action.type === 'MUL'){
//         newState.age*=3;
//     }
//     return newState;
// }
        switch(action.type){
            case "ADD": newState.age+=10;
           return newState;
           case "SUB": newState.age-=5;
           return newState;
           case "MUL": newState.age*="3";
           return newState;
           default:action.initialState;
           return newState;
        }
        return newState;
            

        }
        
const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('state changed', JSON.stringify(store.getState()));
})
console.log('initialState', JSON.stringify(store.getState()));
store.dispatch({type:"ADD"});
store.dispatch({type:"SUB"});
store.dispatch({type:"MUL"});
// store.dispatch({type:"ADD", payload:10});