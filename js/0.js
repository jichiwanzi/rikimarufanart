//JavaScriptDocument

$(document).ready(function(){

	//first box
	$(".box").eq(0).addClass("ch_bg");
	
	//click event
	$(".box").click(function(){
		
		var _index = $(this).index();
		var atop = w_v(_index);
		
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		$("html, body").animate({scrollTop:atop},1000);
	
	});
	
	//resize event 當window被拉扯時圖片也會自然填充
	$(window).on('resize',function(){
		
		var r_index = $("div.ch_bg").index();
		var	wtop = w_v(r_index);
		
		$("html, body").scrollTop(wtop);
		
	});
	
	//scroll event 當滾動到對應順序時，點亮對應按鈕 讓按鈕跟著動
	$(window).on('scroll',function(){
		
		var _h = document.body.clientHeight;
		var	_ws = $(window).scrollTop();
		var	_in = Math.round(_ws/_h);
		
		$(".box").eq(_in).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		//$("aside").stop().animate({top: _ws+50},1000);//
		
	});
	
});

function w_v(index){
	
	var a_top = document.body.clientHeight;
	var a_top_v = a_top * index;
	return a_top_v;
}


