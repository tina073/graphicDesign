$(document).ready(function(){
	
	var text = $('.text');
	var append = $('.append');
	var addclass = $('.addclass');
	var basket = $('#basket');
	var apple = $('#apple');
	var banana = $('#banana');
	var orange = $('#orange');
	var babo = $('<div><p>바보</p></div>');
	
	babo.appendTo('body');
	$('#changeImg').attr('src','img/art2.gif');
	$('input').val('제이쿼리에서 다시작성');
	$('textarea').val('제이쿼리에서 다시작성');
	$('#city').val('대구');
	$('#area').val(['구로','관악']);
	
	text.find('.btn1').click(function(){
		$(this).siblings('.p1').text('text 메소드로 텍스트 적용');
	});	
	text.find('.btn2').click(function(){
		$(this).siblings('.p2').html('html 메소드로 텍스트 적용');
	});	
	text.find('.btn3').click(function(){
		$(this).siblings('.p3').text('<strong>text 메소드</strong>로 요소 적용');
	});	
	text.find('.btn4').click(function(){
		$(this).siblings('.p4').html('<strong>html 메소드</strong>로 요소 적용');
	});
	append.find('.btn1').click(function(){
		basket.append(apple);
	});	
	append.find('.btn2').click(function(){
		basket.append(banana);
	});
	append.find('.btn3').click(function(){
		basket.append(orange);
	});
	append.find('.btn4').click(function(){
		basket.prepend(apple);
	});
	append.find('.btn5').click(function(){
		basket.prepend(banana);
	});
	append.find('.btn6').click(function(){
		basket.prepend(orange);
	});
	append.find('.btn7').click(function(){
		basket.append(banana,orange,apple);
	});
	append.find('.btn8').click(function(){
		basket.prepend(banana,orange,apple);
	});	
	addclass.find('.btn1').click(function(){
		$(this).siblings('.p1').addClass('notice');
	});	
	addclass.find('.btn2').click(function(){
		$(this).siblings('.p2').removeClass('notice');	});	
	addclass.find('.btn3').click(function(){
		$(this).siblings('.p3').toggleClass('notice');
	});
	
});












