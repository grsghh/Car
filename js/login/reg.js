var subFlag = false; //提交开关
var phoneCode, phoneCodeReg; //手机验证码，手机验证码正则
var emailReg = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
//用户名正则  4-16字符，不能以数字开头，一个汉字为两个字符
var userReg = /^[a-zA-Z]{4,16}|^[\u0391-\uFFE5]{2,8}/;
//密码正则
var pwReg = /[^\u4e00-\u9fa5]{6,32}/;
//手机号正则
var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
var phoneFlag = 0;//手机注册页flag
var emailFlag = 0;//邮箱注册页flag
//邮箱注册 手机注册切换
$(".tabs-mail").click(function() {
	switchReg($(this), $(".regMain-Mail"), $(".regMain-Phone"));
});
$(".tabs-phone").click(function() {
		switchReg($(this), $(".regMain-Phone"), $(".regMain-Mail"));
})
/*邮箱注册区*/
//注册框获取焦点隐藏提示
$(".regMain input[type!=checkbox]").focus(function() {
	$(this).nextAll("span").hide();
	$(this).css("border", "1px solid rgb(197,197,197)")
})
$(".eMail a").click(function() {
		$(".eMail input").val("@qq.com");
	})
	//邮箱验证
$(".eMail input").blur(function() {
		testReg($(this), emailReg, "请填写邮箱地址", "邮箱格式错误");
		if (tipTrue($(this))) {
			emailFlag ++;
		}
	})
	//用户名验证
$(".regMain-Mail .userName input").blur(function() {
		testReg($(this), userReg, "请输入用户名", "用户名格式错误");
		if (tipTrue($(this))) {
			emailFlag ++;
		}
	})
	//密码验证
$(".regMain-Mail .passWord input").blur(function() {
		testReg($(this), pwReg, "请输入密码", "密码格式错误");
		if (tipTrue($(this))) {
			emailFlag ++;
		}
	})
	//密码二次验证
$(".regMain-Mail .ispassWord input").blur(function() {
		testReg($(this), $(this).val(), "请输入密码", "两次密码不同");
		if (tipTrue($(this))) {
			emailFlag ++;
		}
	})
//手机注册区
//手机号验证
$(".phone input").blur(function(){
	testReg($(this),phoneReg,"请输入手机号码","手机号码格式错误");
	if (tipTrue($(this))) {
			phoneFlag ++;
		}
})
//获取验证码
$(".getCode button").click(function() {
	var clipboard = new Clipboard('.alert-copy');
	$(".alert-copy").show();
	phoneCode = randomNum(1000, 9999);
	phoneCodeReg = eval("/" + phoneCode + "/g"); //验证码正则
	$(".mask").show();
	$(".alert").show();
	$(".alert-msg").text(phoneCode);
});
	//用户名验证
$(".regMain-Phone .userName input").blur(function() {
		testReg($(this), userReg, "请输入用户名", "用户名格式错误");
		if (tipTrue($(this))) {
			phoneFlag ++;
		}
	})
	//密码验证
$(".regMain-Phone .passWord input").blur(function() {
		testReg($(this), pwReg, "请输入密码", "密码格式错误");
		if (tipTrue($(this))) {
			phoneFlag ++;
		}
	})
	//密码二次验证
$(".regMain-Phone .regMain-Mail .ispassWord input").blur(function() {
		testReg($(this), $(this).val(), "请输入密码", "两次密码不同");
		if (tipTrue($(this))) {
			phoneFlag ++;
		}
	})
//复制按钮
$(".alert-copy").click(function(){
	$(".alert-copy").text("已复制");
})
//验证码框
$(".isCode input").blur(function() {
		testReg($(this), phoneCodeReg, "请输入验证码", "验证码不正确");
		if (tipTrue($(this))) {
			phoneFlag ++;
		}
	})
	//提交按钮
$(".regMain-Phone .regSubmit-btn").click(function() {
	regSub("phone");
})
$(".regMain-Mail .regSubmit-btn").click(function() {
	regSub("mail");
})
//弹出框关闭
$(".alert-close a").click(function() {
		maskAlert("hide");
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
//更改tip
function wrongTip(target, txt) {
	target.nextAll("span").show();
	target.nextAll("span").children("i").css("background", "url(../../img/login/tip2.png)");
	target.nextAll("span").children("em").text(txt);
	target.nextAll("span").css({
		background: "#fff1f1",
		border: "1px solid #ffbebd"
	});
	target.css("border", "1px solid #ee4d3d");
}

function trueTip(target) {
	target.nextAll("span").show();
	target.nextAll("span").children("i").css({
		background: "url(../../img/login/tip3.png) no-repeat",
		backgroundSize: "100% 100%"
	});
	target.nextAll("span").children("em").text("");
	target.nextAll("span").css({
		background: "white",
		border: "none"
	});
	target.css("border", "1px solid rgb(197, 197, 197)");
}
//注册方式切换
function switchReg(target, showE, hideE) {
	target.removeClass("tabs-off").addClass("tabs-on");
	target.siblings().removeClass("tabs-on").addClass("tabs-off");
	showE.show();
	hideE.hide();
}
//弹出框与遮罩层
function maskAlert(flag, text) {
	if(arguments.length == 2) {
		$(".mask").show();
		$(".alert").show();
		$(".alert-msg").text(text);
	} else {
		$(".alert").hide();
		$(".mask").hide();
	}
}
//随机用户名函数
function randomUser() {
	var letter = [];
	for(var i = 0; i < 7; i++) {	
		if(i > 3) {
			letter.push(randomNum(0, 9));
		}else{
			letter.push(String.fromCharCode(randomNum(65, 90)));
		}
	}
	return letter.join("");
}
//注册按钮判定
function regSub(val) {
	if (val=="mail") {
		if ((emailFlag-0) >= 4) {
			subFlag = true;
		}
	} else{
		if ((phoneFlag-0) >= 4) {
			subFlag = true;
		}
	}
	if(subFlag) {
		if(val == "phone") {
			var val = $(".regMain-Phone .phone input").val();
			$(".regHead").hide();
			$(".regSuccess").show();
			$(".regMain-Phone").hide();
			$(".regSuccess-phone").text("您所绑定的手机号: " + val);
			$(".regSuccess-userName").text("系统生成的用户名: " + randomUser());
		} else {
			var val = $(".regMain-Mail .eMail input").val();
			$(".regHead").hide();
			$(".regSuccess").show();
			$(".regMain-Mail").hide();
			$(".regSuccess-phone").text("您所绑定的邮箱: " + val);
			$(".regSuccess-userName").text("系统生成的用户名: " + randomUser());
		}
	} else {
		maskAlert("show", "信息填写不完整");
		$(".alert-copy").hide();
		
	}
}
//随机数
function randomNum(x, y) {
	return Math.floor(Math.random() * (y - x + 1) + x);
}
//tips通过的函数
function tipTrue(target){
	 var value = target.next("span").children("i").css("backgroundImage");
	if (value.substr(-10,4)=="tip3") {
		return true;
	} else{
		return false;
	}
}
