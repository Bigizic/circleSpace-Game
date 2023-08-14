var x=0;
var y=45;
let btn="";
let levelCount= 1;

function circle(){
let bun=document.getElementById("canvas");
btn= bun.getContext("2d");

btn.beginPath();
btn.arc(x,y,6,0, 2 * Math.PI);
btn.stroke();
btn.fillStyle="red";
btn.fill();

requestAnimationFrame(circle);

};
circle();


function checkPositions(x,y){

if(x===21&&y===20){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===21&&y===70) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===42&&y===20) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===42&&y===70) {
 alert(`Game Over`);
window.location.replace('../index.html');
}

else if (x===63&&y===20) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===63&&y===70) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===63&&y===95) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===63&&y===120) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===63&&y===145) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===63&&y===170) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===84&&y===195) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===84&&y===20) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===105&&y===45) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===105&&y===70) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===105&&y===95) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===105&&y===120) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===105&&y===145) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===105&&y===195) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===126&&y===145) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===126&&y===195) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===147&&y===145) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===147&&y===195) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===168&&y===145) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===168&&y===195) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===168&&y===220){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===168&&y===245){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===168&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===168&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===189&&y===145) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===189&&y===320) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if (x===210&&y===170) {
 alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===210&&y===195){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===210&&y===220){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===210&&y===245){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===210&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===210&&y===295){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===126&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===126&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===105&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===105&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===84&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===84&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===42&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===42&&y===595){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===295){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===370){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===420){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===470){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===520){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===545){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===21&&y===570){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===370){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===420){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===470){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===520){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===545){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===63&&y===595){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===84&&y===545){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===84&&y===595){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===105&&y===545){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===105&&y===595){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===126&&y===545){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===126&&y===595){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===420){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===470){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===520){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===545){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===147&&y===595){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===168&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===168&&y===595){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===189&&y===570){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===189&&y===545){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===189&&y===520){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===189&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===189&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===210&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===210&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===231&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===231&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===252&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===252&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===273&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===273&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===294&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===294&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===315&&y===495){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===315&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===336&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===336&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===357&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===357&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===378&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===378&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===399&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===399&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===420&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===420&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===441&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===441&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===462&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===462&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===483&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===483&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===483&&y===370){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===483&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===483&&y===320){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===504&&y===445){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===504&&y===295){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===525&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===525&&y===295){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===525&&y===420){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===525&&y===395){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===525&&y===370){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===525&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===546&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===546&&y===295){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===567&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===567&&y===295){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===567&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===567&&y===245){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===588&&y===345){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===588&&y===220){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===609&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===609&&y===220){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===609&&y===195){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===609&&y===170){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===630&&y===195){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===630&&y===145){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===651&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===651&&y===145){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===672&&y===145){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===672&&y===270){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===693&&y===145){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===693&&y===195){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===714&&y===145){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===714&&y===195){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===735&&y===195){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===735&&y===145){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===735&&y===120){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===735&&y===95){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===735&&y===70){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===735&&y===45){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===756&&y===195){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===756&&y===20){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===777&&y===170){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===777&&y===145){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===777&&y===120){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===777&&y===95){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===777&&y===70){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===777&&y===20){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===798&&y===20){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===798&&y===70){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===819&&y===20){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===819&&y===70){
alert(`Game Over`);
window.location.replace('../index.html');
}
else if(x===819&&y==45){
window.location.replace('../level_2/levelTwo.html')
}
};


function runRight(){
if(y){
x+=21;
}
checkPositions(x,y);
};

function runDown(){
if (x){
y+=25;
}
checkPositions(x,y);
};

function runLeft(){
if(y){
x-=21;
}
checkPositions(x,y);
};

function runUp(){
if (x) {
y-=25;
}
checkPositions(x,y);
};



window.onload= function (){
let paper=document.getElementById("canvas");
let paperTwo=paper.getContext("2d");

paperTwo.beginPath();
paperTwo.rect(0,10, 20,20);
paperTwo.strokeStyle="white"
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,60, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(25,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(25,60, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,60, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(75,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,35, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,60, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,85, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,110, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,85, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,110, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,160, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(75,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(175,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,160, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,210, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,235, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,210, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,235, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(75,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill(); 

paperTwo.beginPath();
paperTwo.rect(50,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(25,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,285, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,335, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,360, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,410, 20,20);
paperTwo.stroke();
//Made by Isaac Ajibola O //
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,460, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,510, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,535, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,560, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(0,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(25,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(75,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(175,585, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill(); 

paperTwo.beginPath();
paperTwo.rect(175,560, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill(); 

paperTwo.beginPath();
paperTwo.rect(175,535, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill(); 

paperTwo.beginPath();
paperTwo.rect(175,510, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill(); 

paperTwo.beginPath();
paperTwo.rect(175,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill(); 

paperTwo.beginPath();
paperTwo.rect(200,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(225,485, 20,20);
paperTwo.stroke();
//Made by Ajibola isaac O//
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(250,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(275,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(300,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(325,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(325,460, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(325,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(350,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(375,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(400,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(425,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(450,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(475,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(500,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(525,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(525,410, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(525,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(525,360, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(525,335, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(550,335, 20,20);
paperTwo.stroke();
//Made by Isaac Ajibola o//
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(575,335, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(600,335, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(600,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(600,285, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(600,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(625,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(650,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(675,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(675,235, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(675,210, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(675,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(700,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(725,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(750,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(775,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(775,160, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(775,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(775,110, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(775,85, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(775,60, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(800,60, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();



paperTwo.beginPath();
paperTwo.rect(200,285, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(175,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(75,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,335, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,360, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,410, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,460, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,510, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(50,535, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(75,535, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(100,535, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,535, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,510, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,485, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,460, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,410, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(125,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(150,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(175,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(200,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(225,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(225,410, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(225,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(250,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(275,435, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(275,410, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(275,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(300,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(325,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(350,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(375,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(400,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(425,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(450,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(475,385, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(475,360, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(475,335, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(475,310, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(475,285, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(500,285, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(525,285, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(550,285, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(550,260, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(550,235, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(550,210, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(575,210, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(600,210, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(625,210, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(625,185, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(625,160, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(625,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(650,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(675,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(700,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(725,135, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(725,110, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(725,85, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(725,60, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(725,35, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(725,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(750,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(775,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.rect(800,10, 20,20);
paperTwo.stroke();
paperTwo.fillStyle="#097976";
paperTwo.fill();

paperTwo.beginPath();
paperTwo.fillStyle="white";
paperTwo.font = "30px monospace";
paperTwo.fillText(`Level: ${levelCount} `, 350, 25,);
paperTwo.fill();
};

function menu(){
window.location.replace('../index.html');

}