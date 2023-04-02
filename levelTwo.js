
//circle positions object//
let circlePositions = {
x: 200,
xx: 200,
xxx: 200,
y: 300,
yy: 300,
yyy:300,
m: 800,
};
let previousFrame=Date.now();
let timePassed="";
let framePerSec="";
let circleSpeed=100;
let dirOfCircle=1.5;
let dirOfSecCircle=1.3;
let dirOfThirdCircle=1.3;

let ball= document.getElementById("levelAlert");

window.onload= function firstBall(){

timePassed = (Date.now()-previousFrame)/1000;
previousFrame=Date.now();
framePerSec= Math.round(1/timePassed);



let ballBounce= ball.getContext("2d");
ballBounce.clearRect(0,200,  800,600 );


ballBounce.beginPath();
ballBounce.arc(circlePositions.x, circlePositions.y, 60, 0, 2* Math.PI);
ballBounce.fillStyle="black";
ballBounce.fill();

ballBounce.beginPath();
ballBounce.arc(circlePositions.xx, circlePositions.yy, 30, 0, 2* Math.PI);
ballBounce.fillStyle="white";
ballBounce.fill();

ballBounce.beginPath();
ballBounce.arc(circlePositions.xxx, circlePositions.yyy, 20, 0, 2* Math.PI);
ballBounce.fillStyle="black";
ballBounce.fill();

//add 1 to the x positions of the circles//
circlePositions.x+=dirOfCircle*(circleSpeed*timePassed);
circlePositions.xx+=dirOfSecCircle*(circleSpeed*timePassed);
circlePositions.xxx+=dirOfThirdCircle*(circleSpeed*timePassed);
  
if (circlePositions.x>=700 || circlePositions.x<=98) {
dirOfCircle*=-1;
}

else if (circlePositions.xx>=400 || circlePositions.xx<=99) {
dirOfSecCircle*=-1
}

else if (circlePositions.xxx>=399 || circlePositions.xxx<=99) {
dirOfThirdCircle*=-1
}

//text in canvas//

function text (){
ballBounce.clearRect(0,0, 800,150)
ballBounce.beginPath();
ballBounce.font= '50px Franklin Gothic Medium';
ballBounce.fillStyle= 'white';
var textContent = "Your Adventure Begins Here";
ballBounce.fillText(textContent, circlePositions.m, 100);
ballBounce.fill();

/*positioned text to move 
towards left using -1 
&& m to equals 800 if 
textwidth covers 
the entire left side of canvas*/
circlePositions.m-=1;
if (circlePositions.m<=-570) {
circlePositions.m=800;
};

};

text();

window.requestAnimationFrame(firstBall);



};
firstBall();


/*menu button onclick function
assigned to go to  index.html */
function gotoMenu(){
window.location.assign('/index.html');

};




