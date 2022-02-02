<style type="text/css">@-webkit-keyframes mask-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(129px);
  }
}
@keyframes mask-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(129px);
  }
}
@-webkit-keyframes mask-inner-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-129px);
  }
}
@keyframes mask-inner-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-129px);
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

bodytag,
htmltag {
  height: 100%;
}

bodytag {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3c7bca;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.focus {
  font-size: 3rem;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.2rem;
  line-height: 1;
  position: relative;
  width: 179px;
}
.focus:before {
  content: "index";
  filter: blur(3px);
}
.focus:after {
  content: "";
  position: absolute;
  width: 50px;
  height: calc(100% + 8px);
  top: -4px;
  left: 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
  -webkit-animation: mask-move 1s linear infinite alternate;
          animation: mask-move 1s linear infinite alternate;
}
.focus--mask {
  overflow: hidden;
  position: absolute;
  width: 50px;
  height: 100%;
  top: 0;
  left: 0;
  background: #3c7bca;
  -webkit-animation: mask-move 1s linear infinite alternate;
          animation: mask-move 1s linear infinite alternate;
}
.focus--mask-inner {
  -webkit-animation: mask-inner-move 1s linear infinite alternate;
          animation: mask-inner-move 1s linear infinite alternate;
}

.credits {
  color: white;
  position: relative;
  transform: translateX(-50%);
  font-weight: 200;
  letter-spacing: 0.05rem;
  font-style: italic;
  text-align: right;
}
.credits .main {
  text-decoration: none ;
  color: white;
  font-weight: bold;
}
.credits .sub {
  margin-left:8px;
  font-weight: lighter;
  color: white;
  
}

.credits a:hover {
  text-decoration: underline overline ;
}
</style>


- 👋 Hi, I’m amal<br>
A student enthusiast in modern tech revolutions. I am focusing on projects that helps reinforcement of these growths. Could you please join with me to complete this mission.
You can get in touch by <a href="mailto:amalvelloorath+redirect+from+amalbenny.mooo.com@gmail.com">mailing me</a> to form an allignment.
<!---
amalbenny/amalbenny is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
Production Resources Website: <a href="https://amalbenny.github.io">amalbenny.github.io</a><br/><br/>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/amalbenny/amalbenny@v0.2.0-alpha/wm/beta.css">
Would you like to explore the follow-up regions
<wm><div class="cardBody"><htmltag><bodytag>
<!-- partial:index.partial.html -->
<div class="focus"> 
  <div class="focus--mask">
    <div class="focus--mask-inner">Index</div>
  </div>
</div>
<p class="credits">
<br/><br/><br/><br/><br/><br/><br/><br/>
<a class ="main" href="/wm">Web Mark</a> <br/>
&gt;&nbsp;<a class="sub" href="/wm/accessories">Accessories</a><br/> 
<a class="main" href="/js">Load project</a><br/>
</p>
<!-- partial -->
  </bodytag></htmltag>
<!--- <li> <a href=js">Load project</a> --->
</div>
</wm>
