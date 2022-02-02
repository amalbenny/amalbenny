    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "https://amalbenny.mooo.com/js/load.css");
    document.getElementsByTagName("head")[0].appendChild(element); 

mySwitch = document.getElementsByTagName("copyboard")[0]
mySwitch.onclick = myFunction;

function myFunction() {
  document.mySwitch[0].style.backgroundColor = "yellow";
}
function copyboard(){
	
	document.execCommand("copy");
}
