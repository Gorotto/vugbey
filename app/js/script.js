
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
