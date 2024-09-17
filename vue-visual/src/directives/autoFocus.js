export const autoFocus = {
  directiveName: 'auto-focus',
  inserted: function (el) {
    console.log(el, el instanceof HTMLInputElement);

    el.$nextTick(function () {
      console.log(el);

      //   el.focus();
    });
  },
};
