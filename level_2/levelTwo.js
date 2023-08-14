var x=0;
var y=5;

function ctx() {
let element = document.getElementById("two");
let context = element.getContext("2d");
  
context.clearRect(0, 0, 700, 500);
 
context.beginPath();
context.rect(x, y, 20, 20);
context.stroke();
context.fillStyle="green";
context.fill();

x += 1;
if (x >= 700)
{
    x = -100;
}
window.requestAnimationFrame(ctx);

}
ctx();

function ball() {
    
}



/*menu button onclick function
assigned to go to  index.html */
function gotoMenu(){
window.location.assign('../index.html');
};




