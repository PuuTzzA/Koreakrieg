let waves_tl = gsap.timeline({ repeat: -1, yoyo: true });
waves_tl
    .to(".waves_1", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -3) + "rem", ease: "sine.inOut" })
    .to(".waves_2", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -12) + "rem", ease: "sine.inOut" }, "-=4");

/////////////////////////////////////////////////////////////////////////////////////
//Canvas

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var hiddenCanvas = document.getElementById("hidden-canvas");
var hiddenContext = hiddenCanvas.getContext("2d");

const imgText = document.getElementById("text");
const imgTextStroke = document.getElementById("text-stroke");
const imgMap = document.getElementById("map");
const imgMask = document.getElementById("mask");

const imgContent = document.getElementById("content-container");
const imgWaves = document.getElementById("waves-container");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
hiddenCanvas.width = window.innerWidth;
hiddenCanvas.height = window.innerHeight;

let imgSizeX;
let imgSizeY;

if (set_by_width) {
    imgSizeX = height * 1.1 * 16 / 9;
    imgSizeY = height * 1.1;
} else {
    imgSizeX = width * 1.1;
    imgSizeY = width *1.1 * 9 / 16;
}

var mouse = {
    x: 0,
    y: 0,
}

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x - window.innerWidth/2;
    mouse.y = e.y - window.innerHeight/2;
})

window.addEventListener("resize", function (e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    hiddenCanvas.width = window.innerWidth;
    hiddenCanvas.height = window.innerHeight;
})

let text = {
    x: 0,
    y: 0,
    factor: 0.15,
}

let content = {
    x: 0,
    y: 0,
    factor: 0.065,
}

let map = {
    x: 0,
    y: 0,
    factor: 0.045,
}

let waves = {
    x: 0,
    y: 0,
    factor: 0.025,
}

let animatables = [];
animatables.push(content);
animatables.push(waves);
animatables.push(map);
animatables.push(text);

function inertia() {
    this.sollX = mouse.x;
    this.sollY = mouse.y; 
    this.chaseX = 0; // this is the chasing value representing the displayed control
    this.chaseY = 0;
    this.deltaChaseX = 0; // this is the change in chase per frame
    this.deltaChaseY = 0;
    const drag = 0.49; // this is the friction or drag
    const acceleration = 0.13; // this is how quickly the display responds

    this.update = function(){
        this.sollX = mouse.x;
        this.sollY = mouse.y;

        this.deltaChaseX += (this.sollX - this.chaseX) * acceleration;
        this.deltaChaseX *= drag;
        this.chaseX += this.deltaChaseX;
     
        this.deltaChaseY += (this.sollY - this.chaseY) * acceleration;
        this.deltaChaseY *= drag;
        this.chaseY += this.deltaChaseY;
    }
}

var chaser = new inertia();

function drawImgs(){
    hiddenContext.save();
    hiddenContext.clearRect(0, 0, canvas.width, canvas.height);

    hiddenContext.globalAlpha = 0.5;

    hiddenContext.drawImage(imgMask, (innerWidth-imgSizeX)/2 + map.x, (innerHeight-imgSizeY)/2 + map.y, imgSizeX,  imgSizeY)
    hiddenContext.globalCompositeOperation = "source-out";
    hiddenContext.drawImage(imgTextStroke, (innerWidth-imgSizeX)/2 + text.x, (innerHeight-imgSizeY)/2 + text.y, imgSizeX,  imgSizeY)
    hiddenContext.restore();

    context.clearRect(0, 0, innerWidth, innerHeight);

    context.drawImage(imgMap, (innerWidth-imgSizeX)/2 + map.x, (innerHeight-imgSizeY)/2 + map.y, imgSizeX,  imgSizeY)
    context.drawImage(hiddenCanvas, 0, 0)

    hiddenContext.save();
    hiddenContext.clearRect(0, 0, canvas.width, canvas.height);

    hiddenContext.globalAlpha = 0.85;

    hiddenContext.drawImage(imgText, (innerWidth-imgSizeX)/2 + text.x, (innerHeight-imgSizeY)/2 + text.y, imgSizeX,  imgSizeY)
    hiddenContext.globalCompositeOperation = "source-in";
    hiddenContext.drawImage(imgMask, (innerWidth-imgSizeX)/2 + map.x, (innerHeight-imgSizeY)/2 +map.y, imgSizeX,  imgSizeY)
    hiddenContext.restore();

    context.drawImage(hiddenCanvas, 0, 0)
}

function animate() {
    window.requestAnimationFrame(animate);

    context.clearRect(0, 0, innerWidth, innerHeight);

    chaser.update();

    animatables.forEach((element) => {
        element.x = chaser.chaseX * element.factor;
        element.y = chaser.chaseY * element.factor;
    })

    drawImgs();

    imgWaves.style.transform = "translate(" + String(waves.x) + "px," + String(waves.y) + "px)";
    imgContent.style.transform = "translate(" + String(content.x) + "px," + String(content.y) + "px)";

    context.beginPath();
    context.arc(chaser.chaseX + window.innerWidth/2, chaser.chaseY + window.innerHeight/2, 28, 0, Math.PI * 2, false);
    context.strokeStyle = "white";
    context.stroke();
}

animate()