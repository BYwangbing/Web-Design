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
//    求出导航与浏览器顶部的距离
var topValue = $("nav").offset().top;
$(window).scroll(function() {
	if($(window).scrollTop() > topValue) {
		$("nav").addClass("topFixed");
	} else {
		$("nav").removeClass("topFixed");
	}
})

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

var fss;
$(function() {
	fss = new ddfullscreenslider({
		sliderid: 'dowebok',
		addHash: false
	});
});
var speed = 25; //数字越大速度越慢
var tab = document.getElementById("demo");
var tab1 = document.getElementById("demo1");
var tab2 = document.getElementById("demo2");
tab2.innerHTML = tab1.innerHTML;

function Marquee() {
	if(tab2.offsetWidth - tab.scrollLeft <= 0)
		tab.scrollLeft -= tab1.offsetWidth
	else {
		tab.scrollLeft++;
	}
}
var MyMar = setInterval(Marquee, speed);
tab.onmouseover = function() {
	clearInterval(MyMar)
};
tab.onmouseout = function() {
	MyMar = setInterval(Marquee, speed)
};


    function clickA() {
    	var a = document.getElementById("audio");
        //如果暂停   点击即可播放
        if (a.paused) {
            // 播放
            a.play();
            //如果播放  点击暂停
        } else if (a.play()) {
            //暂停
            a.pause();

        }
    }