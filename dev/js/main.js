
var main = {
  //1.Function to implement stick header---HEADER
  stickyHeader: function () {
    $(window).scroll(function () {
      var sticky = $('.menu__hdr'),
        scroll = $(window).scrollTop();

      if (scroll >= 50) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
  },
  //2.Function to implement humburger---HEADER
  humburger: function () {
    $('.burger').click(function () {
      $(this).toggleClass("active");
      $(this).parents(".hdr__toggle").find(".menu__container").toggleClass("header__menu");
    })
    $('.hdr__menu li').click(function () {
      $(this).parents('.menu__container').removeClass("header__menu");
      $(this).parents('.main__hdr').find(".burger").removeClass("active");
    })
  },
  //3.Function to implement bannerslider---BANNER
  bannerSlider: function () {
    $('.banner__wrap').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      swipe: false,
      slidesToShow: 1,
      cssEase: 'linear',
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  },
  //4.Function to implement contactform validation
  contactValidn: function () {
  
  $('.contactFormPhone').blur(function()
{
    if( !$(this).val() ) {
      $('.flag-icon').hide(); 
    }
}); 
  $('.contactFormPhone').focusin(  
    function(){  
      $('.flag-icon').show(); 
    })
    $("#contactForm").validate({
      rules: {
        contactFormName: {
          required: true,
          minlength: 2,
          alphabetsnspace: true
        },
        contactFormCountry: {
          required: true,
          minlength: 2,
          alphabetsnspace: true
        },
        email: {
          required: true,
          email: true
        },
        contactFormPhone: {
          required: true,
          uaePhone: true
        },
        contactFormMessage: {
          required: true
        },
        contactbroker: {
          required: true,
        },
        contacthear: {
          required: true,
        },
        contactinterest: {
          required: true,
        }
      },
      messages: {
        contactFormName: {
          required: main.getRequired(".contact-form #firstname"),
          minlength: main.getminlength('.contact-form #firstname'),
          alphabetsnspace: main.getalphabets('.contact-form #firstname'),
        },
        contactFormCountry: {
          required: main.getRequired(".contact-form #contactFormCountry"),
          minlength: main.getminlength('.contact-form #contactFormCountry'),
          alphabetsnspace: main.getalphabets('.contact-form #contactFormCountry'),
        },
        email: {
          required: main.getRequired(".contact-form .email"),
        },
        contactFormPhone: {
          required: main.getRequired(".contact-form .contactFormPhone")
        },
        contactFormMessage: {
          required: main.getRequired(".contact-form .contactFormMessage"),
        },
        contactbroker: {
          required: main.getRequired(".contact-form .contactbroker")
        },
        contacthear: {
          required: main.getRequired(".contact-form .contacthear"),
        },
        contactinterest: {
          required: main.getRequired(".contact-form .contactinterest"),
        }
      }
    });
  },
  //5.slider
  slider: function () {
    $('.slider__wrap').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      slidesToShow: 1,
      dots: true
    });
  },
  //6.video
  video: function () {
    $(".btn__watchvideo").click(function (e) {
      e.preventDefault();
      $(".video-container").show();
      $(".home__videocontainer").hide();
    })

  },
  //7.scrolltop
  scrollTop: function () {
    $(".backtotop").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 900);
      return false;
    });
  },

  getminlength: function (selector) {
    return $(selector).attr('data-minLength');
  },
  getRequired: function (selector) {
    return $(selector).attr('data-required');
  },
  getalphabets: function (selector) {
    return $(selector).attr('data-alphabetsnspace');
  },

}

$(document).ready(function () {
  AOS.init();
  $('map').imageMapResize();
  let scrollRef = 0;
  $(window).on("resize scroll", function () {
    // increase value up to 10, then refresh AOS
    scrollRef <= 10 ? scrollRef++ : AOS.refresh();
  });
  // JavaScript for label effects only
  $('.input-parent input,.input-parent textarea').val("");
  $('.input-parent input, .input-parent textarea').focusout(function () {
    var text_val = $(this).val();
    if (text_val === "") {
      console.log("empty!");
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });
  //video

  main.stickyHeader();
  main.humburger();
  // main.bannerSlider();
  main.contactValidn();
  main.slider();
  main.video();
  main.scrollTop();
  $('.tab-content').hide();
  // Click function
  $('.area__content').click(function () {
    $('.tab-content').hide();
    var activeTab = $(this).attr('href');
    $(activeTab).show();
    return false;
  });
  $('.back_to_plancls').click(function (e) {
    e.preventDefault();
    $('.tab-content').hide();
  });

  // phone number regex 
  $.validator.addMethod(
    "uaePhone",
    function (value, element) {
      // UAE phone number pattern without the country code
      var regex = /^[56789]\d{8}$/;
      return this.optional(element) || regex.test(value);
    },
    "Phone Number is not valid"
  );
  $.validator.addMethod("alphabetsnspace", function (value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
  })
})



