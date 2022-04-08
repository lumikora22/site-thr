let menu = document.querySelector(".mobile-list");
let button = document.querySelector("#menu-toggle");

let submenu = document.querySelector(".show-submenu");
let subpages = document.querySelector(".list-subpages");

submenu.addEventListener("click", () => {
  subpages.classList.toggle("active-subpages");
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

$(document).ready(function () {
  var hamburger = $("#hamburger-icon");
  var linkmobile = $(".mobile-link-hability");
  var linkus = $(".mobile-link-us");

  linkus.click(function () {
    function saltarA(id, tiempo) {
      var tiempo = tiempo || 1000;
      var section = $("html, body").animate(
        { scrollTop: $(id).offset().top },
        tiempo
      );
    }
    hamburger.toggleClass("active");
    if (hamburger.hasClass("active")) {
      menu.style.left = "0";
    } else {
      menu.style.left = "-100%";
      saltartA("#us", 1000);
    }
    return false;
  });

  linkmobile.click(function () {
    function saltarA(id, tiempo) {
      var tiempo = tiempo || 1000;
      var section = $("html, body").animate(
        { scrollTop: $(id).offset().top },
        tiempo
      );
    }
    hamburger.toggleClass("active");
    if (hamburger.hasClass("active")) {
      menu.style.left = "0";
    } else {
      menu.style.left = "-100%";
      saltartA("#hability", 1000);
    }
    return false;
  });

  hamburger.click(function () {
    hamburger.toggleClass("active");
    if (hamburger.hasClass("active")) {
      menu.style.left = "0";
    } else {
      menu.style.left = "-100%";
    }
    return false;
  });
});
