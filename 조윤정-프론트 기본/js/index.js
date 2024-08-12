$(function(){
    //로고
    $(".logo").click(function(){
        $("#popup").show();
    });
    $(".close i").click(function(){
        $("#popup").hide();
    });

    //메뉴바
    $(".top").mouseenter(function(){
        $(this).find(".bottomMenu").show();
        $(".bottomMenuBg").show();
    });
    $(".top").mouseleave(function(){
        $(this).find(".bottomMenu").hide();
        $(".bottomMenuBg").hide();
    });

    $(".nav li").mouseenter(function(){
        $(this).children("a").css({borderBottom:"2px solid #fff"});
    });
    $(".nav li").mouseleave(function(){
        $(this).children("a").css({borderBottom:"2px solid #fff"});
    });
});