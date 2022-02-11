/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
//Get the button:
mybutton = document.getElementById("mybtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
console.log("helll0")

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






// function scrollToTop () {
//   if ($('.scroll-top').length) {
//
//     //Check to see if the window is top if not then display button
//     $(window).on('scroll', function (){
//       if ($(this).scrollTop() > 200) {
//         $('.scroll-top').fadeIn();
//       } else {
//         $('.scroll-top').fadeOut();
//       }
//     });
//
//     //Click event to scroll to top
//     $('.scroll-top').on('click', function() {
//       $('html, body').animate({scrollTop : 0},1500);
//       return false;
//     });
//   }
// }
