
  function changeOrientation(ele){
    if (ele.innerText=="Side-by-Side"){
      ele.innerText="Above-n-Below"
    }else{
      ele.innerText="Side-by-Side"
    }
    document.getElementById('inputDiv').classList.toggle('w3-half')
    document.getElementById('outputDiv').classList.toggle('w3-half')
  }

  function RunJS() {
    var doc = document.getElementById('output').contentWindow.document;
    doc.open();
    doc.write(document.getElementById('htmldata').value);
    doc.close();
    document.getElementById('outputTitle').innerHTML="Output: <b>"+doc.title+"</b>";
  }

  function DownloadCode() {
    var element = document.createElement('a');
    var text = document.getElementById('htmldata').value;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    filename = prompt("Enter File Name","index.html");
    if(filename!=null){
    element.setAttribute('download',filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}

function DarkMode(){
  document.getElementById('footer').classList.toggle('darkBar');
  document.getElementById('htmldata').classList.toggle('darkInput');
  document.getElementById('output').classList.toggle('darkOutput');
  document.body.classList.toggle('dark');
}

function copyText(but) {
  var copyText = document.getElementById("htmldata");
  copyText.select();
  but.innerText="Copied!"
  but.style.color='green'
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  setTimeout(function(){ but.style.color='black';
but.innerText="Copy Text" }, 3000);
}

function LoadCode(){
    var html=
`<!DOCTYPE html>
<html>
  <head>
    <title>RW-Lab | HTML | JS Playground</title>
    <style>
      //Your Styles Here
    </style>
  </head>
<body>
  <h1>Hello World</h1>
</body>
</html>`;
document.getElementById('htmldata').value=html;
}



function ShareOutput(){
  alert("Select 'Save as PDF' to download Output")
  document.getElementById('output').contentWindow.print()
}

function ShowDropper(mode,ele) {
  if(mode==1){
    ele.style.background="black";
    ele.outerHTML+=`<span id="dimcode" class="w3-display-middle">Drop File Here</span>`;
    console.log("entered");
  }else{
    ele.style.background="white";
    document.getElementById('dimcode').outerHTML=""
    console.log("exited");
  }
}

window.onbeforeunload = function(event) {
    event.returnValue = "Your current file will be Lost on Reload, Continue?";
};
window.onload = function(){
  LoadCode();
  RunJS();
}

var elem = document.documentElement;

function openFullscreen(ele) {
  ele.setAttribute('onclick','closeFullscreen(this);');
  ele.classList.toggle('w3-orange')
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen(ele) {
  ele.setAttribute('onclick','openFullscreen(this);');
  ele.classList.toggle('w3-orange')
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
