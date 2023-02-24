// Menu js
var popup = document.getElementById('popup');
	function btntoggle(){
		popup.classList.toggle('active-menu');
	}

// init Isotope for Mixitup
var $grid = $('#isotop-filter').isotope({
	// options
  });
  // filter items on button click
  $('.isotop-controls').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });

  // Active Class add for isotope mixitup
  $('.isotop-controls li').click(function(e) {

	$('.isotop-controls li').removeClass('active');

	var $this = $(this);
	if (!$this.hasClass('active')) {
		$this.addClass('active');
	}
	//e.preventDefault();
});


// Feedback Slider
var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 30,
loop: true,
// autoplay: {
// 	delay: 2500,
// 	disableOnInteraction: false,
// 	},
pagination: {
	el: ".swiper-pagination",
	clickable: true,
},
breakpoints: {
	575: {
		slidesPerView: 1,
		spaceBetween: 30,
	},
	768: {
		slidesPerView: 2,
		spaceBetween: 30,
	},
	},
});


// Brand Partner
var swiper = new Swiper(".brandSwiper", {
slidesPerView: 1,
spaceBetween: 30,
loop: true,
autoplay: {
	delay: 3000,
	disableOnInteraction: false,
	},
breakpoints: {
	450: {
		slidesPerView: 2,
		spaceBetween: 30,
	},
	575: {
		slidesPerView: 3,
		spaceBetween: 30,
	},
	768: {
		slidesPerView: 4,
		spaceBetween: 30,
	},
	},
});


$(document).ready(function(){

	// Counter Up jquery
	$('.counter').counterUp({
        delay: 10,
        time: 2000,
      });


  
});








