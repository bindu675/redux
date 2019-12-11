import *as ActionTypes from '../Action/type';

const initialState = {
    color: ' '
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.RED:
        return { ...state, color: 'red' };
      case ActionTypes.BLUE:
        return { ...state, color: 'blue' };
      case ActionTypes.GREEN:
        return { ...state, color: 'green' };
      case ActionTypes.YELLOW:
        return { ...state, color: 'YELLOW' }; 
        case ActionTypes.WHITE:
        return { ...state, color: 'WHITE' };         
      default:
        return state;
    };
  }
export default reducer;


