
function showpic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);

	var text = whichpic.getAttribute("title");
	var textholder = document.getElementById("textholder");
	textholder.firstChild.nodeValue = text;
}
