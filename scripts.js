
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

window.onscroll = function() {scrollFunction();scrollshow1();scrollshow2();};

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
    if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
        document.getElementsByClassName("fade_rule")[1].style="width:100%;transition:0.8s;transition-timing-function: linear";
        var ivt =  setTimeout(stopdis,800);
        function stopdis(){
    document.getElementsByClassName("flashlight")[1].style="display:none";
    }
    }
  }


  function scrollshow2() {
      if (document.body.scrollTop > 2400 || document.documentElement.scrollTop >2400) {
          document.getElementsByClassName("fade_rule")[2].style="width:100%;transition:0.8s;transition-timing-function: linear";
          var ivt =  setTimeout(stopdis,800);
          function stopdis(){
      document.getElementsByClassName("flashlight")[2].style="display:none";
      }
      }
    }




