require([
    'jquery',
    'slick'
], function($) {
    $(document).ready(function() {
        $('#slider').slick({
            arrows: false,
            touchMove: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        });

        $('.service-wrap').slick({
            arrows: false,
            touchMove: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  },
                  breakpoint: 738,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                }
              ]
        });

        $('.explore').slick({
            arrows: false,
            touchMove: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                  },

                  breakpoint: 738,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                }
              ]
        });
        // slider
  $slick_slider = $('.explore');
  settings_slider = {
    dots: false,
    arrows: false
    // more settings
  }
  slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };
    })
})




