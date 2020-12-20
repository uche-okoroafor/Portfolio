var myVision = setInterval(welcomemodal, 1500);
var iw = 0;

function welcomemodal(){

document.getElementsByClassName('intro')[iw].style="opacity:1;transition:opacity 1s";
  iw++;
}

var stopvision = setTimeout(stopwelcome,7000);

function stopwelcome(){
if(iw > 2){
  document.querySelector(".welcomepage").style="opacity:0;transition:opacity 3s";
  }
}
var stopdisplay =  setTimeout(stopdisplay,9000);
function stopdisplay (){

document.querySelector(".welcomepage").style="display:none";
  document.querySelector('.body').style="display:block";
clearInterval(myVision);

}
var startup = setTimeout(startupdis,9200);
function startupdis() {
  document.querySelector('.navbar').style="height:60px;transition: height 2s;overflow-y:visible";
  document.getElementById('intro').style="opacity:1;transition: all 4s";
}

/*menubar*/
function myFunction(x) {
  x.classList.toggle("change");
  var x =  document.querySelector(".mobimenu");

 if (x.style.opacity < "1") {
   x.style="width:70%;opacity:1;transition: all 0.8s";
document.querySelector('.closemenubar').style.display='block';

 } else {
   x.style="width:0;opacity:0;transition: all 0.8s";
   document.querySelector('.closemenubar').style.display='none';
}
}

document.querySelector('.mobimenu a').addEventListener("click", closebar);
document.querySelector('.closemenubar').addEventListener("click", closebar);
function closebar() {
  var x =  document.querySelector(".mobimenu");
 if (x.style.opacity >"0") {
  x.style="width:0;opacity:0;transition: all 0.8s";
     document.querySelector('.closemenubar').style.display='none';
    document.querySelector('.menubar').classList.toggle("change");
 }
}

document.querySelector('.mobimenu').addEventListener("click", closebar);

/*logo rotaton*/
var logodance = setInterval(logorotate,20);
var logodeg = 0;
function logorotate(){
  logodeg++;
document.querySelector(".logo img").style="transform:rotateY(" + logodeg + "deg)";

}

/*fade_rule*/

window.onscroll = function() {scrollFunction();scrollshow1();scrollshow2();scrollshow3();};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("fade_rule")[0].style="width:100%;transition:0.8s;transition-timing-function: linear";
    var ivt =  setTimeout(stopdis,800);
    function stopdis(){
document.getElementsByClassName("flashlight")[0].style="display:none";
}
}
}

function scrollshow1() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementsByClassName("fade_rule")[1].style="width:100%;transition:0.8s;transition-timing-function: linear";
        var ivt =  setTimeout(stopdis,800);
        function stopdis(){
    document.getElementsByClassName("flashlight")[1].style="display:none";
    }
    }
  }


  function scrollshow2() {
      if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
          document.getElementsByClassName("fade_rule")[2].style="width:100%;transition:0.8s;transition-timing-function: linear";
          var ivt =  setTimeout(stopdis,800);
          function stopdis(){
      document.getElementsByClassName("flashlight")[2].style="display:none";
      }
      }
    }


var hover = document.querySelector('.imgspace').addEventListener("mouseover",convert);

function convert (){

document.getElementsByTagName('i').style="color:#121e29" ;
}

