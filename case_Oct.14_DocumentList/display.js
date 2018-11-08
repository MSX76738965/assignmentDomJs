
//目标：用函数，创建abbr的列表，插入到文档，检查浏览器兼容性，调用函数

// 显示缩略语abbr的列表
function displayAbbr () {
	// 检查兼容性
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.createElement) {
		return false;
	}
	if (!document.createTextNode) {
		return false;
	}
	// 获取abbr相关信息
	var abbrs = document.getElementsByTagName('abbr');
	if (abbrs.length < 1) {
		return false;
	}
	// 遍历abbr，定义数组
	var defs = []; //等价于 var defs = new Array();
	for ( var i = 0; i < abbrs.length; i++ ) {
		var current_abbr = abbrs[i];
		var defination = current_abbr.getAttribute('title');
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = defination;
	}
	// 创建定义列表
	var dlist = document.createElement('dl');
	for (key in defs) {
		var defination = defs[key]; 
		var dtitle = document.createElement('dt');
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement('dd');
		var ddesc_text = document.createTextNode(defination);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	// 创建定义标题
	var header = document.createElement('h2');
	var header_text = document.createTextNode('See this');
	header.appendChild(header_text);
	// 添加到页面主体
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}


//window.onload = displayAbbr;

addLoadEvent(displayAbbr);











