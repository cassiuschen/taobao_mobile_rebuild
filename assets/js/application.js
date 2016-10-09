window.UI = {
  resize: function() {
    var _fontSize, _scale;
    _scale = 1;
    _scale /= window.devicePixelRatio;
    $('head').append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=" + _scale + ", maximum-scale=" + _scale + ", user-scalable=no\">");
    _fontSize = $(document).width() / 10 + "px";
    console.log($(document).width());
    return $('html').css('font-size', _fontSize);
  },
  onFinishLoading: function() {
    $('body').removeClass('onload');
    return $('.loader').fadeOut(2000);
  },
  init: function() {
    this.resize();
    $('.notification>.close').on('click', function() {
      return $('.notification').remove();
    });
    return setTimeout(function() {
      return window.UI.onFinishLoading();
    }, 3000);
  }
};

$(document).ready(function() {
  return window.UI.init();
});
