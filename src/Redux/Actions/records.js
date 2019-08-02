export const TOGGLE_IS_FETCHING     = 'TOGGLE-IS-FETCHING';
export const CHANGE_POSITION_RECORD = 'CHANGE-POSITION-RECORD';
export const UPDATE_STATUS_RECORD   = 'UPDATE-STATUS-RECORD';
export const UPDATE_TEMPERATURE     = 'UPDATE-TEMPERATURE';
export const UPDATE_CITY            = 'UPDATE-CITY';
export const UP_ROW_RECORD          = 'UP-ROW-RECORD';
export const DOWN_ROW_RECORD        = 'DOWN-ROW-RECORD';

export const toggleIsFetching     = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const changePositionRecord = (recordPosition, direction) => ({
  type: CHANGE_POSITION_RECORD,
  recordPosition,
  direction,
});
export const updateStatusRecord   = (recordStatus, activeRecordIndex) => ({
  type: UPDATE_STATUS_RECORD,
  recordStatus,
  activeRecordIndex,
});
export const updateTemperature    = (temperature, id) => ({
  type: UPDATE_TEMPERATURE,
  temperature,
  id,
});
export const updateCity           = (city, id) => ({
  type: UPDATE_CITY,
  city,
  id,
});
export const upRowRecord          = id => ({
  type: UP_ROW_RECORD,
  id,
});
export const downRowRecord        = id => ({
  type: DOWN_ROW_RECORD,
  id,
});
