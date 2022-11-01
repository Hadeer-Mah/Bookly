  
// $(window).on('load', function () {  
//   $("#loading").delay(4000).fadeOut();  
// });  

$(document).ready(function(){
    $("#loading").fadeOut(4000, () => {
        $("body").css("overflow", "auto")
})

  $(".fa-user").click(function(){
    $("#login").show("fast").css({"display": "flex", "justify-content": "center", "align-items": "center"})
  }); 

  $(".fa-times").click(function(){
    $("#login").hide("fast");
  }); 

}); 
      
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

      var  swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          640: {
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
      });


      
      
      var swiper = new Swiper("#featured .mySwiper", {
        loop:true, 

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
        },
      });

      
      var swiper = new Swiper("#arrivals .mySwiper",{

        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 2 ,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
        },
      });

      
      
      var swiper = new Swiper("#reviews .mySwiper", {
        loop:true, 
        slidesPerView: 1,
        spaceBetween: 10,
 
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 1 ,
            spaceBetween: 3,

          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 3,

          },
        },
      });


           
      var swiper = new Swiper("#blog .mySwiper", {
        loop:true, 
        slidesPerView: 1,
        spaceBetween: 10,
 
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 2 ,
            spaceBetween: 3,

          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 3,

          },
        },
      });





