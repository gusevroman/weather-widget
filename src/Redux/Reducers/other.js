import {
  PATH_CHANGE,
  SHOW_MODAL,
} from '../Actions/other';

const initialState = {
  actualPath:     'all',
  activeRecordId: -1,
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATH_CHANGE: {
      return {
        ...state,
        actualPath: action.path,
      };
    }
    case SHOW_MODAL: {
      return {
        ...state,
        activeRecordId: action.id,
      };
    }
    default:
      return state;
  }
};

export default otherReducer;
