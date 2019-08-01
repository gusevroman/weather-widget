import {
  SHOW,
  HIDE,
} from '../Actions/modals';

const initialState = {
  modals: [],
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW: {
      console.log('Show modal');
      return {
        ...state,
        // isFetching: true,
      };
    }
    case HIDE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default modalsReducer;
