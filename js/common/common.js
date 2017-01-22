$(".rChangeCity-txt").text(localStorage.city);
var provincesArr = [
	"北京",
	"河南",
	"江苏",
	"广东",
];
var citysArr = [
	[
		"通州",
		"朝阳",
		"丰台",
		"海淀",
		"西城",
		"宣武",
		"昌平"
	],
	[
		"郑州",
		"焦作",
		"洛阳",
		"许昌",
		"鹤壁",
		"平顶山",
	],
	[
		"南京",
		"无锡",
		"徐州",
		"邳州",
		"金坛市",
		"常州",
	],
	[
		"汕头",
		"广州",
		"湛江",
		"江门",
		"佛山",
		"韶关",
		"茂名",
	]
];
//添加省
for (var i = 0; i<provincesArr.length;i++) {
	var html = $("<span>"+provincesArr[i]+"</span>");
	$(".rChangeCity-provinces").append(html);
}
//添加市
for (var i = 0; i <citysArr[0].length; i++) {
	var html = $("<span>"+citysArr[0][i]+"</span>");
	$(".rChangeCity-citys").append(html);
}
$(document).on("mouseenter",".rChangeCity-switch",function(){
	$(".rChangeCity-main").show();
});
//省点击事件
$(document).on("click",".rChangeCity-provinces span",function(){
	$(".rChangeCity-citys").html("");
	$(".rChangeCity-provinces span").css({
		background: "white",
		color:"black"
	});
	$(this).css({
		background: "rgb(33,63,123)",
		color:"white"
	})
	switch ($(this).text()){
		case "北京":
			for (var i = 0; i < citysArr[0].length;i++) {
				var h = $("<span>"+citysArr[0][i]+"</span>");
				$(".rChangeCity-citys").append(h);
			}
			break;
		case "河南":
			for (var i = 0; i < citysArr[1].length;i++) {
				var h = $("<span>"+citysArr[1][i]+"</span>");
				$(".rChangeCity-citys").append(h);
			}
			break;
		case "江苏":
			for (var i = 0; i < citysArr[2].length;i++) {
				var h = $("<span>"+citysArr[2][i]+"</span>");
				$(".rChangeCity-citys").append(h);
			}
			break;
		case "广东":
			for (var i = 0; i < citysArr[3].length;i++) {
				var h = $("<span>"+citysArr[3][i]+"</span>");
				$(".rChangeCity-citys").append(h);
			}
			break;
		default:
			break;
	}
})
$(document).on("click",".rChangeCity-citys span",function(){
	$(".rChangeCity-txt").text($(this).text());
	localStorage.city = $(this).text();
	$(".rChangeCity-main").hide();
});