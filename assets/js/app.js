window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 0  || document.documentElement.scrollTop > 0 ) {
    document.querySelector('.header').classList.add('active')
  } else {
    document.querySelector('.header').classList.remove('active')
  }
}



$('.show-more').on('click',function(e){
  e.preventDefault();
  if($('.more-content').hasClass('d-none')){
    $('.more-content').removeClass('d-none');
  }         
  else {
    $('.more-content').addClass('d-none');
  }
})

if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.review-slider', {
    slidesPerView: 3,
    spaceBetween: 100,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  })

  const projectSwiper = new Swiper('.project__icon-swiper', {
    slidesPerView: 3,
    loop:true,
    autoplay:true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  })
  
  const partnerSwiper = new Swiper('.partner__swiper', {
    slidesPerView: 8,
    loop:true,
    autoplay:true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 60,
      },
    },
  })



//eduction slider 
  var education = new Swiper(".education__slider-nav", {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var education1 = new Swiper(".education__slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: '.education__slider-nav',
    },
  });

//CLINICS slider 
  var CLINICS = new Swiper(".CLINICS__slider-nav", {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var CLINICS1 = new Swiper(".CLINICS__slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: '.CLINICS__slider-nav',
    },
  });

  //CONSTRUCTION slider 
  var CONSTRUCTION = new Swiper(".CONSTRUCTION__slider-nav", {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var CONSTRUCTION1 = new Swiper(".CONSTRUCTION__slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: '.CONSTRUCTION__slider-nav',
    },
  });

  //CULTURE slider 
  var CULTURE = new Swiper(".CULTURE__slider-nav", {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var CULTURE1 = new Swiper(".CULTURE__slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: '.CULTURE__slider-nav',
    },
  });

  //HOUSES slider 
  var HOUSES = new Swiper(".HOUSES__slider-nav", {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var HOUSES1 = new Swiper(".HOUSES__slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: '.HOUSES__slider-nav',
    },
  });
}



 
