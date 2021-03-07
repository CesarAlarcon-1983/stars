'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__nav__close');
    var arrowLeft = $('.-js-arrow-left')
    var arrowRight = $('.-js-arrow-right')
    var languages = $('.header__lang a');

    if(window.location.pathname.length > 1) {
        $(languages[1]).addClass('-active');
    } else {
        $(languages[0]).addClass('-active');
    }

    menuOpen.on('click', function(){
        header.addClass('-open');
        body.addClass('-hideOverflow');
    });

    menuClose.on('click', function(){
        header.removeClass('-open');
        body.removeClass('-hideOverflow');
    });

    arrowLeft.on('click', function() {
        $('.slick-slider').slick('slickPrev')
    })

    arrowRight.on('click', function(e) {
        console.log(e)
        console.log('clicked')
        $('.slick-slider').slick('slickNext')
    })

    var targets = $('[data-target]');
    var contents = $('[data-content]');
    var contentWrapper = $('.home__section-4__text-group');
    
    $(targets[0]).addClass('-active');
    $(contents[0]).addClass('-active');
  
    contentWrapper.height($(contents[0]).height());
  
    targets.on('click', function() {
      targets.removeClass('-active')
      contents.removeClass('-active')
  
      var target = $(this).data('target');
      var targettedContent = contents.filter(function() {
        return $(this).data('content') == target;
      })
  
      $(this).addClass('-active');
      targettedContent.addClass('-active');
      contentWrapper.height(targettedContent.height());  
    })
};

module.exports = Header;
