export const SHOW = 'SHOW';
export const HIDE = 'HIDE';

export const show = (name, props) => ({
  type: SHOW,
  name,
  props,
});
export const hide = name => ({
  type: HIDE,
  name,
});
