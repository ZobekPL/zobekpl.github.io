var scrollDownForMore = document.getElementById("scrollDownForMore");
var scrollDownForMoreHeight = scrollDownForMore.height;
var header = document.querySelector("header");

window.addEventListener("scroll", function(){
  if(document.body.scrollTop > 5 || document.scrollingElement.scrollTop > 5){
    scrollDownForMore.style.display = "none";
  } else {
    console.log(scrollDownForMore.offsetHeight)
    scrollDownForMore.style.top = (header.offsetHeight - scrollDownForMoreHeight)+ "px";
    scrollDownForMore.style.display = null;
  }
});
