function preload(){

}

function setup(){
    canvas = createCanvas(1000,600);
    canvas.position(300,100)
    video = createCapture(VIDEO);
    video.hide()
    video.position(600,310)
    video.size(300,200)
}

function draw(){
background(255);
noStroke();
fill(255,0,0);
circle(190,150,130);
circle(190,477,130);
circle(710,150,130);
circle(710,477,130);

fill(0,255,0)
rect(690,213,40,200);
rect(170,213,40,200);
rect(252,130,395,40);
rect(252,460,395,40);

image(video, 330, 220, 250, 200);
}

function take_snapshot(){
    save('photo.png');
}

