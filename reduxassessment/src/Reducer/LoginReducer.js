import *as ActionTypes from '../Action/type';

const initialState = {
  username: ' ',
  password:' '
  // login:' ',
  // register:' '
  }
  const reducer = (state = initialState, action) => {
    if (!values.username) {
      errors.firstName = 'Required'
    } else if (values.username.length < 2) {
      errors.username = 'Minimum be 2 characters or more'
    }

             
      
        return state;
    };
  
export default reducer;


