$(document).ready(function(){
	
	var div1 = $('#div1');
	var div2 = $('#div2');
	var div3 = $('#div3');
	
	div1.click(function(){
		div1.text('클릭되었습니다.');
		div1.css('background','gold');
	});
	div2.mouseenter(function(){
		div2.text('마우스커서가 위에있습니다.');
		div2.css('background','pink');
	});
	div2.mouseleave(function(){
		div2.text('마우스커서가 벗어났습니다.');
		div2.css('background','skyblue');
	});
	div3.hover(function(){
		div3.text('마우스커서가 hover로 위에있습니다.');
	},function(){
		div3.text('마우스커서가 hover로 벗어났습니다.');
	});
	
	var btn = $('.btn');
	var clickTest = $('.clickTest');
	
	btn.on({
		'mouseenter focus': function(){btn.text('focus');},
		'mouseleave blur': function(){btn.text('blur');}
	});
	clickTest.click(function(){
		$(this).text('클릭되었습니다.');
	});
	$('.animal').each(function(){
		$(this).click(function(){
			var name = $(this).text();
			alert(name);
		});
	});
		
});












