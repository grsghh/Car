var regUser1 = /^((13)|(18)|(15)|(17))[0-9]{9}/g;
//var regUser2 = /^[0-9a-zA-Z]+@+(sina|qq|163|126)[\.](com|cn)/g;
var regUser2 = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
var regPass = /^[a-z]{1}[a-zA-Z0-9]{5,17}/g;
$(document).on("blur","#xUser",function(){
	if(regUser1.test($("#xUser").val()) || regUser2.test($("#xUser").val())){
		$(".xRight-con i").eq(0).text("✅");
		$(".xRight-con i").eq(0).css("visibility","visible");
	}else{
		$(".xRight-con i").eq(0).css("visibility","visible");
	}
})
$(document).on("blur","#xPassword",function(){
	if (regPass.test($("#xPassword").val())) {
		$(".xRight-con i").eq(1).text("✅");
		$(".xRight-con i").eq(1).css("visibility","visible");
	} else{
		$(".xRight-con i").eq(1).css("visibility","visible");
	}
})
//验证码
var xCode;//设置验证码全局变量
var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z');
function randomNum(x,y){
	return Math.floor(Math.random()*(y - x + 1) + x);
}
$(window).on("load",createCode());
//创建验证码
function createCode(){
	xCode = ""; //清空之前的赋值
	for(var i = 0;i < 4;i++){
		var index = randomNum(0,35);
		xCode += random[index];
	}
	$(".xRight-con em").text(xCode);
}
//判断验证码是否输入正确
$(document).on("blur","#xVerify",function(){
	if($("#xVerify").val() == ""){
		$(".xRight-con i").eq(2).text("* 请输入验证码!");
		$(".xRight-con i").eq(2).css("visibility","visible");
	}else if($("#xVerify").val().toUpperCase() != $(".xRight-con em").text()){//把小写字母转换成大写
		$(".xRight-con i").eq(2).css("visibility","visible");
	}else{
		$(".xRight-con i").eq(2).text("✅");
		$(".xRight-con i").eq(2).css("visibility","visible");
	}
})
//刷新验证码
$(".xRight-con span").on("click",function(){
	  createCode();
})


















