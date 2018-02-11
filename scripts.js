var scrollDownForMore = document.getElementById("scrollDownForMore");
var scrollDownForMoreHeight = scrollDownForMore.height;
var header = document.querySelector("header");

window.addEventListener("scroll", function(){
  if(document.scrollingElement.scrollTop > 0){
    scrollDownForMore.classList.remove("is-paused");
  }
});
