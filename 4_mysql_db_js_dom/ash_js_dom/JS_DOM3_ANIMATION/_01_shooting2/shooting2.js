function init() {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  movePlayer();
}

function drawPlayer() {
  ctx.beginPath();

  ctx.rect(player["x"], player["y"], player["size"], player["size"]);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.closePath();
}

function keyDownHandler(e) {
  // 아스키코드 값
  // 68 ==> d
  // 65 ==> a
  // 87 ==> w
  // 83 ==> s
  if (e.keyCode == 68) {
    // d
    key["right"] = true;
  } else if (e.keyCode == 65) {
    // a
    key["left"] = true;
  } else if (e.keyCode == 87) {
    // w
    key["up"] = true;
  } else if (e.keyCode == 83) {
    // s
    key["down"] = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 68) {
    key["right"] = false;
  } else if (e.keyCode == 65) {
    key["left"] = false;
  } else if (e.keyCode == 87) {
    key["up"] = false;
  } else if (e.keyCode == 83) {
    key["down"] = false;
  }
}

function movePlayer() {
  if (key["right"]) {
    player["x"] += player["speed"];
  }
  if (key["left"]) {
    player["x"] -= player["speed"];
  }
  if (key["up"]) {
    player["y"] -= player["speed"];
  }
  if (key["down"]) {
    player["y"] += player["speed"];
  }
}

//-------------------------------------------------
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var key = { right: false, left: false, up: false, down: false };
var player = { x: 0, y: 0, size: 50, speed: 2 };
init();
setInterval(draw, 10);
