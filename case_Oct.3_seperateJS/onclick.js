
function gallery () {
	// 检查浏览器
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	} 
	if (!document.getElementById('imagegallery')) {
		return false;
	}

	//获取imgaegallery元素中的所有链接
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');

	//遍历imgaegallery元素中的所有链接
	for ( var i = 0; i < links.length; i++ ) {
		links[i].onclick = function() {
			if (holder(this)) {
				return false;
			} else {
				return true;
			}
		}
	}
}
 	/*这里原来是「holder(this); return false」
 	意为若无替换图片，则不点开链接，什么都不做
 	但希望若无图换图片，则需要点开原图片链接
 	那么，需要在return中直接取反函数
 	或者，用if-else来执行holder(this)
 	*/


/*网页加载完毕后触发onload事件
可以直接用window.onload = gallery
但这里一并展示，当需要绑定>=2个函数时该怎么做
*/

//用addLoadEvent函数解决
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
//添加函数d到队列
addLoadEvent(gallery);


