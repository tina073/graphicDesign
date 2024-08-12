$(document).ready(function(){

	var fade = $('.fade').find('.wrap');
	var slide = $('.slide').find('.wrap');
	
	fade.siblings('.btn1').click(function(){
		fade.find('.p1').fadeIn(1000,function(){
			alert('페이드인 완료');
		});		
	});	
	fade.siblings('.btn2').click(function(){
		fade.find('.p2').fadeOut(1000);		
	});	
	fade.siblings('.btn3').click(function(){
		fade.find('.p3').stop().fadeToggle(1000);		
	});
	slide.siblings('.btn1').click(function(){
		slide.find('.p1').slideDown(1000,function(){
			alert('슬라이드다운 완료');
		});		
	});	
	slide.siblings('.btn2').click(function(){
		slide.find('.p2').slideUp(1000);		
	});	
	slide.siblings('.btn3').click(function(){
		slide.find('.p3').stop().slideToggle(1000);		
	});
	$('.animate').find('p').animate({
		'left':700,
		'top':500,
		'padding':50,
		'opacity':0.5,
		'border-radius':20
	},1000,function(){
		$(this).text('완료');
	});

});












