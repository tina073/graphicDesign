$(document).ready(function(){
	
	var css = $('.css');
	var show = $('.show');
	var width = $('.width');
	
	css.find('.btn1').click(function(){
		$(this).siblings('.div1').css('font-size','1.5em');
	});
	css.find('.btn2').click(function(){
		css.find('.div2').css('border-style','dashed');
	});
	css.find('.btn3').click(function(){
		css.find('.div3').css('opacity',0.5);
	});
	show.find('.btn1').click(function(){
		show.find('.div1').show(1000);
	});
	show.find('.btn2').click(function(){
		show.find('.div2').hide(5000);
	});
	show.find('.btn3').click(function(){
		show.find('.div3').toggle();
	});
	width.find('.btn1').click(function(){
		width.find('.div1').width(200);
	});
	width.find('.btn2').click(function(){
		width.find('.div2').height(200);
	});
	width.find('.btn3').click(function(){
		var div3Width = width.find('.div3').width();
		alert(div3Width);
	});
	
});












