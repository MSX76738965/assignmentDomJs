
function moveElement (elementID, final_x, final_y, interval) {
	//获取ID，存入变量
	var elem = document.getElementById(elementID);
	//设置x/y位置，存入变量，并转为数值
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	//检查x/y是否到达目的地，设置移动条件
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		xpos ++;
	}
	if (xpos > final_x) {
		xpos --;
	}
	if (ypos < final_y) {
		ypos ++;
	}
	if (ypos > final_y) {
		ypos --;
	}
	//更新x/y的位置，追加px为字符串，赋值给ID的变量
	elem.style.left = xpos + 'px';
	elem.style.top = ypos + 'px';
	//反复调用，设置为新变量
	var repeat = "moveElement('"+elementID+"', "+final_x+", "+final_y+", "+interval+")";
	//设置setTimeout
	movement = setTimeout(repeat, interval);
}



addLoadEvent(moveElement);
