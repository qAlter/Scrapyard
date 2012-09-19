window.onload = function () {
  var touch = document.getElementById('touch'),
		touchHelper = {
			width: touch.clientWidth / 2,
			height: touch.clientHeight / 2
			};
	
	touch.onmousedown = function () {
		touchHelper.active = true;
		
		return false;		
	};
	document.onmousemove = function (e) {
		if (touchHelper.active) {
			touch.style.top = (e.pageY - touchHelper.height) + 'px';
			touch.style.left = (e.pageX - touchHelper.width) + 'px';
		}
	};
	touch.onmouseup = function () {
		delete touchHelper.active;
	};
};