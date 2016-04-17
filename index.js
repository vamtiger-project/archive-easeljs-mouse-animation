/*
EselJs - Mouse Animation
*/
var canvas;
var stage;
var shape;
var centerX;
var centerY;

function ship() {
    var ship = new createjs.Bitmap("https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Images/vamtigerProjectLogoWhiteMIn.svg");

	ship.x = centerX;
	ship.y = centerY;

    ship.regX = 25;
	ship.regY = 25;

	stage.addChild(ship);

	animate(ship);
}

function animate(ship) {
	createjs.Ticker.setFPS(30);

	createjs.Ticker.on("tick", function () {
		diffX = stage.mouseX - ship.x;
		diffY = stage.mouseY - ship.y;

		ship.x += diffX/20;
		ship.y += diffY/20;

		stage.update();
	});
}

function draw() {
	ship();
}

function setStage() {
	canvas = $("#canvas1")[0];
	canvas.width = document.documentElement.offsetWidth;
	canvas.height = document.documentElement.offsetHeight;
	centerX = canvas.width / 2;
	centerY = canvas.height / 2;

	stage = new createjs.Stage(canvas);
}

$(function () {
	setStage();
	draw();
});
