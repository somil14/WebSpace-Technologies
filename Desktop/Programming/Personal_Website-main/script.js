const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// handle mouse

const mouse = {
    x: null,
    u: null,
    radius: 150
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log("Mouse X is at " + event.x + " and Mouse Y is at " + event.y);
});

ctx.fillStyle = "white";
ctx.font = '90px Verdana';
ctx.fillText('SOMIL', 50, 60);
ctx.strokeStyle = 'white';
ctx.strokeRect(0, 0, 100, 100);
const data = ctx.getImageData(0, 0, 100, 100).data;

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x + 100;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y
        this.desnsity = (Math.random() * 30) + 1;
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init() {
    particleArray = [];
    particleArray.push(new Particle(50, 50));
}

init();
console.log(particleArray);
