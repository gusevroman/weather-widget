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
  SET_RECORD,
  SET_ERROR_STATUS,
} from '../Actions/records';

const initialState = {
  records: [

  ],
  actualRecordIndexTemporary: -1,
  cityRequestName:            '',
  cityTemporaryName:          '',
  temperatureTemporaryValue:  '',
  recordsCount:               0,
  isFetching:                 false,
  isRequestError:             false,
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
      // console.log(`New temperature: ${temperature}`);
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
      const cityFromForm = action.city;
      const stateCopy = {
        ...state,
      };
      if(action.formName == 'modalChange') {
        stateCopy.cityTemporaryName = cityFromForm;
      } else if (action.formName == 'formRequest') {
        stateCopy.cityRequestName = cityFromForm;
      }
      // stateCopy.records[index].city = city;
      return stateCopy;
    }
    case MODAL_CHANGES_PREPARE: {
      const index = action.activeRecordIndex;
      const city  = state.records[index].city;
      const temperature  = state.records[index].temperature;
      // console.log(`MODAL_CHANGES_PREPARE. Index: ${index}, City: ${city}, T: ${temperature}`);
      const stateCopy = {
        ...state,
        actualRecordIndexTemporary: index,
        cityTemporaryName:          city,
        temperatureTemporaryValue:  temperature,
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
        actualRecordIndexTemporary: -1,
        cityTemporaryName:          '',
        temperatureTemporaryValue:  0,
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
    case SET_RECORD: {
      let date = new Date();
      console.log(`Reducer: SET_RECORD (${action.record})`);
      const newRecord = {
        city:        state.cityRequestName,
        temperature: action.record,
        isActive:    true,
        position:    state.records.length,//
        id:          date.getTime(),//
      };

      console.log(newRecord);
      const stateCopy = {
        ...state,
        records: [
          ...state.records,
        ],
      };

      stateCopy.records.push(newRecord);

      return stateCopy;
    }
    case SET_ERROR_STATUS: {
      console.log(`Reducer: SET_ERROR_STATUS (${action.status})`);
      return {
          ...state,
          isRequestError: action.status,
      };
    }
    default:
      return state;
  }
};

export default recordsReducer;
