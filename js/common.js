document.addEventListener('DOMContentLoaded', function () {
	
	// $('body').hide()
	$('.header__menu-btn').click(function () {
		console.log('click');
		$('.header__nav').toggleClass('show')
	})
	setTimeout(function () {
		$('.intro').addClass('black')
		$('.header__logo-room').addClass('white')
	}, 1000)
	
	AOS.init();


	
})
