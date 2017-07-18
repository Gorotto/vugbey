$(document).ready(function(){
  $(".promo-slider__wrap").owlCarousel({
      loop: true,
      margin: 1,
      nav : true,
      // autoplay: true,
      navText: true,
      navigation:true,
      pagination : true,
      items: 1,
      dots: true,
      singleItem:false
    });
  $(".client-comments__wrap").owlCarousel({
      loop: true,
      margin: 1,
      nav : true,
      // autoplay: true,
      navText: true,
      navigation:true,
      pagination : true,
      items: 1,
      dots: true,
      singleItem:false
    });

/*mixItUp*/
  $('.works__wrap').mixItUp();
/*mixItUp*/

/*lightbox*/
$('.lightboxs').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }

  });
/*lightbox*/

/*spoiler*/
$(".how-we-work__content_row-title").click(function () {
    $(this).next(".how-we-work__content_row-hide").slideToggle();
      if(  $(this).children().hasClass('plus-icon__rotate') ){
         $(this).parent('.how-we-work__content_row').find('.plus-icon').removeClass('plus-icon__rotate');
       }else{
           $(this).parent('.how-we-work__content_row').find('.plus-icon').addClass('plus-icon__rotate');
       }
       return false;
  });
/*spoiler*/

/*count-block*/
var show = true;
var countbox = "#counts";
$(window).on("scroll load resize", function(){

    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

    var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

    var w_height = $(window).height();        // Высота окна браузера
    var d_height = $(document).height();      // Высота всего документа

    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

    if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        $(".spincrement").spincrement({
            thousandSeparator: "",
            duration: 1500
        });

        show = false;
    }
});
/*count-block*/

var windowWidth = $(window).width();

  $(".header__menu_toggle").click(function () {
      $(".sandwich").toggleClass("active");
  });

  if (windowWidth < 769) {
      $(".header__menu a").click(function () {
          $(".header__menu").fadeOut(600);
          $(".sandwich").toggleClass("active").append("<span>");
      });

      $(".header__menu_toggle").click(function () {
          if ($(".header__menu ").is(":visible")) {
              $(".header__menu ").fadeOut(600);
              $(".header__menu  li a").removeClass("fadeInUp animated");
          } else {
              $(".header__menu").fadeIn(600);
              $(".header__menu li a").addClass("fadeInUp animated");
          }
      });
  }

});
