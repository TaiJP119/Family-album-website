// pannellum.viewer('panorama-360-view', {
//     "type": "equirectangular",
//     "panorama": "https://i.ibb.co/6PGHKkT/360-image.jpg",
//     "autoLoad": true
// })
// pannellum.viewer('panorama-360-view1', {
//     "type": "equirectangular",
//     "panorama": "https://drive.google.com/file/d/1nbEYMSTxNgpGz68XN-F5EWLTL7ScE731/view?usp=sharing",
//     "autoLoad": true
// })

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  