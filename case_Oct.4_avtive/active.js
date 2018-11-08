

window.onload = function() {
	//增加新的元素p
	var brandnew = document.createElement('p');
	//要放在id下，所以要先获取id的属性
	var testdiv = document.getElementById('testdiv');
	//嵌入p元素，即把p元素放在id下，作为其子节点
	testdiv.appendChild(brandnew);
	//增加文本
	var txt = document.createTextNode('this is a new line');
	//嵌入txt元素，即把txt放在p下面，作为其子节点
	brandnew.appendChild(txt);
}



window.onload = function() {
	var para = document.createElement('p');
	var txt1 = document.createTextNode('This is');
	var bold = document.createElement('b');
	var txt2 = document.createTextNode(' very');
	var txt3 = document.createTextNode(' good');
	para.appendChild(txt1);
	para.appendChild(bold);
	bold.appendChild(txt2);
	para.appendChild(txt3);

	var testdiv = document.getElementById('testdiv');
	testdiv.appendChild(para);
}