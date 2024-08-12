$(document).ready(function(){
	
	var div1 = $('#div1');
	div1.css('background','pink');
	var div1Text = div1.text();
	alert(div1Text);
	
		
	$('.woman').css('background','gold');
	$('.man').css({
		'background':'olive',
		'color':'white'
	});
	$('span').css('background','yellow');
	$('div span').css('background','yellowgreen');
	$('ul span').css('background','orange');
	
});