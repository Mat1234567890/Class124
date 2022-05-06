noseX = 0;
noseY = 0;
LeftWristX = 0;
RightWristX = 0;
difference = 0;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(300,300);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);''
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if (results.length > 0){
console.log(results)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("NoseX = " + noseX + " NoseY = " + noseY);
RightWristX = results[0].pose.rightWrist.x;
LeftWristX = results[0].pose.leftWrist.x;
console.log("Right Wrist X = " + RightWristX + " Left Wrist X = " + LeftWristX);
difference = floor(LeftWristX-RightWristX);
console.log("Difference: " + difference);
}
}
function modelLoaded(){
console.log("Model Loaded!");
}
function draw(){
background("#3C6FFF");
document.getElementById("square_side").innerHTML = "Width and Height of the square will be: " + difference + " px";
fill("#628BFF");
stroke("#3166FA");
square(noseX,noseY,difference);
}