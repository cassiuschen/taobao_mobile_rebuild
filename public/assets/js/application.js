window.UI = {
  init: function() {
    return $('.notification>.close').on('click', function() {
      return $('.notification').remove();
    });
  }
};

$(function() {
  return window.UI.init();
});
