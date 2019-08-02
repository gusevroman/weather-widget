export const SHOW = 'SHOW';
export const HIDE = 'HIDE';

export const show = (name, id) => ({
  type: SHOW,
  name,
  id,
});
export const hide = name => ({
  type: HIDE,
  name,
});
