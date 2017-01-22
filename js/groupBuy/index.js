//动态设置高
var lis = $(".proList-left li:nth-of-type(odd)").length;
var h = $(".proList-left li").css("height");
$(".main-proList").height(parseInt(h)*lis+130);
//$(".proList-left").height(parseInt(h)*lis);
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