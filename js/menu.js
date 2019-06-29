var buttonBurger = document.querySelector('#burger')
		header3			 = document.querySelector('.header3');

buttonBurger.onclick = function() {
	header3.classList.toggle('active');
	buttonBurger.classList.toggle('active');
};