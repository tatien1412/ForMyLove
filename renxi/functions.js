
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
	var current = new Date();  // Lấy thời gian hiện tại
	console.log("Current Date: ", current);
	console.log("Start Date: ", date);

	// Tính tổng số giây chênh lệch
	var totalSeconds = (Date.parse(current) - Date.parse(date)) / 1000;

	// Tính tổng số ngày
	var days = Math.floor(totalSeconds / (3600 * 24));
	totalSeconds = totalSeconds % (3600 * 24); // Còn lại giây trong ngày hiện tại

	// Tính số giờ
	var hours = Math.floor(totalSeconds / 3600);
	totalSeconds = totalSeconds % 3600;

	// Tính số phút
	var minutes = Math.floor(totalSeconds / 60);

	// Số giây còn lại
	var seconds = Math.floor(totalSeconds % 60);

	console.log("Final Result - Days:", days, "Hours:", hours, "Minutes:", minutes, "Seconds:", seconds);

	// Hiển thị kết quả
	var result = "<span class=\"digit\">" + days +
		"</span> ngày <span class=\"digit\">" + hours +
		"</span> giờ <span class=\"digit\">" + minutes +
		"</span> phút <span class=\"digit\">" + seconds + "</span> giây";

	$("#clock").html(result);
}


