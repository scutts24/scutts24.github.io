var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
 preload() //runs once, it may make you wait
  //img = loadImage('mydiyps/heartstickers.png')
//link to an image on your github account
  img = loadImage('https://scutts24.github.io/mydiyps/heartstickers.png');
  img2 = loadImage('https://scutts24.github.io/mydiyps/rippedpaper.png');
}

function setup() {
bg = loadImage(img2);
createCanvas(875, 700);  // canvas size
//background(251, 248, 243);

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  //brush pen
    stroke(28, 7, 20);
  strokeWeight(1);
  const width = 1;
  const lerps = 255;
  for (let i = 0; i <= lerps - 1; i++) {
    const x = lerp(mouseX, pmouseX, i / lerps);
    const y = lerp(mouseY, pmouseY, i / lerps);
    line(x - width, y - width, x + width, y + width);
  }

  } else if (toolChoice == '2') { //whiteout pen
    stroke(255, 255, 255);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
   
  } else if (toolChoice == '3') { //blue pen
    stroke(13, 0, 255);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '4') { //pink crayon or something idk
    stroke(255, 0, 157);
  strokeWeight(1);
  const speed = abs(1) + abs(1);
  const minRadius = 1;
  const sprayDensity = 10;
  const r = speed + minRadius;
  const rSquared = r * r;
  const lerps = 5;
  for (let i = 0; i < lerps; i++) {
    const lerpX = lerp(mouseX, pmouseX, i / lerps);
    const lerpY = lerp(mouseY, pmouseY, i / lerps);
    for (let j = 0; j < sprayDensity; j++) {
      const randX = random(-r, r);
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX);
      point(lerpX + randX, lerpY + randY);
    }
  }

  } else if (toolChoice == '5') { //big yellow crayon
    stroke(252, 202, 3);
  strokeWeight(4);
  const speed = abs(1) + abs(1);
  const minRadius = 5;
  const sprayDensity = 10;
  const r = speed + minRadius;
  const rSquared = r * r;
  const lerps = 5;
  for (let i = 0; i < lerps; i++) {
    const lerpX = lerp(mouseX, pmouseX, i / lerps);
    const lerpY = lerp(mouseY, pmouseY, i / lerps);
    for (let j = 0; j < sprayDensity; j++) {
      const randX = random(-r, r);
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX);
      point(lerpX + randX, lerpY + randY);
    }
  }
     
  } else if (key == '6') { //pink glitter
    stroke(255, 163, 187);
  strokeWeight(1);
  const speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
  const minRadius = 0.2;
  const sprayDensity = 80;
  const r = speed + minRadius;
  const rSquared = r * r;
  const lerps = 5;
  for (let i = 0; i < lerps; i++) {
    const lerpX = lerp(mouseX, pmouseX, i / lerps);
    const lerpY = lerp(mouseY, pmouseY, i / lerps);
    for (let j = 0; j < sprayDensity; j++) {
      const randX = random(-r, r);
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX);
      point(lerpX + randX, lerpY + randY);
    }
  }  
 
  } else if (toolChoice == '7') { //sprinkles mix
    //stroke(random(255), random(150), random(200), random(255)); nvm, save for later if needed tho
    const hue = (frameCount * 10) % 360;
  const hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`);
  stroke(hsbaColor);
  strokeWeight(2);
  const speed = abs(1) + abs(1);
  const minRadius = 35;
  const sprayDensity = 10;
  const r = speed + minRadius;
  const rSquared = r * r;
  const lerps = 5;
  for (let i = 0; i < lerps; i++) {
    const lerpX = lerp(mouseX, pmouseX, i / lerps);
    const lerpY = lerp(mouseY, pmouseY, i / lerps);
    for (let j = 0; j < sprayDensity; j++) {
      const randX = random(-r, r);
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX);
      point(lerpX + randX, lerpY + randY);
    }
  }
    
  } else if (toolChoice == '8') { //rainbow square outlined stickers
    const hue = (frameCount * 10) % 360;
  const hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`);
  fill(hsbaColor);
    stroke(0);
    strokeWeight(1);
    rect(mouseX, mouseY, 10, 10);
    
  } else if (toolChoice == '9') { //rainbow squares
    const hue = (frameCount * 10) % 360;
  const hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`);
  fill(hsbaColor);
    noStroke();
    rect(mouseX, mouseY, 10, 10);

  } else if (toolChoice == '0') { //rainbow jumble thing
    const hue = (frameCount * 10) % 360;
  const hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`);
  fill(hsbaColor);
    noStroke();
    rect(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == 'g' || toolChoice == 'G') { //sticker, places the image we pre-loaded
    image(img, mouseX, mouseY);
  }
 }
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
