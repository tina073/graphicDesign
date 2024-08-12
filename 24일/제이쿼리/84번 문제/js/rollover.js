$(document).ready(function(){
	
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		var srcOff = img.attr('src');
		var srcOn = srcOff.replace('-off','-on');
		$('<img>').attr('src',srcOn);
		a.on({
			'mouseenter focus':function(){img.attr('src',srcOn);},
			'mouseleave blur':function(){img.attr('src',srcOff);}
		});
			
	});

});












