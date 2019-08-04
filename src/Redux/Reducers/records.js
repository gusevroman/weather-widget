import {
  TOGGLE_IS_FETCHING,
  UPDATE_STATUS_RECORD,
  UPDATE_TEMPERATURE,
  UPDATE_CITY,
  MODAL_CHANGES_PREPARE,
  MODAL_CHANGES_SAVE,
  MODAL_CHANGES_CANCEL,
  UP_ROW_RECORD,
  DOWN_ROW_RECORD,
} from '../Actions/records';

const initialState = {
  records: [
    {
      city:        'Test A',
      temperature: 291.21,
      isActive:    true,
      position:    0,
      id:          1,
    },
    {
      city:        'Test B',
      temperature: 255,
      isActive:    false,
      position:    1,
      id:          2,
    },
    {
      city:        'Test C',
      temperature: 280.32,
      isActive:    true,
      position:    2,
      id:          3,
    },
  ],
  cityTemporaryName:         '',
  temperatureTemporaryValue: 0,
  recordsCount:              0,
  isFetching:                false,
};

const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        // isFetching: true,
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
      const index = action.activeRecordIndex;
      const { temperature } = action;
      console.log(`New temperature: ${temperature}`);
      const stateCopy = {
        ...state,
        records: [
          ...state.records,
        ],
        temperatureTemporaryValue: temperature,
      };
      return stateCopy;
    }
    case UPDATE_CITY: {
      const index = action.activeRecordIndex;
      const cityOriginal = action.city;
      console.log(`New city: ${action.cityOriginal}`);
      const stateCopy = {
        ...state,
        records: [
          ...state.records,
        ],
        cityTemporaryName: cityOriginal,
      };
      // stateCopy.records[index].city = city;
      return stateCopy;
    }
    case MODAL_CHANGES_PREPARE: {
      const index = action.activeRecordIndex;
      const city  = state.records[index].city;
      const temperature  = state.records[index].temperature;
      console.log(`MODAL_CHANGES_PREPARE. Index: ${index}, City: ${city}, T: ${temperature}`);
      const stateCopy = {
        ...state,
        cityTemporaryName: city,
        temperatureTemporaryValue: temperature,
      };

      return stateCopy;
    }
    case MODAL_CHANGES_SAVE: {
      const index = action.activeRecordIndex;
      console.log(`MODAL_CHANGES_SAVE. Index: ${index}, City: ${state.cityTemporaryName}, T: ${state.temperatureTemporaryValue}`);
      const stateCopy = {
        ...state,
        records: [
          ...state.records,
        ],
      };
      stateCopy.records[index].city = stateCopy.cityTemporaryName;
      stateCopy.records[index].temperature = stateCopy.temperatureTemporaryValue;
      stateCopy.cityTemporaryName = '';
      stateCopy.temperatureTemporaryValue = 0;

      return stateCopy;
    }
    case MODAL_CHANGES_CANCEL: {
      console.log('MODAL_CHANGES_CANCEL');
      return {
        ...state,
        cityTemporaryName:         '',
        temperatureTemporaryValue: 0,
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
