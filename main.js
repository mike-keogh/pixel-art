var c = document.querySelector('canvas');
var cx = c.getContext('2d');
var mouseDown = false;
var btn = document.getElementById('btn');

btn.addEventListener('click', setupCanvas)

c.addEventListener('mousedown', onMouseDown, false)
c.addEventListener('mouseup', onMouseUp, false)
c.addEventListener('mousemove', onMouseMove, false)

var r = document.getElementById('red');
var g = document.getElementById('green');
var b = document.getElementById('blue');
var yel = document.getElementById('yellow');


b.addEventListener('click', changeColorBlue);
r.addEventListener('click', changeColorRed);
g.addEventListener('click', changeColorGreen);
yel.addEventListener('click', changeColorYellow);



function setupCanvas() {
  c.height = 500;
  c.width = 1276;
  cx.lineWidth = 10;
  cx.lineCap = 'square';
  cx.strokeStyle = '#68C0CE';
}

function onMouseDown(evt) {
  mouseDown = true;
  evt.preventDefault();
}

function onMouseUp(evt) {
  mouseDown = false;
  evt.preventDefault();
}

function onMouseMove(evt) {
  var x = evt.clientX;
  var y = evt.clientY;
    if(mouseDown) {
      paint(x, y);
    }
}

function paint(x, y) {
  cx.beginPath();
  cx.moveTo(x, y);
  cx.lineTo(x, y);
  cx.stroke();
  cx.closePath();
}

function changeColorRed() {
  cx.strokeStyle = '#EA8776';
}

function changeColorBlue() {
  cx.strokeStyle = '#68C0CE'
}

function changeColorGreen() {
  cx.strokeStyle = 'salmon'
}

function changeColorYellow() {
  cx.strokeStyle = '#F0A95D'
}
setupCanvas();
