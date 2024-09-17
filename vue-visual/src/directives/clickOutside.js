export const clickOutside = {
  directiveName: 'click-outside',
  bind: (el, binding, vnode) => {
    const handler = (event) => {
      if (el.contains(event.target)) {
        return;
      }
      if (vnode.context.clearFocus) {
        vnode.context.clearFocus();
      }
    };
    document.addEventListener('click', handler);
    el.__clickOutsideHandler = handler;
  },
  unbind: (el) => {
    document.removeEventListener('click', el.__clickOutsideHandler);
    delete el.__clickOutsideHandler;
  },
};
