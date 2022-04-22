// JavaScript Document

$(document).ready(function(){
	
	$(".menu").click(function(){
		
		$("nav").slideToggle();
		
	});
	
	$("section").css({"display":"none"}).fadeIn(500);
	
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});
	
	var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });
	
});