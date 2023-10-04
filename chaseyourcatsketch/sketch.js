var ballx = 100;
var bally = 100;
var ballsize = 60;
var score = 0;
var gameState = "start";

function preload() {
  startbg = loadImage('https://scutts24.github.io/introcat.png');
  lvl1bg = loadImage('https://scutts24.github.io/level1bg.png');
  lvl2bg = loadImage('https://scutts24.github.io/level2bg.png');
  lvl3bg = loadImage('https://scutts24.github.io/level3bg.png');
  img1 = loadImage('https://scutts24.github.io/sittingcat.png');
  img2 = loadImage('https://scutts24.github.io/screamingcat.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
} //end setup

function draw() {
  if(gameState == "start"){
  background(startbg);
  startGame(); 
  }
  if(gameState == "L1"){
    background(50); 
  levelOne(); 
  }
  if(gameState == "L2"){
    background(100); 
    levelTwo(); 
  }
  if(gameState == "L3"){
    background(100); 
    levelThree(); 
  }
  if(gameState == "end"){
    background(250,160,70);
    endGame();
  }
} //end draw

function startGame(){
  stroke('rgba(156,39,176,0.5)');
  strokeWeight(5);
  fill(255, 255, 255);
  textSize(20);
  
  text("chase your cat through the backrooms to take it to the vet", width/2, height-570);
  text("[click anywhere on screen to start]", width/2, height-20);
 
  textSize(10);
  text("your devious little furgremlin has managed to evade the dreaded catcarrier and escaped the house right before their vet checkup!", width/2, height-530);
  text("what's worse, they somehow managed to no-clip out of reality! do not let your precious bean be consumed by the unspeakable", width/2, height-510);
  text("horrors that undoubtedly await them in the backrooms! catch them before anything else does!", width/2, height-490);
  text("if you can no longer see the cat, this is because they are trying to no-clip out of the room again and are hiding on the edges of", width/2, height-470);
  text("your vision. simply rumage around the area to startle the cat back into your current plane of existance and continue to give chase.", width/2, height-450);
  text("remember: they can't run forever! you will prevail eventually...", width/2, height-50);
  
  textSize(20);
  if (mouseIsPressed === true){
    gameState = "L1";}
} // end of game start

function levelOne(){
  background(lvl1bg);
  text("room 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballsize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
 gameState= "L2";
  } //change level
  
  image(img1, ballx, bally, ballsize, ballsize);
} // end level one

function levelTwo(){
  background(lvl2bg);
  text("room 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballsize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>20){
   gameState = "L3";
  } //change level
   
  image(img1, ballx, bally, ballsize, ballsize);
} // end level two

function levelThree(){
  background(lvl3bg);
  text("room 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballsize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>30){
 gameState = "end";
  }
  
  image(img2, ballx, bally, ballsize, ballsize);
} // end level three

function endGame(){
  background(startbg);
  
  textSize(20);
  text("congratulations! you have succeeded!", width/2, height-570);
  text("[reload webpage for chance to restart]", width/2, height-20);
 
  textSize(10);
  text("wow! you survived the backrooms and also managed to stumble across a means of escape!", width/2, height-530);
  text("more impressively, you also managed to catch your cat and return home in time for their vet appointment! well done!", width/2, height-510);
  
} // end of game end