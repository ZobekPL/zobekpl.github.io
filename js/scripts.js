var scrollDownForMore = document.getElementById("scrollDownForMore");
var scrollDownForMoreHeight = scrollDownForMore.height;
var header = document.querySelector("header");

window.addEventListener("scroll", function(){
  if(document.scrollingElement.scrollTop > 0){
    scrollDownForMore.classList.remove("is-paused");
  }
});

window.addEventListener("load", function(){
  header.classList.remove("is-paused");
});


// INITIALIZE SMOOTH SCROLL
var scroll = new SmoothScroll(`a[href*="#"]`);
