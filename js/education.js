//显示时间
function showTime() {
	var week = "今天是星期" + "日一二三四五六".charAt(new Date().getDay());
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var day = now.getDay();
	var hour = now.getHours();
	var minutes = now.getMinutes();
	var second = now.getSeconds();
	month < 10 ? month = '0' + month : month;
//	month = month + 1;
	hour < 10 ? hour = '0' + hour : hour;
	minutes < 10 ? minutes = '0' + minutes : minutes;
	second < 10 ? second = '0' + second : second;
	var now_time = '当前时间：' + year + '年' + month + '月' + date + '日' + ' ' + hour + ':' + minutes + ':' + '' + second + ' ' + week;
	document.getElementById('showtime').innerHTML = now_time;
	setTimeout("showTime();", 1000); //每隔1秒刷新一次
}
showTime();

//返回顶部
$(function() {

	$('toTop').hide();

	$(window).scroll(function() {
		//当window的scrolltop距离大于1时，go to 
		if($(this).scrollTop() > 100) {
			$('.toTop').fadeIn();
		} else {
			$('.toTop').fadeOut();
		}
	});

	$('.toTop img').click(function() {
		$('html ,body').animate({
			scrollTop: 0
		}, 300);
		return false;
	});

});

var big_body = $(".big_body").height()+$(".topBar").height()+$(".header").height();
jQuery(document).ready(function($) {
	$(".scroll i").click(function(event) {
		event.preventDefault();
		$('html,body').animate({ scrollTop: big_body }, 400);
	});
});