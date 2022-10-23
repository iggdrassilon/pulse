document.addEventListener("DOMContentLoaded", function () {
  console.log('Document ready!');

 
  /* Tiny slider from ganlanyuan github io/tiny-slider 3.10.22/*/

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 1000,
    autoplay: true,
    autoplayButtonOutput: false
  });
  
  document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });
  
  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
  });  

  /* Jquery tabs script from denis-creative com/jquery-tabs/  1.10.22*/

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)    
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  /* second minimal script for tabs 6.10.22*/
  
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

   /* Validation  10.10.22*/

   function valideForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true,
        },
        email: {
          required: true,
          email: true
        }},
      messages: {
        name: {
          required: "Йоу, укажи свое имя!",
          minlength: jQuery.validator.format("Минимум {0} буквы!")
        },
        phone: "А здесь номер телефона",
        email: {
          required: "Укажи почту для связи.",
          email: "Укажи почтовый email адрес."
        }
      }
    });
  };
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+ 7(999)999-99-99");

  /* Modal 8.10.22*/

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');

  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thankyou').fadeOut(100)
  });
  $('.modal__close-for-mobile').on('click', function() {
    $('.overlay, #consultation, #order, #thankyou').fadeOut('slow')
  });

  $('.button__price').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  }); 
  /* Smooth scroll and pageup 19.10.22 */
  $( window ).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else { 
      $('.pageup').fadeOut();
    }
  });
  
  /* scroll script slowly */
  $("a[href^='#]").trigger(function(click) {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  
  new WOW().init();

});


