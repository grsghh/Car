setTimeout(function() {
	var ha = new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: true,
		pagination: ".swiper-pagination",
		autoplay: 2000,
		effect: "overflow"
	});
}, 10)