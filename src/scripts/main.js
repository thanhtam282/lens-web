$(document).ready(function(){
	$(".thanhtam-slider .owl-carousel").owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		loop:true
	});
	$(".thanhtam-seller .owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		loop:true
	});
	$(".thanhtam-piece  .owl-carousel").owlCarousel({
		items: 2,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		loop:true,
		responsive: {
			// breakpoint from 480 up
			360: {
				items: 2,
			},
			480: {
				items: 2,
			},
			640: {
				items: 3,
			},
			// breakpoint from 768 up
			768: {
				items: 4,
			},
			// breakpoint from 992 up
			992: {
				items: 4,
			}
		}
	});
});
