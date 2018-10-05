
var button;
var mic;
var col;

 var volhistory =[];
 backstep = 30;
 circles = 5;
 multiplier = 10000;



function setup(){
    var canv = createCanvas(windowWidth,windowHeight);
    canv.position(0,0);

    calibrateWindow();
    
    mic = new p5.AudioIn();
    mic.start();

    


}



function calibrateWindow() {
    shapePositionX = windowWidth/2;
    shapePositionY = windowHeight/2;
    shapeWidth = windowWidth/6;
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  calibrateWindow();
}

function draw(){
  background(250);
  var vol = mic.getLevel();
    console.log(vol);
    volhistory.push(vol);
    var brighter = 25;
    
  for (i=0;i<(circles);i++) {
     if (volhistory.length > backstep * i ) {
        push();
        noStroke();
            fill(random(100)+i*brighter,random(100)+i*brighter,random(100)+i*brighter);
            ellipse(shapePositionX,shapePositionY,shapeWidth, volhistory[backstep * i] * multiplier);
        pop();

     }
}
    
  noFill();
  push();
  var currentY = map(vol, 0, 1, height, 0);
  translate(0, height / 2 - currentY);
  stroke(60);
  strokeWeight(2);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
    line(i,y,i,windowHeight);
  }
  endShape();
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  stroke(255, 0, 0);
  line(volhistory.length, 0, volhistory.length, height);


}