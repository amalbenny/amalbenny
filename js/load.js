
    document.write('<link rel="stylesheet" type="text/css" href="https://amalbenny.mooo.com/js/load.css">');
function copyboard(){
	
	document.execCommand("copy");

}
document.getElementsByTagName("copyboard").onclick = function () { custom001()}
function custom001(){
    document.getElementsByTagName("copyboard").style.animation="flip-out-hor-top .45s cubic-bezier(.55,.085,.68,.53) both";
}
