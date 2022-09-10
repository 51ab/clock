var hour=document.getElementById("hour");
var min=document.getElementById("min");
var sec=document.getElementById("sec");

var setclock=setInterval(function clock()
{
var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();

hrotation = 30*h +m/2;
mrotation = 6*m;
srotation = 6*s;

hour.style.transform = `rotate(${hrotation}deg)`;
min.style.transform = `rotate(${mrotation}deg)`;
sec.style.transform = `rotate(${srotation}deg)`;
},1000);