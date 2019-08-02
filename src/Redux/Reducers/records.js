import {
  TOGGLE_IS_FETCHING,
  CHANGE_POSITION_RECORD,
  UPDATE_STATUS_RECORD,
  UPDATE_TEMPERATURE,
  UPDATE_CITY,
  UP_ROW_RECORD,
  DOWN_ROW_RECORD,
} from '../Actions/records';

const initialState = {
  records: [
    {
      city:        'Test A',
      temperature: 'Temperature test A',
      isActive:    true,
      position:    0,
      id:          1,
    },
    {
      city:        'Test B',
      temperature: 'Temperature test B',
      isActive:    false,
      position:    1,
      id:          2,
    },
    {
      city:        'Test C',
      temperature: 'Temperature test C',
      isActive:    true,
      position:    2,
      id:          3,
    },
  ],
  recordsCount: 0,
  isFetching:   false,
};

const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        // isFetching: true,
      };
    }
    case CHANGE_POSITION_RECORD: {
      return {
        ...state,
      };
    }
    case UPDATE_STATUS_RECORD: {
      console.log(`Record ID: ${action.id}`);
      console.log(`New status: ${action.recordStatus}`);
      return {
        ...state,
      };
    }
    case UPDATE_TEMPERATURE: {
      console.log(`Record ID: ${action.id}`);
      console.log(`New temperature: ${action.temperature}`);
      return {
        ...state,
      };
    }
    case UPDATE_CITY: {
      console.log(`Record ID: ${action.id}`);
      console.log(`New city: ${action.city}`);
      return {
        ...state,
      };
    }
    case UP_ROW_RECORD: {
      console.log('UP');
      return {
        ...state,
      };
    }
    case DOWN_ROW_RECORD: {
      console.log('DOWN');
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default recordsReducer;
