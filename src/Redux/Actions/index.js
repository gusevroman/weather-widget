export const TOGGLE_IS_FETCHING     = 'TOGGLE-IS-FETCHING';
export const CHANGE_POSITION_RECORD = 'CHANGE-POSITION-RECORD';
export const UPDATE_STATUS_RECORD   = 'UPDATE-STATUS-RECORD';
export const UPDATE_TEMPERATURE     = 'UPDATE-TEMPERATURE';
export const UPDATE_CITY            = 'UPDATE-CITY';

export const toggleIsFetching     = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const changePositionRecord = (recordPosition, direction) => ({
  type: CHANGE_POSITION_RECORD,
  recordPosition,
  direction,
});
export const updateStatusRecord   = recordStatus => ({
  type: UPDATE_STATUS_RECORD,
  recordStatus,
});
export const updateTemperature    = temperature => ({
  type: UPDATE_TEMPERATURE,
  temperature,
});
export const updateCity           = city => ({
  type: UPDATE_CITY,
  city,
});
