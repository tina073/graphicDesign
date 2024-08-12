$(document).ready(function(){
	$(window).on("resize", function(){
		let ht = $(window).height();
		$("section").height(ht);
	})  //브라우저가  리사이즈 될 때마다 브라우저와 section의 높이값으 갱신
	$(window).trigger("resize"); 
	
	$("section").on("mousemove", function(e){
		let posX = e.pageX;  //변수 posX에 마우스 커서의 x축 위치 저장
		let posY = e.pageY;  //변수 posY에 마우스 커서의 y축 위치 저장
		
		//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		//임의의 숫자로 나눔, 나누는 숫자가 작을수록 많이 움직임
		//빼주면 마우스의 반대방향, 더해주면 같은 방향으로 움직임
		//각 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		
		//첫 번째 박스의 이미지들
		$(".p11").css({"right":320-(posX/100), "bottom":20-(posY/30)});
		$(".p12").css({"right":30+(posX/120), "bottom":-40+(posY/20)});
		$(".p13").css({"right":260+(posX/20), "top":180+(posY/20)});
		
		//두 번째 박스의 이미지들
		$(".p21").css({"right":-180-(posX/30), "bottom":-480-(posY/30)});
		$(".p22").css({"right":130+(posX/50), "bottom":-40+(posY/50)});
		
		//세 번째 박스의 이미지들
		$(".p31").css({"right":280-(posX/30), "bottom":30-(posY/30)});
		$(".p32").css({"right":110+(posX/20), "bottom":-270+(posY/20)});
		$(".p33").css({"right":-70+(posX/20), "bottom":-130+(posY/20)});
		
		//네 번째 박스의 이미지들
		$(".p41").css({"right":20-(posX/30), "bottom":-120-(posY/30)});
		$(".p42").css({"right":0+(posX/20), "bottom":-180+(posY/20)});
	}); 
	
	//메뉴 버튼 클릭시 화면 이동, 메뉴 활성화 - on클래스 추가
	$("#menu li").on("click", function(e){
		e.preventDefault();  //#menu li 안에 있는 a 요소의 디폴트 기능인 링크 기능을 막아준다
		//변수 ht에 브라우저의 높이값 저장
		
		let ht = $(window).height();
		
		let i = $(this).index();  //변수 i에 현재 클릭한 li의 순서값 저장
		let nowTop = i * ht;  //브라우저의 높이값 * 박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		
		$("#menu li").removeClass();  //모든 메뉴에서 on클래스를 제거
		$("#menu li").eq(i).addClass("on");  //클릭한 메뉴에 on클래스 적용
		
		$("html, body").stop().animate({"scrollTop":nowTop},1400);  //해당 스크롤 위치값으로 문서 이동
	});
	
	//section 위에서 마우스 휠을 움직이면
		$("section").on("mousewheel", function(event, delta){
			let currentIndex = $(this).index();
			let lastIndex = $("section").last().index();
			if (delta > 0) {	//마우스 휠을 올렸을 때
				if(currentIndex == 0) {	//첫 번째 화면이라면
					return;	//화면을 움직이지 않음
				} else {
					let prev = $(this).prev().offset().top;	//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
					$("html, body").stop().animate({"scrollTop":prev},1400, "easeOutBounce");	//문서 전체를 prev에 저장된 위치로 이동
					$("#menu li").removeClass(); 
					$("#menu li").eq(currentIndex - 1).addClass("on"); 
				} 
			} else {
				if(currentIndex == lastIndex) {
					return;
				} else {
					let next = $(this).next().offset().top;
					$("html, body").stop().animate({"scrollTop":next},1400, "easeOutBounce");
					$("#menu li").removeClass(); 
					$("#menu li").eq(currentIndex + 1).addClass("on"); 
				}
			}
		});
});















