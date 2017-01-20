//swiper轮播图

//setTimeout(function() {
//	var ha = new Swiper(".swiper-container", {
//		direction: "horizontal",
//		loop: true,
//		pagination: ".swiper-pagination",
//		autoplay: 2000,
//		effect: "overflow"
//	});
//}, 10)
//$(".scrollImg-box").width() = $(".scrollImg-box img:eq(0)").width()*$(".scrollImg-box img").length 

//jq轮播图  
$(".scrollImg-box").css("width",$(".scrollImg-box img").eq(0).width()*$(".scrollImg-box img").length);
var index = 0; 
var lastTime = new Date().getTime();
var interval =1000;
//左按钮
$(".show-left").on("click",function(){
	if(new Date().getTime()-lastTime < interval){
		return;
	 }
	lastTime = new Date().getTime();
	if(index == 0){
		index = 4;
		$(".scrollImg-box").css({
		left:-$(".scrollImg-show").width()*index
	});
	}
	index--;
	$(".scrollImg-box").animate({
		left:-$(".scrollImg-show").width()*index
	},500);
	changeBall(index);
});
//右按钮
$(".show-right").on("click",function(){
	if(new Date().getTime()-lastTime < interval){
		return;
	 }
	lastTime = new Date().getTime();
	index++;
	if(index == 4){
		index = 0; 
		$(".scrollImg-box").css({
		left:-$(".scrollImg-show").width()*index
	});
	}
	$(".scrollImg-box").animate({
		left:-$(".scrollImg-show").width()*index
	},500); 
	changeBall(index);
});
//触碰小球换图片
$(".scrollImg-show li").on("mouseenter",function(){
	if(new Date().getTime()-lastTime < interval){
		return;
	 }
	lastTime = new Date().getTime();
	$(".scrollImg-box").animate({
		left:-$(".scrollImg-show").width()*$(this).index()
	},500);
	index = $(this).index();
	changeBall(index);
})
//改变小球颜色
function changeBall(index){
	$(".scrollImg-show li").css("background","white")
	$(".scrollImg-show li").eq(index).css("background","rgb(28,46,106)")
}
 //自动轮播
function autoImg(){
	if(index == 4){
		index = 0;
		$(".scrollImg-box").css({
		left:-$(".scrollImg-show").width()*index
	});
	}
	index++;
	$(".scrollImg-box").animate({
		left:-$(".scrollImg-show").width()*index
	},500);
	changeBall(index);
}
//添加计时器
var timer = setInterval(autoImg,1500);
$(".scrollImg-show").on("mouseenter",function(){
	clearInterval(timer);
});
$(".scrollImg-show").on("mouseleave",function(){
	timer = setInterval(autoImg,1500)
})

//点击返回顶部
$("#back-top").hide();
$(window).scroll(function(){
	if($(window).scrollTop()>1000){
		$("#back-top").show("slow");
	}else{
		$("#back-top").fadeOut(500);
	}
})
$("#back-top").click(function(){
	$("body").animate({
		scrollTop:0
	},200)
})




//每0.1s刷新一下,重新获取body宽度
//$(function(){
//	setTimeout(widthChange,100);
//});
////body宽>1050,返回顶部按钮在内容右侧;<1050时在内容距右50px
//function widthChange(){
//	var browerWidth = document.body.clientWidth;
//  var right = (browerWidth-976)/2-74;
//  if( $(window).width() > 1050 ) {
// 		$(".back-top").css("right",right);
//  }else{
//  		$(".back-top").css("right",50);
//  }
//  setTimeout(widthChange,1000);
//};


