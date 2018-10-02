var song;
var slider;

function preload(){
    song = loadSound("sound.mp3")
}

function setup(){
    createCanvas(200,200);
    slider = createSlider(0,1,0.5,0.01);
    song.play();
}

function draw(){
    background(0);
    song.setVolume(slider.value());
}