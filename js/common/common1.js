//返回顶部
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$('.sReTop').slideDown(200);
		}else{
			$('.sReTop').slideUp(200);
		}
	})
})
$(function(){
	$('img').mouseenter(function(){
		$(this).parent().css({
			'overflow':'hidden',
			'borderRadius':'5px'
		});
		$(this).css('transform','scale(1.1,1.1)');
	}).mouseleave(function(){
		$(this).css({
			"transform":'scale(1,1)'
		})
	})
	$('.orderDel').click(function(){
		var that = $(this);
		$('.ok').click(function(){
			$('.msg').hide();
			that.parent().parent().remove();
		})
		
	})
})
//链接
$(function(){
	$('.sMenu li').eq(0).click(function(){
		window.location.href='orderForm.html';
	})
	$('.sMenu li').eq(1).click(function(){
		window.location.href = 'myEvaluate.html';
	})
	$('.sMenu li').eq(2).click(function(){
		window.location.href = 'myCollecte.html';
	})
	$('.sMenu li').eq(3).click(function(){
		window.location.href = 'balance.html';
	})
	$('.sMenu li').eq(4).click(function(){
		window.location.href = 'rechange.html';
	})
	$('.mm').click(function(){
			window.location.href = 'wodemeimengchengzhen.html';
	})
	
})