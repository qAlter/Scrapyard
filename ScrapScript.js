window.onload = function () {
	var xcur = 0, ycur = 0, heightfortest, widthfortest;
	var closebut = document.getElementById('close');
	function test() {
		if (xcur != 0 || ycur != 0) {
			heightfortest = touch.clientHeight / 2;
			widthfortest = touch.clientWidth / 2;
		}
		else {
			heightfortest = xcur;
			widthfortest = ycur;
		}
	}
	var touch = document.getElementById('touch'),
		touchHelper = {
		width: widthfortest + 'px',
		height: heightfortest + 'px'
		};

	function onmove(coor){ 
	   coor = window.event ? window.event : coor;
	   ycur = coor.pageY;
	   xcur = coor.pageX;
	   
	   touch.onmousedown = function () {
			touchHelper.active = true;
			
			return false;		
		};
		document.onmousemove = function (e) {
			if (touchHelper.active) {
				touch.parentNode.style.top = (e.pageY - touchHelper.height) + 'px';
				touch.parentNode.style.left = (e.pageX - touchHelper.width) + 'px';
			}
		};
		document.onmouseup = function () {
			delete touchHelper.active;
		};
	}
	touch.onmousemove = onmove;
		
	closebut.onclick = function () {
		closebut.parentNode.parentNode.style.display = 'none';
	}	
};