var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cycles,cycle1,cycle2
var road,cycles1,cycles2;

function preload(){
  road = loadImage("Road.jpg")
  cycles1 = loadImage("cycle.png");
  cycles2 = loadImage("cycle.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if(gameState === 2){
  game.end();
}
}
