
function cite () {
	// 检查兼容性
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.createElement) {
		return false;
	}
	if (!document.createTextNNode) {
		return false;
	}
	// 获取
	var quotes = document.getElementsByTagName('blockquote');
	if (quotes.length < 1) {
		return false;
	}
	// 遍历引用
	for (var i = 0; i < quotes.length; i++) {
		var current_quotes = quotes[i];
		var url = current_quotes.getAttribute('cite');
		var quoteChildren = current_quotes.getElementsByTagName('*');
		if (quoteChildren.length < 1) {
			continue;
		}
		var elem = quoteChildren[quoteChildren.length - 1];
		// 创建
		var link = document.createElement('a');
		var link_text = document.createTextNode('source');
		link.appendChild(link_text);
		link.setAttritue('href',url);
		var sup = document.createElement('sup');
		sup.appendChild(link);
		elem.appendChild(sup);
	}
}

//window.onload = cite;
addLoadEvent(cite);