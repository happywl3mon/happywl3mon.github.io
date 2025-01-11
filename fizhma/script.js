// base

var canvas = document.getElementById('drawingCanvas');
var pallete = document.getElementById('picker');
var ctx = canvas.getContext('2d');

var isDrawing = false;

canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.lineWidth = 5
    }
});

canvas.addEventListener('mouseup', function() {
    isDrawing = false;
});

pallete.addEventListener('input', (event) => {
    ctx.strokeStyle = event.target.value;
});


// fizhma screamer

const video = document.getElementById('video');
const button = document.getElementById('fizhma');

button.addEventListener('click', () => {
    video.classList.toggle('hidden')
    video.setAttribute('autoplay', true)
    news.style.visibility = "hidden"
});

video.onended = function() {
    video.remove()
    news.style.visibility = "visible"
}

// popup

document.addEventListener("DOMContentLoaded", function() { 
    PopUpHide();
});

function PopUpShow() {
    var popup = document.getElementById("popup1");
    if (popup) {
        popup.style.display = "block";
    }
}

function PopUpHide() {
    var popup = document.getElementById("popup1");
    if (popup) {
        popup.style.display = "none";
    }
}
