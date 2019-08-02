import {
  SHOW,
  HIDE,
} from '../Actions/modals';

const initialState = {
  modals:         [],
  activeRecordId: -1,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW: {
      console.log(`Show modal ${action.name} for ID = ${action.id} `);
      return {
        ...state,
        activeRecordId: action.id,
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
