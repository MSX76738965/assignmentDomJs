
//编写addLoadEvent函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if ( typeof window.onload != 'function' ) {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}


//编写insertAfter函数，定义被插入的新元素&目标元素
function insertAfter(newElement, targetElement) {
	//获取目标元素的parentNode属性值，并存入变量
	var parent = targetElement.parentNode;
	//检查，目标元素是不是parent最后一个子元素
	if (parent.lastChild == targetElement) {
		//若是，直接追加到parent元素上
		parent.appendChild(newElement);
	} else {
		//否则，插入到目标元素和下一个兄弟元素之间
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}


//placeholder函数，创建placeholder
//原：<img id = 'picholder' src = 'xx.jpg'></>
//原：<p id = 'txtholder'>xxx</p>
//创建palceholder
function placeholder() {
	//检查浏览器
	if (!document.createElement) {
		return false;
	}
	if (!document.createTextNode) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById('imagegallery')) {
		return false;
	}
	//创建img元素节点，存入变量
	var picholder = document.createElement('img');
	//设置img的id属性
	picholder.setAttribute('id','picholder');
	//设置img的src属性
	picholder.setAttribute('src','nnn.png');
	//设置img的alt属性（可选）
	picholder.setAttribute('alt','my picholder');
	//创建p元素节点
	var txtholder = document.createElement('p');
	//设置p的id属性
	txtholder.setAttribute('id','txtholder');
	//创建文本节点
	var txt = document.createTextNode('name of the pic');
	//把文本节点追加到p元素
	txtholder.appendChild(txt);
	//获取原图片id属性
	var gallery = document.getElementById('imagegallery');
	//在原图后面插入placeholder
	insertAfter(picholder,gallery);
	insertAfter(txtholder,picholder);
}


//onclick函数，循环遍历链接
function onclick() {
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById('imagegallery')) {
		return false;
	}
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showpic(this);
		}
	}
}


//showpic函数
function showpic (whichpic) {
	if (!document.getElementById('picholder')) {
		return true;
	}
	var pics = whichpic.getAttribute('href');
	var picholder = document.getElementById('picholder');
	picholder.setAttribute('src', pics);
	if (!document.getElementById('txtholder')) {
		return false;
	}
	if (whichpic.getAttribute('title')) {
		var txt = whichpic.getAttribute('title');
	} else {
		var txt = '';
	}
	var txtholder = document.getElementById('txtholder');
	if (txtholder.firstChild.nodeType == 3) {
		txtholder.firstChild.nodeValue = txt;
	}
	return false;
}


//调用事件函数
addLoadEvent(placeholder);
addLoadEvent(onclick);












