$( ".job__item" ).hover(
  function() {
    $('.job__item').addClass('active')
    $( this ).removeClass( "active" );
  }, function() {
    $('.job__item').removeClass('active')
    $('.job__item').removeClass('active')
  }
);

const banner = document.querySelector('.banner');
const header =  document.querySelector('.header')
window.onscroll = function() {scrollFunction(banner.offsetHeight)};
function scrollFunction(scollHeight) {
  if (document.body.scrollTop > scollHeight  || document.documentElement.scrollTop > scollHeight ) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

$(document).ready(function() {
  if($(window).width() < 993) {
    window.onscroll = function() {scrollFunction(0)};
  }

  $('.callback-link').on('click',function(){
    $('.callback-popup').toggle();
    $('.callback-popup').toggleClass('fade');
  })
  $('.popup-close-btn').on('click', function(){
    $('.callback-popup').hide();
  })
  
  $(document).on('click', function(e){
    if(!$(e.target).closest(".callback-wrapper").length) {
      $('.callback-popup').hide();
    }
  })
});


if (typeof Swiper !== 'undefined') {
  const blogSwiper = new Swiper('.blog-swiper', {
    slidesPerView: 3,
    spaceBetween: 100,
    // loop:true, 
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 1.7,
        spaceBetween: 50,
      },
    },
  })

  const reviewSwiper = new Swiper('.review-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  })
}

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.faces',
      start: '300px top',
      end: 'center top',
      scrub: 1,
      ease: 'linear',
    }
})
gsap.set('.scroll-text',{
  x:700,
})
tl.to('.scroll-text', {
 duration:2,
  x:-1200,
})



