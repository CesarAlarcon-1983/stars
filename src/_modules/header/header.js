'use strict';

// Constructor
var Header = function () {
  var header = $('.header');
  var body = $('body');
  var menuOpen = $('.header__hamburguer');
  var menuClose = $('.header__nav__close');
  var arrowLeft = $('.-js-arrow-left')
  var arrowRight = $('.-js-arrow-right')
  var languages = $('.header__lang a');
  var sections = $('.section');
  var slides = $('.slide');

  var activeSection = 1;
  var activeSlide = 1;
  var isAnimating = false;

  // sections.filter(function () {
  //   return $(this).data('section') !== activeSection
  // }).addClass('next-section');
  var slideTracker = 0;

  $(window).on('mousewheel', _.debounce(function (e) {
    console.log(isAnimating)
    if (!isAnimating) {
      isAnimating = true;
      const scrollDirection = getScrollDirection(e);

      if (activeSection != 3) {
        scrollSection(scrollDirection)
      } else {
        if (activeSlide > 1 && activeSlide < slides.length) {
          scrollSlide(scrollDirection)
          slideTracker = 1
        }

        if(activeSlide === 1 && scrollDirection === 'up') {
          if(slideTracker === 0) {
            scrollSection(scrollDirection)
          } else {
            slideTracker = 0;
          }
        }

        if(activeSlide === 1 && scrollDirection === 'down') {
          scrollSlide(scrollDirection)
          slideTracker = 1;
        }

        if(activeSlide === slides.length && scrollDirection === 'up') {
          scrollSlide(scrollDirection)
          slideTracker = 1;
        }

        if(activeSlide === slides.length && scrollDirection === 'down') {
          if(slideTracker === 0) {
            scrollSection(scrollDirection)
          } else {
            slideTracker = 0;
          }
        }
      }
    }
    if (isAnimating) {
      setTimeout(() => {
        isAnimating = false;
      }, 1050);
    }
  }, 1000, { 'leading': true }))

  function scrollSection(direction) {
    if (direction === 'down') {
      if(activeSection === sections.length) return
      updateActiveSection('add')
    } else {
      if(activeSection === 1) return
      updateActiveSection('less');
    }
  
    updateSections();
  }
  
  function scrollSlide(direction) {
    if (direction === 'down') {
      updateActiveSlide('add')
    } else {
      updateActiveSlide('less');
    }
    
    updateSlides();
  }

  function updateActiveSection(algo) {
    activeSection = algo === 'add' && activeSection < sections.length ? activeSection + 1 : activeSection - 1;
  }

  function updateActiveSlide(algo) {
    activeSlide = algo === 'add' && activeSlide < slides.length ? activeSlide + 1 : activeSlide - 1;
  }
  function updateSections() {
    sections.each(function () {
      if ($(this).data('section') < activeSection) {
        $(this).addClass('prev-section')
        $(this).removeClass('next-section')
      }

      if ($(this).data('section') > activeSection) {
        $(this).addClass('next-section')
        $(this).removeClass('prev-section')
      }

      if ($(this).data('section') === activeSection) {
        $(this).removeClass('next-section')
        $(this).removeClass('prev-section')
      }
    });
  }

  function updateSlides() {
    slides.each(function () {
      if ($(this).data('slide') < activeSlide) {
        $(this).addClass('prev-slide')
        $(this).removeClass('next-slide')
      }

      if ($(this).data('slide') > activeSlide) {
        $(this).addClass('next-slide')
        $(this).removeClass('prev-slide')
      }

      if ($(this).data('slide') === activeSlide) {
        $(this).removeClass('next-slide')
        $(this).removeClass('prev-slide')
      }
    });
  }
  if (window.location.pathname.length > 1) {
    $(languages[1]).addClass('-active');
  } else {
    $(languages[0]).addClass('-active');
  }

  function getScrollDirection(e) {
    return e.originalEvent.deltaY > 0 ? 'down' : 'up'
  }

  menuOpen.on('click', function () {
    header.addClass('-open');
    body.addClass('-hideOverflow');
  });

  menuClose.on('click', function () {
    header.removeClass('-open');
    body.removeClass('-hideOverflow');
  });

  arrowLeft.on('click', function () {
    scrollSlide('up')
  })

  arrowRight.on('click', function (e) {
    scrollSlide('down')
  })

  var targets = $('[data-target]');
  var contents = $('[data-content]');
  var contentWrapper = $('.home__section-4__text-group');

  $(targets[0]).addClass('-active');
  $(contents[0]).addClass('-active');

  contentWrapper.height($(contents[0]).height());

  targets.on('click', function () {
    targets.removeClass('-active')
    contents.removeClass('-active')

    var target = $(this).data('target');
    var targettedContent = contents.filter(function () {
      return $(this).data('content') == target;
    })

    $(this).addClass('-active');
    targettedContent.addClass('-active');
    contentWrapper.height(targettedContent.height());
  })

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#buscar"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#registro"]')
    .not('[href="#login"]')
    .on('click', function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top + - 70
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
          });
        }
      }
    });
};

module.exports = Header;
