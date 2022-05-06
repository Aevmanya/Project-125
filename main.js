Nose_x= 0;
Nose_y= 0;
difference_x= 0;
left_hand_wrist_X= 0;
right_hand_wrist_X= 0;
difference_y= 0;
left_hand_wrist_Y= 0;
right_hand_wrist_Y= 0;

function setup(){
video= createCapture(VIDEO);
video.size(550, 500);
canvas= createCanvas(550, 500);
canvas.position(650, 110);
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
};

function modelLoaded(){
console.log("Model is Loaded");
};

function gotPoses(results){
if(results.length>0){
console.log(results);
Nose_x= results[0].pose.nose.x;
Nose_y= results[0].pose.nose.y;
left_hand_wrist_X= results[0].pose.leftWrist.x;
right_hand_wrist_X= results[0].pose.rightWrist.x;
difference_x= floor(left_hand_wrist_X - right_hand_wrist_X);
left_hand_wrist_Y= results[0].pose.leftWrist.y;
right_hand_wrist_Y= results[0].pose.rightWrist.y;
difference_y= floor(left_hand_wrist_X - right_hand_wrist_Y);
};
};

function draw(){
background("white");
textSize(difference_x)
text("Aevmanya", Nose_x, Nose_y)
};