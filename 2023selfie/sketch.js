function setup() {
  createCanvas(600, 600);
}

//color catalogue
  //background: 172,179,132;
  //skin: 227, 193, 186; 240, 210, 204
  //blush & cat ears: 235, 185, 185
  //hair: 110, 76, 66; 128,88,77
  //eyes: 
  //white: 223,224,230; 242,243,247
  //cat: 48, 47, 46; 59, 57, 55;
  //cat eyes: 255, 146, 36; 255, 171, 36; 255, 197, 36

function draw() {
  background(172,179,132); 
  noStroke(); 
  
//shirt -----
  fill(242,243,247); rect(195,450,210,160); 
  triangle(155,460,235,490,260,430); triangle(445,460,365,490,340,430);
  
//arms -----
  fill(227, 193, 186); rect(120,570,90,80); rect(389,570,90,80);
  fill(223,224,230); ellipse(160,510,100,100); ellipse(439,510,100,100);
  rect(110,510,100,70); rect(389,510,100,70);

//neck -----
  noStroke();
  fill(223,224,230); ellipse(300,455,120,70);
  fill(227, 193, 186); rect(255,350,90,100);
  fill(240, 210, 204); ellipse(300,450,90,50); 
  
//head and hair -----
  fill(128,88,77); ellipse(300,260,290,290); //hair base
  fill(128,88,77); ellipse(300,240,230,190); //scalp reference
  fill(227, 193, 186); rect(185,240,230,110); //upper head
stroke(227, 193, 186); //hairline
beginShape();
  curveVertex(250,240);
  curveVertex(250,240);
  curveVertex(270,236);
  curveVertex(290,230);
  curveVertex(310,220);
  curveVertex(330,210);
  curveVertex(350,220);
  curveVertex(370,230);
  curveVertex(390,236);
  curveVertex(414,240);
  curveVertex(414,240);
endShape();
noStroke(); fill(240, 210, 204); ellipse(300,350,230,120); //chin
fill(235, 185, 185); ellipse(230,340,60,30); ellipse(370,340,60,30); //cheeks

//mouth -----
stroke(227, 193, 186); strokeWeight(5);
beginShape(); //left
  curveVertex(295,375);
  curveVertex(295,375);
  curveVertex(285,373);
  curveVertex(275,370);
  curveVertex(275,370);
endShape();
beginShape(); //right
  curveVertex(305,375);
  curveVertex(305,375);
  curveVertex(315,373);
  curveVertex(325,370);
  curveVertex(325,370);
endShape();

//eyebrows -----
noStroke(); fill(110, 76, 66);
  //rotate each?
  ellipse(240,260,35,25);
  ellipse(360,260,35,25);
  
//bangs -----
fill(128,88,77); stroke(128,88,77);
beginShape();
  curveVertex(190,200); //left end point
  curveVertex(190,200);
  curveVertex(180,240);
  curveVertex(180,270);
  curveVertex(225,270);
  curveVertex(255,260);
  curveVertex(280,247);
  curveVertex(330,220); //part
  curveVertex(380,246);
  curveVertex(400,256);
  curveVertex(420,260);
  curveVertex(420,240);
  curveVertex(410,200);
  curveVertex(410,200); //right end point
endShape();
  
//bottom lashes -----
stroke(110, 76, 66); strokeWeight(6); noFill();
beginShape(); //left lower lash
  curveVertex(218,327);
  curveVertex(218,327);
  curveVertex(220,326);
  curveVertex(220,326);
endShape();
beginShape(); //left upper lash
  curveVertex(212,297);
  curveVertex(212,297);
  curveVertex(220,300);
  curveVertex(220,300);
endShape();
beginShape(); //right lower lash
  curveVertex(380,326);
  curveVertex(380,326);
  curveVertex(382,327);
  curveVertex(382,327);
endShape();
beginShape(); //right upper lash
  curveVertex(388,297);
  curveVertex(388,297);
  curveVertex(375,300);
  curveVertex(375,300);
endShape();
  
//eyes -----
noStroke();
  fill(242,243,247); ellipse(240,310,50,50); ellipse(360,310,50,50); //whites
  fill(110, 140, 143); ellipse(243,313,36,36); ellipse(363,313,36,36); //irises
  fill(122, 155, 158); ellipse(243,319,24,20); ellipse(363,319,24,20); //accents
  fill(85, 112, 115); ellipse(243,313,18,18); ellipse(363,313,18,18); //pupils
  fill(242, 243, 247, 100); ellipse(255,305,17,10,1); ellipse(375,305,17,10,1); 
  
//top lashes -----
stroke(110, 76, 66); strokeWeight(6); noFill();
beginShape(); //left lash
  curveVertex(263,290); //right end
  curveVertex(263,290);
  curveVertex(250,287);
  curveVertex(230,288);
  curveVertex(215,291.5); //left end
  curveVertex(215,291.5);
endShape();
beginShape(); //thicken left lash
  curveVertex(263,294); //right end
  curveVertex(263,294);
  curveVertex(250,291);
  curveVertex(230,292);
  curveVertex(215,295.5); //left end
  curveVertex(215,295.5);
endShape();
beginShape(); //right lash
  curveVertex(337,290); //left end
  curveVertex(337,290);
  curveVertex(350,287);
  curveVertex(370,288); 
  curveVertex(385,291.5); //right end 
  curveVertex(385,291.5);
endShape();
beginShape(); //thicken right lash
  curveVertex(337,294); //left end
  curveVertex(337,294);
  curveVertex(350,291);
  curveVertex(370,292); 
  curveVertex(385,295.5); //right end 
  curveVertex(385,295.5);
endShape();
  
//--------------------------------------
scale(1.9); translate(-80,-100) //fix size and location
  
//hand on head -----
  noStroke(); fill(240, 210, 204); ellipse(330,280,60,40);
  
//torso -----
  fill(48, 47, 46); rect(263,385,122,40,5); //back legs
  ellipse(293,390,60,60); ellipse(355,390,60,60);
  fill(59, 57, 55); rect(275,350,90,100,5); //main torso
  fill(59, 57, 55); ellipse(319,352,95,50); //shoulders
  fill(48, 47, 46); ellipse(318,348,85,35); //chest shadow
  
//ears, left then right (x1,y1,x2,y2,x3,y3)-----
  fill(59, 57, 55); stroke(59, 57, 55); strokeWeight(5); strokeJoin(ROUND);
  triangle(280,265,280,300,350,310); triangle(375,270,367.7,321.9,297,310); 
//inner ears -----
  fill(235, 185, 185); stroke(235, 185, 185); strokeWeight(5); strokeJoin(ROUND);
  triangle(285,275,285,290,300,284); triangle(368,280,365,301,350,288);
  
//head -----
  noStroke(); fill(59, 57, 55);
  ellipse(320,320,100,75);
  ellipse(303,332,80,50); //chin
  ellipse(313,348,60,20);
  fill(48, 47, 46); //nose
  rect(307,327,10,5,5);

//mouth -----
stroke(48, 47, 46); strokeWeight(3); noFill();
beginShape(); //left side
  curveVertex(308,344);
  curveVertex(308,344);
  curveVertex(311,342);
  curveVertex(312,340);
  curveVertex(312,340);
endShape();
beginShape(); //right side
  curveVertex(312,340);
  curveVertex(312,340);
  curveVertex(313,342);
  curveVertex(316,344);
  curveVertex(316,344);
endShape();
  
//bottom lashes -----
stroke(48, 47, 46); strokeWeight(3); noFill();
beginShape(); //left
  curveVertex(281,327);
  curveVertex(281,327);
  curveVertex(283,326);
  curveVertex(283,326);
endShape();
beginShape(); //right
  curveVertex(345,326);
  curveVertex(345,326);
  curveVertex(347,327);
  curveVertex(347,327);
endShape();
  
//eyes -----
  noStroke();
  fill(255, 171, 36); ellipse(291,320,20,20); ellipse(337,320,20,20); //irises
  fill(255, 197, 36); ellipse(291,324,12,10); ellipse(337,324,12,10); //accents
  fill(255, 146, 36); ellipse(291,320,10,10); ellipse(337,320,10,10); //pupils
  fill(242, 243, 247, 100); ellipse(295,321,10,5,5); ellipse(341,321,10,5,5);
  
//top eyelid/lashes -----
  noStroke(); fill(59, 57, 55); rect(275,310,76,6,5); //eyelid
noFill(); stroke(48, 47, 46); strokeWeight(3);
beginShape(); //left lash
  curveVertex(303,316); //right end
  curveVertex(303,316);
  curveVertex(301,315.5); 
  curveVertex(296,315.2);
  curveVertex(291,315.5);
  curveVertex(285,316.5);
  curveVertex(281,317.5); //left end
  curveVertex(281,317.5);
endShape();
  beginShape(); //right lash
  curveVertex(325,316); //left end
  curveVertex(325,316);
  curveVertex(330,315.5);
  curveVertex(335,315.5);
  curveVertex(340,316);
  curveVertex(345,317);
  curveVertex(347.5,318); //right end
  curveVertex(347.5,318);
endShape();
  
} //leave at end