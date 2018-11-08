
function popup(winURL) {
	window.open(winURL, 'popup', 'width = 320, height = 480');
}


window.onload = arraylinks;
function arraylinks() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++ ) {
		if ( links[i].getAttribute('class') == 'popup' ) {
			links.[i].onclick = function() {
				popup(this.getAttribute("href"));
				return false;
			}
		}
	}
}