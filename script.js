// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var nav = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
/* 
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("nameHeader").style.fontSize = "16px";
  } else {
    document.getElementById("nameHeader").style.fontSize = "60px";
  }
} */