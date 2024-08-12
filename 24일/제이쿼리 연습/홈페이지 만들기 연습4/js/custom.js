$(document).ready(function(){  		
	$("article").on("mouseover",function(){
			$(this).stop().animate({"width":"35%"}, 1000, function(){		//article이 넓어 진 후 아래 구문 실행
				$(this).find("h3").stop().animate({"right":"10px"}, 400);
				$(this).find("p").stop().animate({"right":"10px"}, 800);
			});
			$(this).find("video").stop().animate({"opacity":"0.9"}, 1200);
			var vid = $(this).find("video").get(0);
			/*
				get() 메서드는 선택기에서 지정함 DOM 요소를 가져옴
			*/
			vid.currentTime = 0;
			//동영상을 재생, 동영상의 재생위치를 처음 0이나 지정한 8초로 설정
			//currentTime 속성은 오디오/비디오 재생의 현재 위치를 설정하거나 반환
			vid.play();
	});
	
	$("article").on("mouseout",function(){
		var vid = $(this).find("video").get(0);
		vid.pause;		//동영상 정지
		$(this).stop().animate({"width":"12%"}, 700);
		$(this).find("video").stop().animate({"opacity":"0"}, 2000);
		$(this).find("h3").stop().animate({"right":"-310px"}, 200);
		$(this).find("p").stop().animate({"right":"-310px"}, 500);
	});
});















