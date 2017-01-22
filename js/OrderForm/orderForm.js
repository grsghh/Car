$(function() {
	$('.sDrawMsg img').on('click', function() {
		$(this).parent().hide(200);
	})
	$('.orderDel').on('click', function() {
		$('.msg').slideDown(200);
	})
	$('.msgT span').on('click', function() {
		$('.msg').hide(200);
	})
	$('.remove').on('click', function() {
		$('.msg').slideUp(200);
	})
	$('.orderInfo').on("click", function() {
		window.location.href = 'orderDetail.html';
	})
})

/*提交订单*/
$(function() {
	//页面首次加载
	var allPrice = $('.allPrice').html() - 0; //总价	
	var coupon = 20; //代金券	
	var payable = allPrice - coupon;
	$('.coupon').html(coupon);
	$('.payCount em').html(payable);

	//减
	$('.del').on('click', function() {
		if($(this).next().val() > 1) {
			$(this).css('opacity', '1');
			var count = $(this).next().val() - 1;
			$(this).next().next().css('opacity', '1');
			$(this).next().val(count);
			allPrice = ($(this).parent().next().find('em').html() - 0) * count;
			$(this).parent().next().next().find('em').html(allPrice);
			payable = allPrice - coupon;
			$('.payCount em').html(payable);
		} else {
			$(this).css('opacity', '.5');
		}

	})

	//加
	$('.add').on('click', function() {
		if($(this).prev().val() < 20) {
			$(this).css('opacity', '1');
			if($(this).prev().val() == 19) {
				$(this).css('opacity', '0.5');
			}
			$(this).prev().prev().css('opacity', '1');
			var count = $(this).prev().val() - 0 + 1;
			$(this).prev().val(count);
			allPrice = ($(this).parent().next().find('em').html() - 0) * count;
			$(this).parent().next().next().find('em').html(allPrice);
			payable = allPrice - coupon;
			$('.payCount em').html(payable);
		}

	})

	//输入个数改变
	//	$('.count').on('input propertychange',function(){
	//		if($(this).val()>100){
	//			$(this).val(100);
	//		}else if($(this).val()<1){
	//			$(this).val(1)
	//		}
	//	})

	//提交
	$('.placeOrder').on('click', function() {
		window.location.href = 'placeOrder2.html';
	})

})

/*支付方式*/
$(function() {
	//其他方式
	var temp = true;
	$('.other').click(function() {
		$('.wPay').toggle(200);
		$('.sCredit').slideDown(200);
		$('.sAlipay').slideDown(200);
	})

	$('.sCredit h4').click(function() {
		$('.xPay').toggle(200);
	})

	$('.sAlipay h4').click(function() {
		$('.zPay').toggle(200);
	})

	$(':radio').click(function() {
			var val = $(this).attr('value');
			alert(val);
			$(':radio').removeAttr('checked');
			$(this).attr('checked', 'checked');
		})
		//去付款
	$("#spay").click(function() {
		var val = $(':radio:checked').attr('value');
		alert(val);
		window.location.href = 'placeOrder3.html';
	})
	$("#rOrder").click(function() {
		window.location.href = 'placeOrder.html';
	})
})

//充值
$(function() {
	$('.balanceDiv input').blur(function() {
		if($('.balanceText input').val() == '') {
			$('.balanceMsg').show();
		}else{
			$('.balanceMsg').hide();
		}
	})
})



