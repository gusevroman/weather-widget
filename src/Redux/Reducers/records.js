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
      const index = action.activeRecordIndex;
      let isActive = true;
      if (action.recordStatus === 'deleted') {
        isActive = false;
      }
      console.log(`Record index: ${index}`);
      console.log(`New status is active? ${isActive}`);

      const stateCopy = {
        ...state,
        records: [
          ...state.records,
        ],
      };
      stateCopy.records[index].isActive = isActive;

      return stateCopy;
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
      const from = action.index;
      const to = from - 1;
      let stateCopy;

      if (from > 0) {
        stateCopy = {
          ...state,
          records: [
            ...state.records,
          ],
        };
        [stateCopy.records[from], stateCopy.records[to]] = [stateCopy.records[to], stateCopy.records[from]];
      } else {
        stateCopy = {
          ...state,
        };
      }
      return stateCopy;
    }
    case DOWN_ROW_RECORD: {
      const lastIndex = (state.records.length - 1);
      const from = action.index;
      const to = from + 1;
      let stateCopy;

      if (from < lastIndex) {
        stateCopy = {
          ...state,
          records: [
            ...state.records,
          ],
        };
        [stateCopy.records[from], stateCopy.records[to]] = [stateCopy.records[to], stateCopy.records[from]];
      } else {
        stateCopy = {
          ...state,
        };
      }
      return stateCopy;
    }
    default:
      return state;
  }
};

export default recordsReducer;
