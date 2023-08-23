var x=0;
var y=50;
let circle="";

function ctx(){
var element = document.getElementById("canvas");
circle = element.getContext("2d");
  
circle.clearRect(0,0, 200,100);
 
circle.beginPath();
circle.arc(x,y, 6, 0, 2* Math.PI);
circle.stroke();
circle.fillStyle="#ff0000";
circle.fill();
 
 
x+=1;
if (x>=200) {
x-=200;
};
 
if (x===10){
y-=10;
};
 
if (x===20) {
y+=10
}
 
if (x===30) {
y-=10
}
 
if (x===40) {
y+=10 
}
 
if (x===60) {
y-=20
}
 
if (x===70) {
y+=10
}
 
if (x===100) {
y-=25
}
 
if (x===110) {
y+=10
 }
 
 if (x===150) {
  y+=20
 }
 
 if (x===170) {
  y-=10
 }
 
 if(y===0){
 y+=50;
 }
 
 window.requestAnimationFrame(ctx);

}
ctx();