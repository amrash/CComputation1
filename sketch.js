//multiscreen connection
//VISUALIZATION 
//need to figure out what can change screen to screen
//INput mic
var song;
//var slider;
//var slaider has been commented out for now but sliderPan may be needed later on
var button;
//var jumpButton;





function setup(){
    createCanvas(400,400);
    song = loadSound("sound.mp3",loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    //jumpButton = createButton("jump");
    //jumpButton.mousePressed(jumpSong);
    //slider = createSlider(0,1,0,0.01); 
    //initial slider made to control volume of the song played
    //song.setVolume(0.5);
    //sliderRate = createSlider(0,3,1,0.01);
    //sliderPan = createSlider(0,1,0.5,0.01);
    background(51);
    //edited out for now to see if I can effect any background change using draw fucntion
    
    song.addCue(2, changeBackground, color(50,0,225));
    song.addCue(4, changeBackground, color(0,225,225));
    song.addCue(6, changeBackground, color(225,0,225));
    song.addCue(8, changeBackground, color(125,0,225));
    song.addCue(10, changeBackground, color(75,75,225));
    song.addCue(12, changeBackground, color(25,125,225));
    song.addCue(14, changeBackground, color(225,0,225));
    song.addCue(16, changeBackground, color(0,0,225));
    song.addCue(2, changeBackground, color(0,0,225));
    song.addCue(2, changeBackground, color(0,0,225));
    song.addCue(2, changeBackground, color(0,0,225));
    song.addCue(2, changeBackground, color(0,0,225));
    //12 background cues for now, need to change this to mic input

    


}

function loaded (){
	console.log("loaded");
	//this fixed the song loading error
}
//function jumpSong(){
	//var len = song.duration();
	//song.jump(20);
//}



function togglePlaying(){
	if(!song.isPlaying()){
		song.play();
		song.setVolume(0.5);
		button.html("pause");
	} else{
		song.pause();
		button.html("play");
	}
	
    //song.play()
    //song.setVolume(0.5);

}
function changeBackground(col){
	background(col);
}


//function loaded(){
    //song.play();
//playing song through call back method instead of preload method to get rid of "loading..." on the browser
//}

function draw(){
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