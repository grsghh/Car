var xCode;
var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
     'S','T','U','V','W','X','Y','Z');
function randomNum(x,y){
	return Math.floor(Math.random()*(y-x+1)+x);
}
$(window).on("load",createCode());
//创建二维码
function createCode(){
	xCode = "";
	for(var i= 0; i <4; i++){
		var index = randomNum(0,35);
		xCode += random[index];
	}
	$(".query-user em").text(xCode);
}
//判断验证码是否输入正确
$(document).on("blur",".judge-code",function(){
	if($(".judge-code").val() == ""){
		alert("请输入验证码好么,好么,好么")
	}else if($(".judge-code").val().toUpperCase() != $(".query-user em").text()){//把小写字母转换成大写
		alert("缺,输入正确的!")
	}else{
	    alert("对了!")
	}
})
//刷新验证码
$(".query-user span").on("click",function(){
	  createCode();
})