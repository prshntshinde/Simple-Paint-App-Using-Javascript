// Defined Global Variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

function drawTriangle(params) {
  //   if (canvas.getContext) {
  //     canvas.addEventListener("mousedown", function (e) {
  //       var x,
  //         y = getMousePosition(canvas, e);
  //       ctx.beginPath();
  //       ctx.moveTo(x, y);
  //       ctx.lineTo(x + 50, y + 50);
  //       ctx.lineTo(100, 25);
  //       ctx.closePath();
  //       ctx.stroke();
  //     });
  //getMousePosition(canvas, e);
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.closePath();
  ctx.stroke();
}

function resetCanvas(params) {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.reset();
  }
}

function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  X = evt.clientX - rect.left;
  Y = evt.clientY - rect.top;
  //   console.log("X: " + X + "  Y: " + Y);
  return { X: X, Y: Y };
}

function drawCircle() {
  ctx.beginPath();
  //   let radius = Math.sqrt(startX * startX + startY * startY);
  let radius = Math.abs(endX - startX);
  ctx.arc(startX, startY, radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();
}

canvas.addEventListener("mousedown", function (evt) {
  var rect = canvas.getBoundingClientRect();
  startX = evt.clientX - rect.left;
  startY = evt.clientY - rect.top;
  console.log(startX + "  " + startY);
});

canvas.addEventListener("mouseup", function (evt) {
  var rect = canvas.getBoundingClientRect();
  endX = evt.clientX - rect.left;
  endY = evt.clientY - rect.top;
  console.log(endX + "  " + endY);
  drawCircle();
});
