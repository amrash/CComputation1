var song;
var slider;



function setup(){
    createCanvas(200,200);
    song = loadSound("sound.mp3",loaded);
    slider = createSlider(0,1,0.5,0.01);
}

function loaded(){
    song.play();
//playing song through call back method instead of preload method to get rid of "loading..." on the browser
}

function draw(){
    background(0);
    song.setVolume(slider.value());
}