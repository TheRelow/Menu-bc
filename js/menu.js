var header = document.querySelector('.header-RW');
var header2 = document.querySelector('.header2');
var isMobile = window.innerWidth;
var menuToggler = document.querySelector('#menuToggler');
var menu = document.querySelector('.header2-menu')
var bottomMenuToggler = document.querySelector('#bottomMenuToggler');
var bottomMenu = document.querySelector('.header2-menu-bottom')

window.onscroll = function showHeader () {
	var isMobileOnScroll = window.innerWidth;
	if (window.pageYOffset > 270 && isMobileOnScroll > 1200) {
		header.classList.add('sticky-header');
		header2.classList.add('sticky-header2');
	} else {
		header.classList.remove('sticky-header');
		header2.classList.remove('sticky-header2'); 
	};
};

if (window.pageYOffset > 270 && isMobile > 1200) {
	header.classList.add('sticky-header');
	header2.classList.add('sticky-header2');
};

menuToggler.onclick = function showMenu () {
	menu.classList.toggle('header2-menu-visible')
}

bottomMenuToggler.onclick = function showBottomMenu () {
	bottomMenu.classList.toggle('header2-menu-bottom-visible')
}