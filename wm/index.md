 Welcome to WebMark framework official website
### <a href="#latest">Rolled out Alpha 2.1 version, come on check it out</a>
<section>

<h1 id="latest"> Alpha 2.1  Web Mark Framework</h1>

<h2> What is web-mark</h2>
It is a project to brake restrictions of accessibility when surf over different devices.
 It will do the best for everyone, everything, everywhere, without worrying about limitations. Because it will taken as a choice by the project.

<h2> Aim</h2>
<ul>
<li> Speed
</li>
<li> Compatibility
</li>
<li> Non-stop Resources collections
</li>
<li> Remove barriers without losing capabilities to changing time and space
</li>
</ul>
<link rel="stylesheet" type="text/css" href="https://iamal.mooo.com/web-mark/stylesheet.css">
<h2> Activate web-mark</h2>
If you would like to add WebMark framework styling in your website projects just copy and paste code given below inside head tag. Then read examples given in accessories page. 
<style>
button {
  border-radius:6px;
  background-color:#3c7bca;
  color:white;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: none;
}
</style>

<input type="text" value="&lt;link rel&equals;&quot;stylesheet&quot; type&equals;&quot;text/css&quot; href&equals;&quot;https://cdn.jsdelivr.net/gh/amalbenny/amalbenny@v0.2.1-alpha/wm/beta.css&quot;&gt;" id="myInput" disabled>
<script src="https://amalbenny.mooo.com/js/load.js" ></script>
<wm>
<div class="hoverme">
<button onclick="copyboard();" onmouseout="outFunc()">
  <span class="tooltip" id="myTooltip">Copy to clipboard</span>
  Copy text
  </button>
</div>

<script>function copyboard() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
  
  }

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
</script>
<wm>

<h2> <a href="accessories">Accessories</a></h2>
Accessories helps to learn and explore with Web-Mark. They will help as training materials for new comers to web-mark.



</section>

## <a href="//iamal.mooo.com/web-mark">Production page</a>
Developement in progress designs collection
