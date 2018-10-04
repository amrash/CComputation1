//multiscreen connection
//VISUALIZATION 
//need to figure out what can change screen to screen
//INput mic
//unknown canvas size for mobile devices
//var song;
//var slider;
//var slaider has been commented out for now but sliderPan may be needed later on
var button;
//var jumpButton;
//var amp;
var mic;
var col;
//audioOutfunction setup() {
 var volhistory =[];
 backstep = 30;
 circles = 5;
 multiplier = 10000;



function setup(){
    var canv = createCanvas(windowWidth,windowHeight);
    canv.position(0,0);

    calibrateWindow();
    //song = loadSound("sound.mp3",loaded);
    //amp = new p5.Amplitude();
    //button = createButton("play");
    //button.mousePressed(togglePlaying);
    //jumpButton = createButton("jump");
    //jumpButton.mousePressed(jumpSong);
    //slider = createSlider(0,1,0,0.01); 
    //initial slider made to control volume of the song played
    //song.setVolume(0.5);
    //sliderRate = createSlider(0,3,1,0.01);
    //sliderPan = createSlider(0,1,0.5,0.01);
    //background(51);
    mic = new p5.AudioIn();
    mic.start();

    //edited out for now to see if I can effect any background change using draw fucntion
    
    //song.addCue(2, changeBackground, color(50,0,225));
    //song.addCue(4, changeBackground, color(0,225,225));
    //song.addCue(6, changeBackground, color(225,0,225));
    //song.addCue(8, changeBackground, color(125,0,225));
    //song.addCue(10, changeBackground, color(75,75,225));
    //song.addCue(12, changeBackground, color(25,125,225));
    //song.addCue(14, changeBackground, color(225,0,225));
    //song.addCue(16, changeBackground, color(0,0,225));
    //song.addCue(2, changeBackground, color(0,0,225));
    //song.addCue(2, changeBackground, color(0,0,225));
    //song.addCue(2, changeBackground, color(0,0,225));
    //song.addCue(2, changeBackground, color(0,0,225));
    //12 background cues for now, need to change this to mic input
    //****NOT WORKING***

    


}



//function loaded (){
	//console.log("loaded");
	//button = createButton("play");
    //button.mousePressed(togglePlaying);
	//this fixed the song loading error
//}
//all things to do with loading song are now out because we are loading through mic
//function jumpSong(){
	//var len = song.duration();
	//song.jump(20);
//}



//function togglePlaying(){
	//if(!song.isPlaying()){
		//song.play();
		//song.setVolume(1);
		//button.html("pause");
	//} else{
		//song.pause();
		//button.html("play");
	//}
	
    //song.play()
    //song.setVolume(0.5);

//}
//function changeBackground(col){
	//background(col);
//}


//function loaded(){
    //song.play();
//playing song through call back method instead of preload method to get rid of "loading..." on the browser
//}

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
            fill(100+i*brighter,50+i*brighter,100+i*brighter);
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


	//var vol = amp.getLevel();
	//var diam = map(vol,0,1,20,300);
	//fill(255,0,255);
	//ellipse(width/2,height/2,diam,diam);
	//if (song.currentTime() > 10);{
		//background(song.currentTime()*10,0,255);//}
//background(random(225));
    //this is the animated back ground
    //line(0,0,200,200);
    //line(200,0,0,200);
    //strokeWeight(18);
    //song.setVolume(slider.value());
    //song.pan(sliderPan.value());
    //song.Rate(sliderRate.value());

}