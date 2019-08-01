import {
  PATH_CHANGE,
} from '../Actions/other';

const initialState = {
  actualPath: 'all',
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATH_CHANGE: {
      console.log(`New path: ${action.path}`);
      return {
        ...state,
        actualPath: action.path,
      };
    }
    default:
      return state;
  }
};

export default otherReducer;
