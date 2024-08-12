$(document).ready(function(){  	
	//1초마다 현재 시간값을 재설정

	let timer = setInterval(function(){
		let nowTime = new Date();  //사용자의 시스템 시간을 불러움
		let hr = nowTime.getHours();
		let min = nowTime.getMinutes();
		let sec = nowTime.getSeconds();
		if(hr >= 10) {	//시간이 두 자리 숫자라면(10~23)
			hrNum = hr;
		} else {
			hrNum = "0" + hr;	//시간이 한 자리 숫자라면(0~9)
		}
		
		if(min >= 10) {	//분이 두 자리 숫자라면(10~59)
			minNum = min;
		} else {
			minNum = "0" + min;	//분이 한 자리 숫자라면(0~9)
		}
		
		if(sec >= 10) {	//초가 두 자리 숫자라면(10~59)
			secNum = sec;
		} else {
			secNum = "0" + sec;	//초가 한 자리 숫자라면(0~9)
		}
		
		//모바일 액정화면 안에 시간 적용
		$("figure p span").eq(0).text(hrNum);
		$("figure p span").eq(1).text(minNum);
		$("figure p span").eq(2).text(secNum);
		
	//현재 시간에 맞춰 아래쪽 테마 메뉴와 배경 이미지,로고,글자 색상 변경
	//morning : 5~10, afternoon : 11~15, evening : 16~19, night : 20~4
	if(hr >= 5 && hr <= 10) {
		$("#wrap").removeClass();
		$("#wrap").addClass("morning");
		$("nav li").removeClass();
		$("nav li").eq(0).addClass("on");
	} else if(hr >= 11 && hr <= 15) {
		$("#wrap").removeClass();
		$("#wrap").addClass("afternoon");
		$("nav li").removeClass();
		$("nav li").eq(1).addClass("on");
	} else if(hr >= 16 && hr <= 19) {
		$("#wrap").removeClass();
		$("#wrap").addClass("evening");
		$("nav li").removeClass();
		$("nav li").eq(2).addClass("on");
	} else {
		$("#wrap").removeClass();
		$("#wrap").addClass("night");
		$("nav li").removeClass();
		$("nav li").eq(3).addClass("on");
	} 
	}, 1000);	//setInterval 끝

	//nav버튼 클릭시 화면 테마 변경
	$("nav li").click(function(){
		let className = $(this).children("a").text();	//클릭한 li의 자식인 a가 가지고 있는 글자를 가지고 옴
		$("nav li").removeClass();
		$(this).addClass("on");
		$("#wrap").removeClass();
		$("#wrap").addClass(className);
	})
}); // function 끝