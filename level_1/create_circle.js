//creates the red circle and ouputs the score

var x = 0;
var y = 45;
let btn = "";
var counter = 0;
var livesCounter = 2;

function circle(){
let bun = document.getElementById("canvas");
    btn = bun.getContext("2d");

    btn.clearRect(0, 30, 800, 550);

    btn.beginPath();
    btn.arc(x, y, 6, 0, 2 * Math.PI);
    btn.stroke();
    btn.fillStyle="red";
    btn.fill();

    if (x < 0) { window.location.replace('../index.html'); }

requestAnimationFrame(circle);

};
circle();

function myScore () {
    let scoreTxt = document.getElementById("canvas");
    btn = scoreTxt.getContext("2d");
    const elementsId = ['up', 'left', 'down', 'right'];
    const butt = elementsId.map(id => document.getElementById(id));
    let clicked = false;
    butt.forEach(butt => {
        butt.addEventListener('click', () => {
            if (!clicked)
            {
                clicked = true;
                counter++;
                drawScore();
            }
            else { clicked = false};
        });
    });
    document.addEventListener("keydown", function(event) {
        const arrowkeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];
        if (arrowkeys.includes(event.key)) {
            if (!clicked)
            {
                clicked = true;
                counter++;
                drawScore();
            }
            else { clicked = false};
        }
    });

    function drawScore () {
        btn.beginPath();
        btn.clearRect(570, 10, 100, 100)
        btn.fillStyle="white";
        btn.font = "20px monospace";
        btn.fillText(`Score: ${counter}`, 500, 30,);
        btn.fill();

        btn.beginPath();
        btn.fillStyle="white";
        btn.font = "20px monospace";
        btn.fillText('score 50 or above!!', 580, 600,);
        btn.fill();

        btn.beginPath();
        btn.fillStyle="white";
        btn.font = "25px monospace";
        btn.fillText('Level: 1', 300, 30,);
        btn.fill();

    }
    drawScore();
}
myScore();