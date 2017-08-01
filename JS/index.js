$(function(){
	$(".hoverText").hide();
	
	$("#introDown").click(function(){
		$("#intro").animate({top: '-100%'}, 500);
		$("#body").animate({top: '-100%'}, 500);
		$("#contact").animate({top: '-100%'}, 500);
		$("#introBack").animate({opacity: '0.0'}, 500);
	}); 
	$("#bodyUp").click(function(){
		$("#intro").animate({top: '0%'}, 500);
		$("#body").animate({top: '0%'}, 500);
		$("#contact").animate({top: '0%'}, 500);
		$("#introBack").animate({opacity: '1.0'}, 500);
	});
	$("#bodyDown").click(function(){
		$("#intro").animate({top: '-200%'}, 500);
		$("#body").animate({top: '-200%'}, 500);
		$("#contact").animate({top: '-200%'}, 500);
		$("#bodyBack").animate({opacity: '0.0'}, 500);
		$("#githubtxt").delay(500).show(500);
		$("#gmailtxt").delay(500).show(500);
		$("#fbtxt").delay(500).show(500);
	});
	$("#contactUp").click(function(){
		$("#intro").delay(250).animate({top: '-100%'}, 500);
		$("#body").delay(250).animate({top: '-100%'}, 500);
		$("#contact").delay(250).animate({top: '-100%'}, 500);
		$("#contactBack").delay(250).animate({visibility: 'hidden'}, 250);
		$("#bodyBack").delay(250).animate({opacity: '1.0'}, 500);
		$("#githubtxt").hide(250);
		$("#gmailtxt").hide(250);
		$("#fbtxt").hide(250);
	});
});