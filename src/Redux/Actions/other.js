export const PATH_CHANGE = 'PATH-CHANGE';
export const SHOW_MODAL = 'SHOW_MODAL';

export const pathChange = path => ({
  type: PATH_CHANGE,
  path,
});
export const showModal = (name, id) => ({
  type: SHOW_MODAL,
  name,
  id,
});
