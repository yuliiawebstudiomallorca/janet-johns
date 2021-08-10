/*
Template Name: Frokost
Author: Ingrid Kuhn
Author URI: http://themeforest.net/user/ingridk
*/

jQuery(function () {

	// Window load function

	$(window).load(function () {

		//Open street  Map
		var mapcanvas = document.getElementById("map-canvas");
		if (mapcanvas) {
			// Element exists
			var coord = [39.613700, 3.391598]; // <--- coordinates here

			var map = L.map('map-canvas', { scrollWheelZoom: false }).setView(coord, 18);

			L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

			}).addTo(map);

			var customIcon = L.icon({
				iconUrl: 'img/mapmarker.png',
				iconSize: [80, 95], // size of the icon
				iconAnchor: [40, 94] // point of the icon which will correspond to marker's location
			});

			var marker = L.marker(coord, { icon: customIcon }).addTo(map);

		}

		//Load Skrollr

		var skr0llr = skrollr.init({
			forceHeight: false,
			mobileCheck: function () {
				//hack - forces mobile version to be off
				return false;
			}
		});

		// Page Preloader

		$("#preloader").fadeOut("slow");

		//Portfolio Isotope Filter
		var $container = $('#lightbox');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.cat a').on('click', function () {
			$('.cat .active').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	});

	//On Click  function
	$(document).on('click', function () {

		//Navbar toggle
		$('.navbar .collapse').collapse('hide');
	})


});

// document ready function	
$(document).ready(function () {
	"use strict"


	//Load WOW Animations

	new WOW().init();

	//Scrolling feature 

	$('.page-scroll a').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	//	Back Top Link

	var offset = 5200;
	var duration = 500;
	$(window).scroll(function () {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(400);
		} else {
			$('.back-to-top').fadeOut(400);
		}
	});


	//testimonials carousel
	$("#owl-testimonials").owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: false,
	});

	//brands carousel
	$("#owl-brands").owlCarousel({
		dots: true,
		loop: true,
		autoplay: false,
		margin: 100,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			1000: {
				items: 4,
			}
		}
	});

	//about carousel		 
	$("#owl-about").owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: false,
	});

	//team carousel		 
	$("#owl-team").owlCarousel({
		items: 3,
		dots: true,
		loop: true,
		autoplay: false,
		responsive: {
			1: {
				items: 1,
			},
			1000: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Date Time Picker

	$("#datetimepicker1").datetimepicker();

	// Pretty Photo

	$("a[data-gal^='prettyPhoto']").prettyPhoto({ hook: 'data-gal' });
	({
		animation_speed: 'normal', /* fast/slow/normal */
		opacity: 1, /* Value between 0 and 1 */
		show_title: true, /* true/false */
		allow_resize: true, /* Resize the photos bigger than viewport. true/false */
		counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
		theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
	});

	//  Parallax Slider	

	var $slider = $(".slider"), $slideBGs = $(".slide__bg"), diff = 0, curSlide = 0, numOfSlides = $(".slide").length - 1, animating = false, animTime = 500, autoSlideTimeout, autoSlideDelay = 8000, $pagination = $(".slider-pagi"); function createBullets() { for (var i = 0; i < numOfSlides + 1; i++) { var $li = $("<li class='slider-pagi__elem'></li>"); $li.addClass("slider-pagi__elem-" + i).data("page", i); if (!i) $li.addClass("active"); $pagination.append($li); } }; createBullets(); function manageControls() { $(".slider-control").removeClass("inactive"); if (!curSlide) $(".slider-control.left").addClass("inactive"); if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive"); }; function autoSlide() { autoSlideTimeout = setTimeout(function () { curSlide++; if (curSlide > numOfSlides) curSlide = 0; changeSlides(); }, autoSlideDelay); }; autoSlide(); function changeSlides(instant) {
		if (!instant) { animating = true; manageControls(); $slider.addClass("animating"); $slider.css("top"); $(".slide").removeClass("active"); $(".slide-" + curSlide).addClass("active"); setTimeout(function () { $slider.removeClass("animating"); animating = false; }, animTime); }
		window.clearTimeout(autoSlideTimeout); $(".slider-pagi__elem").removeClass("active"); $(".slider-pagi__elem-" + curSlide).addClass("active"); $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)"); $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)"); diff = 0; autoSlide();
	}
	function navigateLeft() { if (animating) return; if (curSlide > 0) curSlide--; changeSlides(); }
	function navigateRight() { if (animating) return; if (curSlide < numOfSlides) curSlide++; changeSlides(); }
	$(document).on("mousedown touchstart", ".slider", function (e) { if (animating) return; window.clearTimeout(autoSlideTimeout); var startX = e.pageX || e.originalEvent.touches[0].pageX, winW = $(window).width(); diff = 0; $(document).on("mousemove touchmove", function (e) { var x = e.pageX || e.originalEvent.touches[0].pageX; diff = (startX - x) / winW * 70; if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2; $slider.css("transform", "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)"); $slideBGs.css("transform", "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)"); }); }); $(document).on("mouseup touchend", function (e) {
		$(document).off("mousemove touchmove"); if (animating) return; if (!diff) { changeSlides(true); return; }
		if (diff > -8 && diff < 8) { changeSlides(); return; }
		if (diff <= -8) { navigateLeft(); }
		if (diff >= 8) { navigateRight(); }
	}); $(document).on("click", ".slider-control", function () { if ($(this).hasClass("left")) { navigateLeft(); } else { navigateRight(); } }); $(document).on("click", ".slider-pagi__elem", function () { curSlide = $(this).data("page"); changeSlides(); });


}); // end document ready





