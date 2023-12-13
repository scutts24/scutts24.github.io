var img;
var initials ='sc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://scutts24.github.io/spiderstamp.png');
}

function setup() {
createCanvas(300, 300);
background(172,179,132);
//pumpkin
translate(-50,-55);
noStroke(); fill(201, 125, 71);     
  ellipse(200,240,230,150);
fill(219, 147, 79);
  ellipse(200,230,230,150);
  rect(85,170,230,70); 
  ellipse(200,170,230,150);
fill(201, 125, 71); //orange shadow
  ellipse(200,150,80,40);
fill(120, 97, 80); //stem
  ellipse(200,150,50,30);
  ellipse(200,130,27,15);
noFill(); stroke(120, 97, 80); strokeWeight(8);
beginShape(); //left side
  curveVertex(190,126);
  curveVertex(190,126);
  curveVertex(188,136);
  curveVertex(184,142);
  curveVertex(180,147);
  curveVertex(180,147);
endShape();
beginShape(); //right side
  curveVertex(210,126);
  curveVertex(210,126);
  curveVertex(212,136);
  curveVertex(216,142);
  curveVertex(220,147);
  curveVertex(220,147);
endShape();
fill(150, 122, 101); noStroke(); 
  ellipse(200,125,27,15); //stem highlight
translate(50,55);
}

function draw() {

  
  if (keyIsPressed) {
    choice = key; 

  }
  if (mouseIsPressed){
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice) { 

 if (toolChoice == '1' ) {  //sharpie
    stroke(30); strokeWeight(8);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { //thin sharpie
    stroke(30); strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // carve line
    stroke(201, 125, 71);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') { //triangle
  fill(50); stroke(50); 
  strokeWeight(8); strokeJoin(ROUND);
    triangle(mouseX-20, mouseY+20, mouseX, mouseY-15, mouseX+20, mouseY+20);
  
  } else if (toolChoice == '5') { //circle
    fill(50); stroke(50); 
  strokeWeight(8); strokeJoin(ROUND);
    ellipse(mouseX, mouseY, 40, 40);
    
  } else if (toolChoice == '6') { //square
    fill(50); stroke(50); 
  strokeWeight(8); strokeJoin(ROUND);
    rect(mouseX-17.5, mouseY-17.5, 35, 35);
    
  } else if (toolChoice == '7') { //diamond
    fill(50); stroke(50); 
  strokeWeight(8); strokeJoin(ROUND);
    triangle(mouseX-10, mouseY, mouseX, mouseY-20, mouseX+10, mouseY);
    triangle(mouseX-10, mouseY, mouseX, mouseY+20, mouseX+10, mouseY);
    
  } else if (toolChoice == '8') { //star
    fill(50); stroke(50); 
  strokeWeight(8); strokeJoin(ROUND);
    triangle(mouseX-10, mouseY, mouseX, mouseY-20, mouseX+10, mouseY);
    triangle(mouseX-10, mouseY, mouseX, mouseY+20, mouseX+10, mouseY);
    triangle(mouseX, mouseY-10, mouseX+20, mouseY, mouseX, mouseY+10);
    triangle(mouseX, mouseY-10, mouseX-20, mouseY, mouseX, mouseY+10);
    
  } else if (toolChoice == '9') { //glitter glue
    stroke(229, 213, 240);
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
    
  } else if (toolChoice == '0') { //glitter
    stroke(229, 213, 240);
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
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX-25, mouseY-25, 50, 50);
        
  }

}
