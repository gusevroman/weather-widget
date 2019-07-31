import {
  TOGGLE_IS_FETCHING,
  CHANGE_POSITION_RECORD,
  UPDATE_STATUS_RECORD,
  UPDATE_TEMPERATURE,
  UPDATE_CITY
} from '../Actions';

const initialState = {
  records: [
    {
      city:     'Test A',
      weather:  'Weather test A',
      position: 1,
    },
    {
      city:     'Test B',
      weather:  'Weather test B',
      position: 2,
    },
    {
      city:     'Test C',
      weather:  'Weather test C',
      position: 3,
    },
  ],
  recordsCount: 0,
  isFetching:   false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
      };
    }
    case CHANGE_POSITION_RECORD: {
      return {
        ...state,
      };
    }
    case UPDATE_STATUS_RECORD: {
      return {
        ...state,
      };
    }
    case UPDATE_TEMPERATURE: {
      return {
        ...state,
      };
    }
    case UPDATE_CITY: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
