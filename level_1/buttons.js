//sets the up, left, down, home and reset buttons

function runRight () {
    if (y) {
        x+=21;
    }
    checkPositions(x, y);
};
document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowRight') {
        runRight();
    }
});

function runDown () {
    if (x) {
        y+=25;
    }
    checkPositions(x, y);
};
document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowDown') {
        runDown();
    }
});
    
function runLeft () {
    if (y) {
        x-=21;
    }
    checkPositions(x, y);
};
document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowLeft') {
        runLeft();
    }
});
    
function runUp(){
    if (x) {
        y-=25;
    }
    checkPositions(x, y);
};
document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowUp') {
        runUp();
    }
});

function menu(){
    window.location.replace('../index.html');
    
};
document.addEventListener("keydown", function(event) {
    if (event.key === 'Escape') {
        menu();
    }
});