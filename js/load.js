    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "https://cdn.jsdelivr.net/gh/amalbenny/amalbenny@v0.2.1-alpha/js/load.js");
    document.getElementsByTagName("head")[0].appendChild(element); 
function copyboard(){
	
	document.execCommand("copy");
}
