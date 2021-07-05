var typed = new Typed('.animate', {
    strings : [
        "Web designer" ,
        "Web Develper" ,
        "Wordpress Designer" ,
        "Youtuber",
        "Social Media Infulencer"
    ],
    typeSpeed : 60 ,
    backSpeed : 60 ,
    loop : true 
});

$(window).on('scroll', function () {
	if ($(this).scrollTop() > 20) {
		$('.header-section').addClass('sticky')
	} else {
		$('.header-section').removeClass('sticky')
	}
})

