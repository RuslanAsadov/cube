document.body.onload = function() {
	setTimeout(function() {
		$('#loader-cnt').fadeOut('slow');
	}, 2000);
}
//start mmenu
$(function() {
	$('#mymenu').mmenu({
		extensions: [
			'pagedim-black',
			'fx-menu-slide',
			'fx-panels-slide-up',
			'fx-listitems-slide'
		],
		navbar: {
			title: '<a class="mm-navbar__mytitle" href="#">CUBE</a>'
		}
	});
	
	var api = $('#mymenu').data( 'mmenu' );
	
	api.bind( 'open:start', function() {
		$('.ham').addClass('active');
	});
	api.bind( 'close:after', function() {
		$('.ham').removeClass('active');
	});

	$('.my-hamburger').click(function() {
		if($('#mymenu').hasClass('mm-menu_opened')) {
			api.close();
		} else{
			api.open();
		}
	});

	$('.mm-listitem').click(function() {
		slowScroll($(this).find('a').attr('href'));
		// api.close();
	});

//close mmenu

//start portfolio
	
	var $grid = $('.portfolio-grid').isotope({
		itemSelector: '.grid-item'
	});
	$('.a-filter li').on( 'click', function() {
		var filterValue = $(this).attr('data-category');
	  $grid.isotope({
			filter: filterValue,
			masonry: {
				columnWidth: '.grid-item',
				itemSelector: '.grid-item',
				singleMode: true,
				isResizable: true,
				isAnimated: true,
				percentPosition: true
			}
		});
	});
	
	var max_click = 5;
	var current_click = 0;

	$('.addtext').on( 'click', function() {
		current_click++;
		if(current_click < max_click) {
			var elems = [ getItemElement(), getItemElement(), getItemElement() ];
			var $elems = $( elems );
			$grid.append( $elems ).isotope( 'appended', $elems );
		}
		if(current_click == max_click) {
			var elems = [ getItemElement(), getItemElement(), getItemElement() ];
			var $elems = $( elems );
			$grid.append( $elems ).isotope( 'appended', $elems );
			$('.addtext').hide();
			$('#section-portfolio').css('padding-bottom', '0');
		}
	});

	function getItemElement() {
		var elem = document.createElement('div');
		$(elem).prepend('<div class="grid-overlay"></div>');
		$(elem).find('.grid-overlay').append('<span class="text-ovelay">Client: <span class="overlay-cnt overlay-cnt_c">Esquire</span></span>');
		$(elem).find('.grid-overlay').append('<span class="text-ovelay">Date: <span class="overlay-cnt overlay-cnt_d">2014</span></span>');
		$(elem).find('.grid-overlay').append('<a href="#" class="button btn-portfolio">View</a>');
		var hRand = Math.random();
		var heightClass = hRand > 0.9 ? 'item-h2 app c1' : hRand > 0.8 ? 'item-h2 webdesign c2' : hRand > 0.7 ? 'item-h1 branding c3' : hRand > 0.6 ? 'item-h2 webdesign c4' : hRand > 0.5 ? 'item-h1 branding c5': hRand > 0.4 ? 'item-h2 print c6' : hRand > 0.3 ? 'item-h1 motion c7' : hRand > 0.2 ? 'item-h2 print c8' : hRand > 0.1 ? 'item-h1 motion c9' : '';
		elem.className = 'grid-item ' + heightClass;
		return elem;
	}
	//close portfolio
	
	//spin number

	
	function countup(className){ //className - имя класса, в котором есть число
		var countBlockTop = $("."+className).offset().top; //смещение блока с числом относительно верхнего края	
		var windowHeight = window.innerHeight;//высота окна браузера
		var show = true;// отвечает, что если один раз счетчик сработает, больше не срабатывал
					
		$(window).scroll( function (){
		if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
			show = false; //если мы видим число, то больше его не надо показывать
						
			$('.'+className).spincrement({ //вызов плагина с параметрами 
				from: 1,               //начинать с 1
				duration: 4000,        //задержка счетчика
			});
		}
		});	
		}
	countup('status-num'); //класс
	
	//close spin number
	$('.blog-item').equalHeights();

	$(window).resize(function () {
		$('.blog-item').equalHeights();
	});
	
	var $blog = $('.blog-items').masonry({
		itemSelector: '.blog-item',
		columnWidth: '.sizer',
		singleMode: false,
		percentPosition: true
	});
	
	
	
});
//owl-carousel

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		responsive:{
			0:{
				items: 2
			},
			576:{
				items: 3
			},
			768:{
				items: 4
			},
			992:{
				items: 5
			}
		}
	});
});
//close owl-carousel

//start slowScroll
function slowScroll (id) {
	var offset = 0;
	$('html, body').animate({
		scrollTop :$(id).offset ().top - offset}, 500);
	return false;
}
//close slowScroll