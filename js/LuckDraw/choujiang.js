$(function(){
	$(document).on('click','.shut',function(){
		$('.sDrawMsg').hide(300);
	}).on('click','.sJoinDiv a',function(){
		window.location.href='canyuchenggong.html';
	}).on('mouseenter','.sJoinDiv a',function(){
		$(this).css({
			'transform':'scale(1.1,1.1)'
		})
	}).on('mouseleave','.sJoinDiv a',function(){
		$(this).css({
			'transform':'scale(1,1)'
		})
	})
	
})
/*美梦成真*/
$(function(){
	$('.sMenu li').each(function(i,e){
		$(e).on('click',function(){
			$(e).addClass('sMenuStyle').siblings().removeClass('sMenuStyle');
		})
		
	})
	$('.subMenu li').each(function(i,e){
		$(e).click(function(){
			$(e).addClass('subMenuStyle').siblings().removeClass('subMenuStyle');
		})
	})
	$('li').on('mouseenter',function(){
		$(this).css({'opacity':'.7'})
	}).on('mouseleave',function(){
		$(this).css({'opacity':'1'});
	})
})
