//登录方式切换
$(".login-toPhone").click(function(){
	$(".login-normal").toggle();
	$(".login-phoneCode").toggle();
});
$(".login-toNormal").click(function(){
	$(".login-normal").toggle();
	$(".login-phoneCode").toggle();
});
$(".normal-loginBtn").click(function(){
	window.location.href = "personal.html";
})
//验证输入框 
function testReg(target, reg, emptyTxt, regTxt) {
	//判断输入框值是否为空
	if(target.val() == "") {
		wrongTip(target, emptyTxt);
	} else if(typeof(reg) == "string") { //判断实参类型
		if($(".regMain-Phone").css("display") == "block") {
			if(reg == $(".regMain-Phone .passWord input").val()) {
				trueTip(target);
			} else {
				wrongTip(target, regTxt);
			}
		} else {
			if(reg == $(".regMain-Mail .passWord input").val()) {
				trueTip(target);
			} else {
				wrongTip(target, regTxt);
			}
		}
	} else if(!reg.test(target.val())) { //正则验证
		wrongTip(target, regTxt);
	} else {
		trueTip(target);
	}
}