
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
