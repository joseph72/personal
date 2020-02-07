// open and close menu
  $(".open").click(function() {
    $(".nav-list").addClass("active");
});
$(".closed").click(function() {
    $(".nav-list").removeClass("active");
});


$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('.manner').height();
		if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
            $('.nav-bar').addClass('cont');
            $('.logo').addClass('logo_1');
            $('.nav-link').addClass('nav-link_1');
            $('.menu-icons i').addClass('menu-icons_1 ');
         }
         else {
            $('nav').removeClass('fixed');
            $('.nav-bar').removeClass('cont');
            $('.logo').removeClass('logo_1');
            $('.nav-link').removeClass('nav-link_1');
            $('.menu-icons i').removeClass('menu-icons_1');
		 }
	});
});