const initialState = {
    age:20
    };
    
    const reducer = (state=initialState, action) => {
    const newState = {...state};
    
    if(action.type === 'AGE_UP'){
    newState.age=newState.age+action.value;
    if(newState.age>=31){
        newState.age=newState.age-action.value;
    }
    }

    if(action.type === 'AGE_DOWN'){
    newState.age=newState.age-action.value;
    if(newState.age<=14){
        newState.age=newState.age+action.value;
       
    }
    }
    return newState;
    };

    
    export default reducer;