import *as ActionTypes from '../Action/type';

const initialState = {
  username: ' ',
  password:' ',
  
  
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.USERNAME:
        return { ...state, username: 'USERNAME' };
        
        

      case ActionTypes.PASSWORD:
        return { ...state, password: 'PASSWORD' };
       



      default:
        return state;
    };
  }
export default reducer;


