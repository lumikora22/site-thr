let menu = document.querySelector('.mobile-list');
let button = document.querySelector('#menu-toggle');

$('#menu-toggle').click(function () {
	$(this).toggleClass('open');
	if (button.classList.contains('open')) {
		menu.style.visibility = 'visible';
		menu.style.opacity = '1';
	} else {
		menu.style.visibility = 'hidden';
		menu.style.opacity = '0';
	}
});
window.onscroll = function () {
	var y = window.scrollY;
	if (y > 1) {
		document.querySelector('.mobile-menu').style.boxShadow =
			'1px 6px 50px 7px rgba(0,0,0,0.47)';
	} else {
		document.querySelector('.mobile-menu').style.boxShadow = 'none';
	}
};

$(document).ready(function () {
	var hamburger = $('#hamburger-icon');
	hamburger.click(function () {
		hamburger.toggleClass('active');
		if (hamburger.hasClass('active')) {
			menu.style.left = '0';
		} else {
			menu.style.left = '-100%';
		}
		return false;
	});
});
