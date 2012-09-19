window.onload = function () {
	var xcur = 0, ycur = 0;
	var closebut = document.getElementById('close');
	var touch = document.getElementById('touch'),
		touchHelper = {
		width: xcur,
		height: ycur
		};

	function onmove(coor){ 
	   coor = window.event ? window.event : coor;
	   ycur = coor.pageY;
	   xcur = coor.pageX;
	   
	   touch.onmousedown = function () {
		   	touchHelper.width = xcur;
			touchHelper.height = ycur;
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