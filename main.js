function preload(){
  age = loadImage('https://i.postimg.cc/XvPxrYXw/unnamed.png');
}

MouthX = 0;
MouthY = 0;

function setup(){
    Canvas = createCanvas(300 , 300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , loaded);
    poseNet.on('pose' , results_fetched);
}

function loaded(){
    console.log("Model Loaded")
}

function results_fetched(boing){
    if(boing.length>0){
        console.log(boing);
        MouthX = boing[0].pose.nose.x-23;
        MouthY = boing[0].pose.nose.y-9;
    }
}

function draw(){
    image(video , 0,0,300,300);

    image(age, MouthX , MouthY, 50,50);
}

function Pic(){
    
    save('Mustache.png')
}