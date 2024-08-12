$(document).ready(function(){   
	//로고를 클릭하면  로고는 왼쪽 상단,address는 오른쪽 하단으로 이동
	$("h1").click(function(){
		$(this).stop().animate({
			top:"-100px",
			left:0
		}, 1500, "easeInOutBack");
		$("address").stop().animate({
			bottom:"-100px",
			right:0
		}, 1500, "easeInOutBack");
	
		//빨간색 테두리를 위,오른쪽, 아래,왼쪽 방향 순서대로 그린다
		$(".top").delay(1700).animate({width:"100%"}, 500, function(){
			$(".right").animate({ height:"100%"}, 500, function(){
				$(".bottom").animate({ width:"100%"}, 500, function(){
					$(".left").animate({ height:"100%"}, 500,function(){
						$(".box1").addClass("on");
						$(".top, .right, .bottom, .left").delay(1700).animate({opacity:0});
						$("#gnb").delay(1500).animate({top:"-30px", opacity:1});
						$(".util").delay(2000).animate({top:"-150px", opacity:1});
						$(".search").delay(2500).animate({bottom:"-50px", opacity:1});
						$(".footer").delay(3000).animate({bottom:"-50px", opacity:1});
					});
				});
			});
		});
	});  //click event end
	
	//왼쪽 상단에 있는 + 버튼을 누르면 회전하면서 두번째 article이 나타나고 첫번째 article은 사라지게 한다.
	//이때 왼쪽 상단의 첫번째 화면의 +버튼도 크기가 10배로 커지면서 사라지고 두번째 화면의 +버튼은 크기가 1배로 작아지면서 나타나게 한다.
	//(그 반대로도 작동하게 만든다)
		$(".btnMenu").click(function(){
			$("section > article").removeClass("on");
			$(".box2").addClass("on");
		});
		
		$(".btnMenu2").click(function(){
			$("section > article").removeClass("on");
			$(".box1").addClass("on");
		});
}); // document end