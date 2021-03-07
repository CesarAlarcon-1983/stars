// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var slideTracker = 0;

$(function () {
  new Header();
  new Slider();

  new fullpage(
    '#fullpage',
    {
      navigation: true,
      navigationPosition: 'left',
      dragAndMove: true
    },
    $(window).on('mousewheel keyup', _.debounce(function(e) {
      var activeSection = fullpage_api.getActiveSection().index; 
      var slider = $('.slick-slider');
      var activeSlide = slider.slick('slickCurrentSlide');
      var totalSlides = $('.home__section-3__slide').length;

      if((e.originalEvent.wheelDeltaY > 0 || e.key === 'ArrowUp') && activeSection === 2) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);

        if(slideTracker === 1) {
          slider.slick('slickPrev');
        }

        if(activeSlide === 0) {
          fullpage_api.moveSectionUp();
          fullpage_api.setAllowScrolling(true);
          fullpage_api.setKeyboardScrolling(true);
          slideTracker = 0;
        } else {
          slideTracker = 1;
        }
        
      }

      if((e.originalEvent.wheelDeltaY < 0 || e.key === 'ArrowDown') && activeSection === 2) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);

        if(slideTracker === 1) {
          slider.slick('slickNext');
        }

        if(activeSlide === totalSlides - 1) {
          slideTracker = 0;
          fullpage_api.moveSectionDown();
          fullpage_api.setAllowScrolling(true);
          fullpage_api.setKeyboardScrolling(true);
        } else {
          slideTracker = 1;
        }
      }
    }, 100))
  )
});
