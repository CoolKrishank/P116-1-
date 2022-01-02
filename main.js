noseX = 0
noseY = 0
function preload(){
mustache = loadImage("https://i.postimg.cc/KvN8hrm6/l1.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initialized');
}
function draw(){
    image(video , 0 , 0 , 300 , 300);
    image(mustache,noseX,noseY,50,40);
}
function take_snapshot(){
    save('Filterimage.png');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 23;
        noseY = results[0].pose.nose.y + 10;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}