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
if ($('#counts').length > 0) {
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
}
/*count-block*/

  var windowWidth = $(window).width();

  $(".header__menu_toggle").click(function () {
      $(".sandwich").toggleClass("active");
  });

  if (windowWidth < 671) {
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
  /*map*/
  /*google.maps.event.addDomListener(window, 'load', init);

  function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 13,
          scrollwheel: false,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(40.758878, -73.984631), // New York

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.758878, -73.984631),
          map: map,
          title: 'VUGBEY'
      });
  }*/
  /*map*/
  });
