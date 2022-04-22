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
	
	//group
   $(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
	
});