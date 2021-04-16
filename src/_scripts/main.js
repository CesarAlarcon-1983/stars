// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
// var slideTracker = 0;

$(function () {
  new Header();
  new Slider();

  // const fullpageInst = new fullpage(
  //   '#fullpage',
  //   {
  //     navigation: true,
  //     navigationPosition: 'left',
  //     dragAndMove: true
  //   },
  // )

  // if(window.matchMedia("(min-width: 1020px)").matches) {
  //   fullpageInst.setAllowScrolling(false);
  //   fullpageInst.setKeyboardScrolling(false);

  //   $(window).on('mousewheel keyup', function(e) {
  //     console.log(e.target);
  //   })

  //   $(window).on('mousewheel keyup', _.debounce(function(e) {
  //     console.log(e);
  //     var activeSection = fullpageInst.getActiveSection().index; 
  //     var slider = $('.slick-slider');
  //     var activeSlide = slider.slick('slickCurrentSlide');
  //     var totalSlides = $('.home__section-3__slide').length;
  
  //     if((e.originalEvent.wheelDeltaY < 0 || e.key === 'ArrowDown') && activeSection === 0) {
  //       fullpageInst.moveSectionDown();
  //     }
  
  //     if((e.originalEvent.wheelDeltaY < 0 || e.key === 'ArrowDown') && activeSection === 1) {
  //       fullpageInst.moveSectionDown();
  //     }
  
  //     if((e.originalEvent.wheelDeltaY > 0 || e.key === 'ArrowUp') && activeSection === 1) {
  //       fullpageInst.moveSectionUp();
  //     }

  //     if((e.originalEvent.wheelDeltaY < 0 || e.key === 'ArrowDown') && activeSection === 3) {
  //       fullpageInst.moveSectionDown();
  //     }
  
  //     if((e.originalEvent.wheelDeltaY > 0 || e.key === 'ArrowUp') && activeSection === 3) {
  //       fullpageInst.moveSectionUp();
  //     }

  //     if((e.originalEvent.wheelDeltaY > 0 || e.key === 'ArrowUp') && activeSection === 4) {
  //       fullpageInst.moveSectionUp();
  //     }

  //     if((e.originalEvent.wheelDeltaY > 0 || e.key === 'ArrowUp') && activeSection === 2) {
  //       // fullpageInst.setAllowScrolling(false);
  //       // fullpageInst.setKeyboardScrolling(false);
  
  //       if(slideTracker === 1) {
  //         slider.slick('slickPrev');
  //       }
  
  //       if(activeSlide === 0) {
  //         fullpageInst.moveSectionUp();
  //         // fullpageInst.setAllowScrolling(true);
  //         // fullpageInst.setKeyboardScrolling(true);
  //         slideTracker = 0;
  //       } else {
  //         slideTracker = 1;
  //       }
  //     }
  
  //     if((e.originalEvent.wheelDeltaY < 0 || e.key === 'ArrowDown') && activeSection === 2) {
  //       // fullpageInst.setAllowScrolling(false);
  //       // fullpageInst.setKeyboardScrolling(false);
  
  //       if(slideTracker === 1) {
  //         slider.slick('slickNext');
  //       }
  
  //       if(activeSlide === totalSlides - 1) {
  //         slideTracker = 0;
  //         fullpageInst.moveSectionDown();
  //         // fullpageInst.setAllowScrolling(true);
  //         // fullpageInst.setKeyboardScrolling(true);
  //       } else {
  //         slideTracker = 1;
  //       }
  //     }
  //   }, 1000, {'leading': true}))
  // }
});
