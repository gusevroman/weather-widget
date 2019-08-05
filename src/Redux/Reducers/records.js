import {
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
  records:                   [],
  actualRecordIndex:         -1,
  cityRequestName:           '',
  cityTemporaryName:         '',
  temperatureTemporaryValue: '',
  recordsCount:              0,
  isFetching:                false,
  isRequestError:            false,
};

const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATUS_RECORD: {
      const index = action.activeRecordIndex;
      let isActive = true;
      if (action.recordStatus === 'deleted') {
        isActive = false;
      }

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
      const { temperature } = action;
      const stateCopy = {
        ...state,
        temperatureTemporaryValue: temperature,
      };
      return stateCopy;
    }
    case UPDATE_CITY: {
      const cityFromForm = action.city;
      const stateCopy = {
        ...state,
      };
      switch (action.formName) {
        case 'modalChange': {
          stateCopy.cityTemporaryName = cityFromForm;
          break;
        }
        case 'formRequest': {
          stateCopy.cityRequestName = cityFromForm;
          break;
        }
        default: {
          //
        }
      }
      return stateCopy;
    }
    case MODAL_CHANGES_PREPARE: {
      const index = action.activeRecordIndex;
      const city  = state.records[index].city;
      const temperature  = state.records[index].temperature;
      const stateCopy = {
        ...state,
        actualRecordIndex: index,
        cityTemporaryName:          city,
        temperatureTemporaryValue:  temperature,
      };

      return stateCopy;
    }
    case MODAL_CHANGES_SAVE: {
      const index = action.activeRecordIndex;
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
      return {
        ...state,
        actualRecordIndex: -1,
        cityTemporaryName:          '',
        temperatureTemporaryValue:  0,
      };
    }
    case UP_ROW_RECORD: {
      const from = action.index;
      const to =   from - 1;
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
      const from =      action.index;
      const to =        from + 1;
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
      const date = new Date();
      const newRecord = {
        city:        state.cityRequestName,
        temperature: action.record,
        isActive:    true,
        position:    state.records.length,
        id:          date.getTime(),
      };
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
