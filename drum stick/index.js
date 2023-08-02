document.getElementById("1").addEventListener("click",clickfunc);
document.getElementById("2").addEventListener("click",clickfunc2);
document.getElementById("3").addEventListener("click",clickfunc3);
document.getElementById("4").addEventListener("click",clickfunc4);
document.getElementById("5").addEventListener("click",clickfunc5);
document.getElementById("6").addEventListener("click",clickfunc6);
document.getElementById("7").addEventListener("click",clickfunc7);


function clickfunc(){
   var audio = new Audio("sounds/tom-1.mp3");
   audio.play();
}


function clickfunc2(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
 }

 function clickfunc3(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
 }

 function clickfunc4(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
 }

 function clickfunc5(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
 }

 function clickfunc6(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
 }

 function clickfunc7(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
 }