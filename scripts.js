var scrollDownForMore = document.getElementById("scrollDownForMore");
var scrollDownForMoreHeight = scrollDownForMore.height;
var header = document.querySelector("header");

window.addEventListener("scroll", function(){
  if(document.scrollingElement.scrollTop > 0){
    if(!scrollDownForMore.classList.contains("fade-out"))
      scrollDownForMore.classList.add("fade-out");
    scrollDownForMore.classList.remove("is-paused");
  } else {
    scrollDownForMore.style.top = (header.offsetHeight - scrollDownForMoreHeight)+ "px";
    scrollDownForMore.classList.remove("fade-out");
    scrollDownForMore.classList.add("fade-in");
    setInterval(function(){
      if(document.scrollingElement.scrollTop == 0){
        scrollDownForMore.classList.add("is-paused");
        scrollDownForMore.classList.remove("fade-in");
        scrollDownForMore.classList.add("fade-out");
      }
    }, 1000);
    scrollDownForMore.style.display = null;
  }
});
