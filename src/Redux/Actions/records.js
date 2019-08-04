export const TOGGLE_IS_FETCHING    = 'TOGGLE-IS-FETCHING';
export const UPDATE_STATUS_RECORD  = 'UPDATE-STATUS-RECORD';
export const UPDATE_TEMPERATURE    = 'UPDATE-TEMPERATURE';
export const UPDATE_CITY           = 'UPDATE-CITY';
export const MODAL_CHANGES_PREPARE = 'MODAL-CHANGES-PREPARE ';
export const MODAL_CHANGES_SAVE    = 'MODAL-CHANGES-SAVE';
export const MODAL_CHANGES_CANCEL  = 'MODAL-CHANGES-CANCEL';
export const UP_ROW_RECORD         = 'UP-ROW-RECORD';
export const DOWN_ROW_RECORD       = 'DOWN-ROW-RECORD';

export const toggleIsFetching     = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
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
export const modalChangesPrepare    = (activeRecordIndex) => ({
  type: MODAL_CHANGES_PREPARE,
  activeRecordIndex,
});
export const modalChangesSave    = (activeRecordIndex) => ({
  type: MODAL_CHANGES_SAVE,
  activeRecordIndex,
});
export const modalChangesCancel    = () => ({
  type: MODAL_CHANGES_CANCEL,
});
export const updateCity           = (city, activeRecordIndex) => ({
  type: UPDATE_CITY,
  city,
  activeRecordIndex,
});
export const upRowRecord          = index => ({
  type: UP_ROW_RECORD,
  index,
});
export const downRowRecord        = index => ({
  type: DOWN_ROW_RECORD,
  index,
});
