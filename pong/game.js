var canvasBg = document.getElementById("canvas_bg");
var ctxBg = canvasBg.getContext('2d');
var canvasPaddle = document.getElementById("canvas_paddle");
var ctxPaddle = canvasPaddle.getContext('2d');
var canvasBall = document.getElementById("canvas_ball");
var ctxBall = canvasBall.getContext('2d');

gameWidth = canvasBg.width;
gameHeight = canvasBg.height;

var requestAnimFrame =  window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function(callback) {
                            window.setTimeout(callback, 1000 / 60);
                        };

var imgSprite = new Image();
imgSprite.src = 'images/imageSprite.png';
imgSprite.addEventListener('load', init, false);

var paddle = new Paddle();


function init(){
	ctxBg.clearRect(0, 0)
	drawBg();
	paddle.draw();
}

function drawBg(){
	ctxBg.drawImage(imgSprite, 0, 0, gameWidth, gameHeight, 0, 0, gameWidth, gameHeight);
}

// Paddle functions
function Paddle(){
	this.score = 0;
	this.srcX = 0;
	this.srcY = 800;
	this.width = 70;
	this.height = 80;
	this.speed = 2;
	this.drawX = 0; //max 410 px
	this.drawY = 635; // max 720 px
	this.isUpKey = false;
    this.isRightKey = false;
    this.isDownKey = false;
    this.isLeftKey = false;
}

Paddle.prototype.draw = function(){
	clearCtxPaddle();
	this.checkDirection();
	ctxPaddle.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
}

Paddle.prototype.checkDirection = function() {
	// if (this.isUpKey && this.is)
}



function clearCtxPaddle() {
    ctxPaddle.clearRect(0, 0, gameWidth, gameHeight);
}



















/* Event Functions */
function checkKeyDown(e) {
    var keyID = e.keyCode || e.which;
    if (keyID === 38 || keyID === 87) { //up arrow or W key
        paddle.isUpKey = true;
        e.preventDefault();
    }
    if (keyID === 39 || keyID === 68) { //right arrow or D key
        paddle.isRightKey = true;
        e.preventDefault();
    }
    if (keyID === 40 || keyID === 83) { //down arrow or S key
        paddle.isDownKey = true;
        e.preventDefault();
    }
    if (keyID === 37 || keyID === 65) { //left arrow or A key
        paddle.isLeftKey = true;
        e.preventDefault();
    }
    if (keyID === 32) { //spacebar
        paddle.isSpacebar = true;
        e.preventDefault();
    }
}

function checkKeyUp(e) {
    var keyID = e.keyCode || e.which;
    if (keyID === 38 || keyID === 87) { //up arrow or W key
        paddle.isUpKey = false;
        e.preventDefault();
    }
    if (keyID === 39 || keyID === 68) { //right arrow or D key
        paddle.isRightKey = false;
        e.preventDefault();
    }
    if (keyID === 40 || keyID === 83) { //down arrow or S key
        paddle.isDownKey = false;
        e.preventDefault();
    }
    if (keyID === 37 || keyID === 65) { //left arrow or A key
        paddle.isLeftKey = false;
        e.preventDefault();
    }
    if (keyID === 32) { //spacebar
        paddle.isSpacebar = false;
        e.preventDefault();
    }
}

// end of event functions