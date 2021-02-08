'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                fade: false,
                arrows:  false,
                autoplay: false,
                infinite: true
            });
        });
    }
};

module.exports = Slider;
