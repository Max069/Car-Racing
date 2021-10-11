
var gameState=0;
var playerCount;

var form, game, player
var allPlayers
var car1,car2,car3,car4
var cars=[]
var myRank

function preload(){
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
  trackImg = loadImage("images/track.jpg")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);

  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  
   if(playerCount === 4){
    // gameState= 1;
     game.update(1)
   }
  
   if(gameState ===1 ){

    clear ();
    game.play()
   }


   if(gameState===2){
     game.win()
   }


}

