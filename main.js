function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw() {
    image(video, 50, 50, 530, 375);
    fill('red');
    stroke('red');
    circle(50, 50, 50);
    fill('red');
    stroke('red');
    circle(590, 50, 50);
    fill('red');
    stroke('red');
    circle(50, 430, 50);
    fill('red');
    stroke('red');
    circle(590, 430, 50);
    fill('blue');
    stroke('blue');
    rect(75, 40, 490, 20);
    fill('blue');
    stroke('blue');
    rect(75, 420, 490, 20);
    fill('blue');
    stroke('blue');
    rect(40, 75, 20, 330);
    fill('blue');
    stroke('blue');
    rect(580, 75, 20, 330);
    
}

function take_snapshot(){
    save('student_name.png');
}
