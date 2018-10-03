var song;
//var slider;
//var slaider has been commented out for now but sliderPan may be needed later on
var button;



function setup(){
    createCanvas(400,400);
    song = loadSound("sound.mp3",loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    //slider = createSlider(0,1,0,0.01); 
    //initial slider made to control volume of the song played
    //song.setVolume(0.5);
    //sliderRate = createSlider(0,3,1,0.01);
    //sliderPan = createSlider(0,1,0.5,0.01);
    background(51);

}
function loaded (){
	console.log("loaded");
}

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
//function loaded(){
    //song.play();
//playing song through call back method instead of preload method to get rid of "loading..." on the browser
//}

function draw(){
    //background(random(225));
    //line(0,0,200,200);
    //line(200,0,0,200);
    //strokeWeight(18);
    //song.setVolume(slider.value());
    //song.pan(sliderPan.value());
    //song.Rate(sliderRate.value());
}