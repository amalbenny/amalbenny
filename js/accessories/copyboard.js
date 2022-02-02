<!DOCTYPE html>
<html>
<head>
<title> Copyboard function example</title>
<link rel="stylesheet" type="text/css" href="https://iamal.mooo.com/web-mark/stylesheet.css">
<script type="text/javascript" src="https://amalbenny.mooo.com/js/load.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<p>Click on the button to copy the text from the text field. Try to paste the text (e.g. ctrl+v) afterwards in a different window, to see the effect.</p><br><hr><p>hi </p>
<input type="text" value="&gt; I am al visit amalbenny.mooo.com" id="myInput" disabled>

<div class="hoverme">
<button onclick="copyboard();" onmouseout="outFunc()">
  <span class="tooltip" id="myTooltip">Copy to clipboard</span>
  Copied text
  </button>
</div>
</body>
</html>
