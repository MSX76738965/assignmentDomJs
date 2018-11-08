
function positionMessage () {
	var elem = document.getElementById('message');
	elem.style.position = 'absolute';
	elem.style.left = '50px';
	elem.style.top = '100px';
	//movement = setTimeout(function(){moveMessage();}, 5000);
}


function moveMessage () {
	var elem = document.getElementById('message');
	//渐变动画效果
	//获取初始位置，并转换为数值（浮点数为parseFloat）
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == 200 & ypos == 100) {
		return true;
	}
	if (xpos < 200) {
		xpos ++;
	}
	if (xpos > 200) {
		xpos --;
	}
	if (ypos < 100) {
		ypos ++;
	}
	if (ypos > 100) {
		ypos --;
	}
	elem.style.left = xpos + 'px';
	elem.style.top = ypos + 'px';
	movement = setTimeout(function(){moveMessage();}, 10);
}

//clearTimeout(movement); 取消等待执行的函数

addLoadEvent(positionMessage);
addLoadEvent(moveMessage);


