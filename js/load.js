
    document.write('<link rel="stylesheet" type="text/css" href="https://amalbenny.mooo.com/js/load.css">');
function copyboard(){
	
	document.execCommand("copy");

}
getElementByTagName("copyboard").onclick = function () { custom001()}
function custom001(){
    getElementByTagName("copyboard").style.animation="flip-out-hor-top .45s cubic-bezier(.55,.085,.68,.53) both";
}
