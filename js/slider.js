let menu = document.querySelector(".list-pages");
let button = document.querySelector("#menu-toggle");

$("#menu-toggle").click(function () {
  $(this).toggleClass("open");
  if (button.classList.contains("open")) {
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
  } else {
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
  }
});
window.onscroll = function () {
  var y = window.scrollY;
  if (y > 1) {
    document.querySelector(".mobile-menu").style.boxShadow =
      "1px 6px 50px 7px rgba(0,0,0,0.47)";
  } else {
    document.querySelector(".mobile-menu").style.boxShadow = "none";
  }
};
