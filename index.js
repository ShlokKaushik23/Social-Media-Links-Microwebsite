function eventFunction(){
  document.getElementById("links").style.display="none";
  document.getElementById("events").style.display="flex";
}

function linksFunction(){
  document.getElementById("links").style.display="grid";
  document.getElementById("events").style.display="none";
}

// const setTheme = theme => document.documentElement.className = theme;

// let elements=document.querySelectorAll(".menu-item").length;

// document.getElementById("color1").addEventListener('click', function() {
// setTheme("color1");
// });
// document.getElementById("color2").addEventListener('click', function() {
// setTheme("color2");
// });
// document.getElementById("color3").addEventListener('click', function() {
// setTheme("color3");
// });
// document.getElementById("color4").addEventListener('click', function() {
// setTheme("color4");
// });
// document.getElementById("color5").addEventListener('click', function() {
// setTheme("color5");
// });
// document.getElementById("color6").addEventListener('click', function() {
// setTheme("color6");
// });
              


$(document).ready(function() {
  $('.theme-colors li button').click(function(){
    $('.btn').css('border', $(this).css('color'));
  });

});