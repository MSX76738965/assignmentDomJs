
function holder (stuff) {

	//检查，若不存在则不替换，直接打开链接
	if(!document.getElementById('placeholder')) {
		return false;
	}
	//获取原图属性，存入变量
	var pics = stuff.getAttribute('href');
	//获取占位图id元素，存入变量
	var placeholder = document.getElementById('placeholder');
	//占位图属性替换
	placeholder.setAttribute('src', pics);
	

	//检查，若存在则替换，不存在不影响pics的替换
	if(document.getElementById('textholder')) {
		//获取原文本title，存入变量
		var texts = stuff.getAttribute('title');
		//获取占位文本title，存入变量
		var textholder = document.getElementById('textholder');
		//占位文本属性替换
		textholder.firstChild.nodeValue = texts;
	}
	return true; 
}