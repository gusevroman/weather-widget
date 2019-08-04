import {
  PATH_CHANGE,
  SHOW_MODAL,
} from '../Actions/other';
// import {SHOW} from "../Actions/modals";

const initialState = {
  actualPath: 'all',
  activeRecordId: -1,
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
    case SHOW_MODAL: {
      console.log(`Show modal ${action.name} for ID = ${action.id} `);
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
