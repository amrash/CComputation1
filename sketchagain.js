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
//var analyzer;
//audioOut







function setup(){
    var canv = createCanvas(windowWidth,windowHeight);
    shapePositionX = windowWidth / 2;
    canv.position(0,0);
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
    
    //amp = new p5.Amplitude();
    //analyzer.setInput(mic);

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
function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
	shapePositionX = windowWidth/2;
}
function draw(){
	background(0);
	var vol = mic.getLevel();
    //var amp = amp.getLevel();
    //var rms = analyzer.getLevel;
    fill(150,50,100);
	ellipse(shapePositionX,300,200, vol*10000);
    console.log(vol);
    //rect(shapePositionX,shapePositionX/2,200,amp*9000);
    //line(shapePositionX,shapePositionX, shapePositionX*rms, shapePositionX*rms);
	
    //}



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