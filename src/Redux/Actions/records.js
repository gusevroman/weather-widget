import weatherAPI from '../../API/api';

export const UPDATE_STATUS_RECORD  = 'UPDATE-STATUS-RECORD';
export const UPDATE_TEMPERATURE    = 'UPDATE-TEMPERATURE';
export const UPDATE_CITY           = 'UPDATE-CITY';
export const MODAL_CHANGES_PREPARE = 'MODAL-CHANGES-PREPARE ';
export const MODAL_CHANGES_SAVE    = 'MODAL-CHANGES-SAVE';
export const MODAL_CHANGES_CANCEL  = 'MODAL-CHANGES-CANCEL';
export const UP_ROW_RECORD         = 'UP-ROW-RECORD';
export const DOWN_ROW_RECORD       = 'DOWN-ROW-RECORD';
export const SET_RECORD            = 'SET-RECORD';
export const SET_ERROR_STATUS      = 'SET_ERROR-STATUS';
export const SET_ACTIVE_RECORD_ID  = 'SET-ACTIVE-RECORD-ID';

export const updateStatusRecord   = (recordStatus, activeRecordIndex) => ({
  type: UPDATE_STATUS_RECORD,
  recordStatus,
  activeRecordIndex,
});
export const updateTemperature    = (temperature, activeRecordIndex) => ({
  type: UPDATE_TEMPERATURE,
  temperature,
  activeRecordIndex,
});
export const modalChangesPrepare  = activeRecordIndex => ({
  type: MODAL_CHANGES_PREPARE,
  activeRecordIndex,
});
export const modalChangesSave     = activeRecordIndex => ({
  type: MODAL_CHANGES_SAVE,
  activeRecordIndex,
});
export const modalChangesCancel   = () => ({
  type: MODAL_CHANGES_CANCEL,
});
export const updateCity           = (city, activeRecordIndex, formName) => ({
  type: UPDATE_CITY,
  city,
  activeRecordIndex,
  formName,
});
export const upRowRecord          = index => ({
  type: UP_ROW_RECORD,
  index,
});
export const downRowRecord        = index => ({
  type: DOWN_ROW_RECORD,
  index,
});
export const setRecord            = record => ({
  type: SET_RECORD,
  record,
});
export const setErrorStatus       = status => ({
  type: SET_ERROR_STATUS,
  status,
});
export const setActiveRecordId    = id => ({
  type: SET_ACTIVE_RECORD_ID,
  id,
});

// Thunks
export const getWeather          = cityName => (dispatch) => {
  weatherAPI.getWeather(cityName)
    .then((data) => {
      if (data.status !== 'error') {
        dispatch(setErrorStatus(false));
        dispatch(setRecord(data.main.temp));
      }
    })
    .catch(() => {
      dispatch(setErrorStatus(true));
    });
};
