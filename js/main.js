$(function(){


	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();

	});

	$('.slider_box').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1500,
		arrows: false,
		dots: true,
		responsive: [
	    {
			breakpoint: 700,
			settings: {
				dots: false
			}
		}
		]

	});

	$('.slider_items').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 3000,
		dots: true,
		responsive: [
	    {
			breakpoint: 700,
			settings: {
				dots: false
			}
		}
		]

	});

	$('.slider_blog').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 1000,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
	    {
			breakpoint: 992,
			settings: {
				slidesToShow: 1

			}
		}
		]
	});


	$("#menu, #top").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);

	});

});