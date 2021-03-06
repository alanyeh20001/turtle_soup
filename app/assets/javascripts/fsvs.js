$(function() {
  var ticking = false;
  var isFirefox = /Firefox/i.test(navigator.userAgent);
  var isIe = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent);
  var scrollSensitivitySetting = 30;
  var slideDurationSetting = 500;
  var currentSlideNumber = 0;
  var totalSlideNumber = $('.background').length;

  function parallaxScroll(evt) {
    if (evt.type == "wheel") {
      if (isFirefox) {
        delta = evt.detail * -120;
      } else if (isIe) {
        delta = -evt.deltaY;
      } else {
        delta = evt.wheelDelta;
      }
      slide(delta);
    } else if (evt.type == "touchstart") {
      var swipe = evt.touches,
          start = swipe[0].pageY;

      $(this).on('touchmove', function(event) {
        var contact = event.touches,
            end = contact[0].pageY,
            distance = end - start;

        if (distance <= -30) {
          delta = -scrollSensitivitySetting;
        } else if (distance > 30) {
          delta = scrollSensitivitySetting;
        } else {
          delta = 0
        }
        slide(delta);
      })
      .one('touchend', function() {
        $(this).off('touchmove touchend');
      });
    }

    function slide(delta) {
      if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
          ticking = true;
          if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
          }
          slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
          ticking = true;
          if (currentSlideNumber !== 0) {
            currentSlideNumber--;
          }
          previousItem();
          slideDurationTimeout(slideDurationSetting);
        }
      }
    }
  }

  function slideDurationTimeout(slideDuration) {
    setTimeout(function () {
      ticking = false;
    }, slideDuration);
  }

  var mousewheelEvent = isFirefox ? 'DOMMouseScroll' : 'wheel';
  window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
  window.addEventListener('touchstart', _.throttle(parallaxScroll, 60), false);

  function nextItem() {
    var $previousSlide = $('.background').eq(currentSlideNumber - 1);
    $previousSlide.css('top', '-100vh');
    currentSlideTransition();
  }

  function previousItem() {
    var $previousSlide = $('.background').eq(currentSlideNumber + 1);
    $previousSlide.css('top', '100vh');
    currentSlideTransition();
  }

  function currentSlideTransition() {
    var $currentSlide = $('.background').eq(currentSlideNumber);
    $currentSlide.css('top', '0');
  }
});
