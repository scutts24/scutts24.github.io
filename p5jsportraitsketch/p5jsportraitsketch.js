function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(140, 140, 140);
  noStroke(); //takes out lines

  scale(1.5); //fix object size after canvas size change
  translate(-20, -30); //shift placement
//my body
  //my hair
  strokeWeight(2);
  fill(89, 62, 54);
  stroke(89, 62, 54);
beginShape(); //top left back
  curveVertex(200,70);
  curveVertex(200,70);
  curveVertex(170,73);
  curveVertex(150,78);
  curveVertex(140,82);
  curveVertex(130,88);
  curveVertex(124,92);
  curveVertex(117,98);
  curveVertex(112,104);
  curveVertex(108,110);
  curveVertex(104,116);
  curveVertex(99,126);
  curveVertex(96,134);
  curveVertex(93,148);
  curveVertex(92,156);
  curveVertex(92,166);
  curveVertex(93,174);
  curveVertex(94,182);
  curveVertex(95,188);
  curveVertex(96,196);
  curveVertex(95,206);
  curveVertex(94,210);
  curveVertex(92,223);
  curveVertex(120,220);
  curveVertex(120,120);
  curveVertex(120,120);
  curveVertex(95,156);
  curveVertex(95,156);
endShape();
  beginShape(); //top right back
  curveVertex(200,70);
  curveVertex(200,70);
  curveVertex(230,73);
  curveVertex(250,78);
  curveVertex(260,82);
  curveVertex(270,88);
  curveVertex(276,92);
  curveVertex(283,98);
  curveVertex(288,104);
  curveVertex(292,110);
  curveVertex(296,116);
  curveVertex(301,126);
  curveVertex(304,134);
  curveVertex(307,148);
  curveVertex(308,156);
  curveVertex(308,166);
  curveVertex(307,174);
  curveVertex(306,182);
  curveVertex(305,188);
  curveVertex(304,196);
  curveVertex(305,206);
  curveVertex(306,210);
  curveVertex(308,223);
  curveVertex(280,220);
  curveVertex(280,120);
  curveVertex(280,120);
  curveVertex(305,156);
  curveVertex(305,156);
endShape();
beginShape(); //bottom left back
  curveVertex(90,220);
  curveVertex(90,220);
  curveVertex(80,240);
  curveVertex(70,245);
  curveVertex(75,248);
  curveVertex(85,250);
  curveVertex(80,262);
  curveVertex(76,275);
  curveVertex(76,286);
  curveVertex(78,292);
  curveVertex(79,294);
  curveVertex(80,292);
  curveVertex(81,290);
  curveVertex(82,288);
  curveVertex(83,290);
  curveVertex(84,292);
  curveVertex(86,294);
  curveVertex(90,298);
  curveVertex(96,302);
  curveVertex(102,306);
  curveVertex(103,308);
  curveVertex(103,309);
  curveVertex(103,310);
  curveVertex(102,312);
  curveVertex(101,313);
  curveVertex(103,312);
  curveVertex(104,311);
  curveVertex(105,310);
  curveVertex(106,309);
  curveVertex(107,310);
  curveVertex(108,311);
  curveVertex(109,313);
  curveVertex(109,314);
  curveVertex(110,313);
  curveVertex(111,312);
  curveVertex(112,310);
  curveVertex(113,312);
  curveVertex(114,314);
  curveVertex(114,316);
  curveVertex(114,318);
  curveVertex(174,302);
  curveVertex(174,220);
  curveVertex(174,220);
endShape();
  beginShape(); //bottom right back
  curveVertex(310,220);
  curveVertex(310,220);
  curveVertex(320,240);
  curveVertex(330,245);
  curveVertex(325,248);
  curveVertex(315,250);
  curveVertex(320,262);
  curveVertex(324,275);
  curveVertex(324,286);
  curveVertex(322,292);
  curveVertex(321,294);
  curveVertex(320,292);
  curveVertex(319,290);
  curveVertex(318,288);
  curveVertex(317,290);
  curveVertex(316,292);
  curveVertex(314,294);
  curveVertex(310,298);
  curveVertex(304,302);
  curveVertex(298,306);
  curveVertex(297,308);
  curveVertex(297,309);
  curveVertex(297,310);
  curveVertex(298,312);
  curveVertex(299,313);
  curveVertex(297,312);
  curveVertex(296,311);
  curveVertex(295,310);
  curveVertex(294,309);
  curveVertex(293,310);
  curveVertex(292,311);
  curveVertex(291,313);
  curveVertex(291,314);
  curveVertex(290,313);
  curveVertex(289,312);
  curveVertex(288,310);
  curveVertex(287,312);
  curveVertex(286,314);
  curveVertex(286,316);
  curveVertex(286,318);
  curveVertex(226,302);
  curveVertex(226,220);
  curveVertex(226,220);
endShape();
  
  fill(110, 76, 66); //sides
  stroke(110, 76, 66);
beginShape(); //left side
  curveVertex(117.4,124);
  curveVertex(117.4,124);
  curveVertex(108,152);
  curveVertex(103,184);
  curveVertex(102,200);
  curveVertex(103,220);
  curveVertex(104,230);
  curveVertex(106,240);
  curveVertex(109,250);
  curveVertex(113,260);
  curveVertex(114,256);
  curveVertex(115,252);
  curveVertex(116,254);
  curveVertex(118,259);
  curveVertex(119,262);
  curveVertex(121,266);
  curveVertex(125,272);
  curveVertex(129,276);
  curveVertex(130,277);
  curveVertex(131,278);
  curveVertex(132,274);
  curveVertex(133,270);
  curveVertex(135,274);
  curveVertex(136.6,278);
  curveVertex(138,280);
  curveVertex(140,282);
  curveVertex(142,283);
  curveVertex(141,280);
  curveVertex(140,276);
  curveVertex(139,272);
  curveVertex(138,262);
  curveVertex(136,252);
  curveVertex(130,248);
  curveVertex(130,230);
  curveVertex(130,230);
endShape();
beginShape(); //right side
  curveVertex(282.6,124);
  curveVertex(282.6,124);
  curveVertex(292,152);
  curveVertex(297,184);
  curveVertex(298,200);
  curveVertex(297,220);
  curveVertex(296,230);
  curveVertex(294,240);
  curveVertex(291,250);
  curveVertex(287,260);
  curveVertex(286,256);
  curveVertex(285,252);
  curveVertex(284,254);
  curveVertex(282,259);
  curveVertex(281,262);
  curveVertex(279,266);
  curveVertex(275,272);
  curveVertex(271,276);
  curveVertex(270,277);
  curveVertex(269,278);
  curveVertex(268,274);
  curveVertex(267,270);
  curveVertex(265,274);
  curveVertex(263.4,278);
  curveVertex(262,280);
  curveVertex(260,282);
  curveVertex(258,283);
  curveVertex(259,280);
  curveVertex(260,276);
  curveVertex(261,272);
  curveVertex(262,262);
  curveVertex(264,252);
  curveVertex(270,248);
  curveVertex(270,230);
  curveVertex(270,230);
endShape();
  fill(110, 76, 66); //hair base
  stroke(110, 76, 66);
  ellipse(200,160,180,180);
  fill(227, 193, 186); //neck parts
  noStroke();
  rect(175,250,50,50);
  stroke(48, 46, 51);
  fill(58, 56, 61);
beginShape(); //bottom of torso
  curveVertex(91,400); //left side
  curveVertex(91,400);
  curveVertex(89,420);
  curveVertex(88,450);
  curveVertex(88,450);
  curveVertex(312,450); //right side
  curveVertex(311,420);
  curveVertex(309,400);
  curveVertex(309,400);
endShape();
beginShape(); //top of shoulders
  curveVertex(90,400); //left shoulder
  curveVertex(91,400);
  curveVertex(92,395);
  curveVertex(94,385);
  curveVertex(96,376);
  curveVertex(98,370);
  curveVertex(102,360);
  curveVertex(112,335);
  curveVertex(120,320);
  curveVertex(140,315);
  curveVertex(180,300);
  curveVertex(200,300); 
  curveVertex(220,300); //right shoulder
  curveVertex(260,315);
  curveVertex(280,320);
  curveVertex(288,335);
  curveVertex(298,360);
  curveVertex(302,370);
  curveVertex(304,376);
  curveVertex(306,385);
  curveVertex(308,395);
  curveVertex(309,400);
  curveVertex(310,400);
endShape();

//torso lines
beginShape(); //left
  curveVertex(138,350);
  curveVertex(138,350);
  curveVertex(133,370);
  curveVertex(131,390);
  curveVertex(131,400);
  curveVertex(132,410);
  curveVertex(133,420);
  curveVertex(134,430);
  curveVertex(135,440);
  curveVertex(135,440);
endShape();
beginShape(); //right
  curveVertex(262,350);
  curveVertex(262,350);
  curveVertex(267,370);
  curveVertex(269,390);
  curveVertex(269,400);
  curveVertex(268,410);
  curveVertex(267,420);
  curveVertex(266,430);
  curveVertex(265,440);
  curveVertex(265,440);
endShape();
  
//my accessories
  noFill();
  stroke(98, 96, 101);
  strokeWeight(3);
beginShape(); //shortest neckace
  curveVertex(172,302); //left end
  curveVertex(172,302); //. 
  curveVertex(184,311);
  curveVertex(200,315); //middle
  curveVertex(216,311);
  curveVertex(228,302); //right end
  curveVertex(228,302); //.
endShape();
  stroke(118, 116, 121);
  strokeWeight(3);
beginShape(); //middle neckace
  curveVertex(172,299); //left end
  curveVertex(172,299); //. 
  curveVertex(178,313);
  curveVertex(184,320);
  curveVertex(190,324);
  curveVertex(200,326); //middle links
  curveVertex(210,324);
  curveVertex(216,320);
  curveVertex(222,313);
  curveVertex(228,299); //right end
  curveVertex(228,299); //.
endShape();
  strokeWeight(2); //short necklace spikes
  line(174,310,178,308); //left
  line(180,322,187,318);
  line(184,315,183,324);
  line(197,329,203,322.5); //middle
  line(197,322.5,203,329);
  line(226,310,222,308); //right
  line(220,322,213,318);
  line(216,315,217,324);  
  strokeWeight(4); //long necklace
  stroke(138, 136, 141);
beginShape();
  curveVertex(173,299); //left end
  curveVertex(173,299); //. 
  curveVertex(170,330);
  curveVertex(179,360);
  curveVertex(200,372); //middle links
  curveVertex(221,360);
  curveVertex(230,330);
  curveVertex(227,299); //right end
  curveVertex(227,299); //.
endShape();
  strokeWeight(3); //long necklace spikes
  stroke(138, 136, 141);
  line(174,311,167,310); //left to middle
  line(174,316,166,317);
  line(174,330,166,330);
  line(175,336,167,337);
  line(178,348,170,350);
  line(180,354,173,358);
  line(188,364,184,370);
  line(192,366,190,373);
  line(226,311,233,310); //right to middle
  line(226,316,234,317);
  line(226,330,234,330);
  line(225,336,233,337);
  line(222,348,230,350);
  line(220,354,227,358);
  line(212,364,216,370);
  line(208,366,210,373);
  stroke(48, 46, 51);
  fill(58, 56, 61);
beginShape(); //turtleneck fabric
  curveVertex(176,300); //left point
  curveVertex(176,300);
  curveVertex(176,288);
  curveVertex(224,288);
  curveVertex(224,300); //right point
  curveVertex(224,300);
endShape();
beginShape();
  curveVertex(174,300); //left side
  curveVertex(174,300);
  curveVertex(173,299);
  curveVertex(176,297);
  curveVertex(224,297); //right side
  curveVertex(227,299);
  curveVertex(226,300);
  curveVertex(226,300);
endShape();
  line(175,301,225,301);
  line(175,301,171,298);
  line(225,301,229,298);
  noStroke();
  
//my head
  stroke(227, 193, 186);
  fill(227, 193, 186); //skin shadows
  beginShape(); //curvy forehead
    curveVertex(121.5,170);
    curveVertex(121.5,170);
    curveVertex(150,166);
    curveVertex(170,160);
    curveVertex(190,150);
    curveVertex(200,145);
    curveVertex(210,150);
    curveVertex(230,160);
    curveVertex(250,166);
    curveVertex(278.5,170);
    curveVertex(278.5,170);
  endShape();
  noStroke();
  rect(120,180,160,60); //upper head
  fill(240, 210, 204); //rounded chin
  ellipse(200,240,160,80); //note: x,y,width,height
  fill(235, 185, 185); //cheek rounds
  ellipse(150,235,40,20);
  ellipse(250,235,40,20);
  fill(201, 182, 177); //eyebags
  ellipse(153,219,40,25);
  ellipse(247,219,40,25);
  //my eyes
  fill(242, 243, 247); //whites of eyes, left then right
  ellipse(150,200,51,52);
  ellipse(250,200,51,52);
  fill(242, 243, 247); //white top corner fix
  ellipse(125,200,10,10);
  ellipse(275,200,10,10);
  stroke(242, 243, 247); //white inner corner fix
  strokeWeight(5);
  strokeJoin(ROUND);
  triangle(175,200,170,217,185,215);
  triangle(225,200,230,217,215,215);
  noStroke();
  fill(110, 140, 143); //iris
  ellipse(150,200,40,50);
  ellipse(245,200,40,50);
  fill(122, 155, 158);
  ellipse(150,210,30,20);
  ellipse(245,210,30,20);
  fill(85, 112, 115); //pupils
  ellipse(150,200,10,15);
  ellipse(245,200,10,15);
  fill(242, 243, 247, 60); //eye highlight, 4th parameter controls transparency
  ellipse(135,208,15,10);
  ellipse(230,208,15,10);
  
  //brows and eyelids
  noStroke();
  fill(227, 193, 186); //skin shadows
  rect(120,170,160,25); //upper head/eyelids
  stroke(110, 76, 66); //brows
  strokeWeight(5);
beginShape(); //top left brow
  curveVertex(185,185); //rightmost point on left
  curveVertex(185,185);
  curveVertex(170,178);
  curveVertex(145,178);
  curveVertex(125,182); //leftmost point on left 
  curveVertex(125,182); 
endShape();
beginShape(); //top right brow
  curveVertex(215,185); //rightmost point on left
  curveVertex(215,185);
  curveVertex(230,178);
  curveVertex(255,178);
  curveVertex(275,182); //leftmost point on left 
  curveVertex(275,182); 
endShape();
  fill(110, 76, 66);
beginShape(); //thicken left brow
  curveVertex(185,185);
  curveVertex(185,185);
  curveVertex(183,178);
  curveVertex(158,177.2);
  curveVertex(158,177.2);
endShape();
beginShape(); //thicken right brow
  curveVertex(215,185);
  curveVertex(215,185);
  curveVertex(217,178);
  curveVertex(242,177.2);
  curveVertex(242,177.2);
endShape();
    
  //mouth
  stroke(227, 193, 186);
  strokeWeight(4);
beginShape(); //left
  curveVertex(195,260);
  curveVertex(195,260);
  curveVertex(190,261);
  curveVertex(185,263);
  curveVertex(185,263);
endShape();
beginShape(); //right
  curveVertex(205,260);
  curveVertex(205,260);
  curveVertex(210,261);
  curveVertex(215,263);
  curveVertex(215,263);
endShape();
  
  noFill();
  translate(0, 10); //damnit, lashes too high
  //my eyelashes... this is gonna be a lot of lines smh...
  stroke(89, 62, 54);
  strokeWeight(5);
  noFill();
beginShape(); //top left lash
  curveVertex(140,185);
  curveVertex(140,185);
  curveVertex(130,175);
  curveVertex(130,175);
endShape();
beginShape(); //bottom left lash
  curveVertex(130,210);
  curveVertex(130,210);
  curveVertex(128,211.5);
  curveVertex(128,211.5);
endShape();
beginShape(); //under top left lashline
  curveVertex(185,200); //rightmost point on left
  curveVertex(185,200);
  curveVertex(170,185);
  curveVertex(145,185);
  curveVertex(120,187); //leftmost point on left 
  curveVertex(124,195); //left corner
  curveVertex(124,195);
endShape();
beginShape(); //top left lashline
  curveVertex(185,196); //rightmost point on left
  curveVertex(185,196);
  curveVertex(170,181);
  curveVertex(145,181);
  curveVertex(120,182); //leftmost point on left 
  curveVertex(120,182); 
endShape(); 
beginShape(); //bottom left lashline
  curveVertex(175,207); //rightmost point on left
  curveVertex(175,207);
  curveVertex(170,209);
  curveVertex(155,215);
  curveVertex(145,215);
  curveVertex(135,210);
  curveVertex(135,210); //leftmost point on left 
endShape();
  
beginShape(); //top right lash
  curveVertex(260,185);
  curveVertex(260,185);
  curveVertex(270,175);
  curveVertex(270,175);
endShape();
beginShape(); //bottom right lash
  curveVertex(270,210);
  curveVertex(270,210);
  curveVertex(272,211.5);
  curveVertex(272,211.5);
endShape();
beginShape(); //under top right lashline
  curveVertex(215,200); //leftmost point on right
  curveVertex(215,200);
  curveVertex(230,185);
  curveVertex(255,185);
  curveVertex(280,187); //rightmost point on right 
  curveVertex(276,195); //right corner
  curveVertex(276,195);
endShape();
beginShape(); //top right lashline
  curveVertex(215,196); //rightmost point on right
  curveVertex(215,196);
  curveVertex(230,181);
  curveVertex(255,181);
  curveVertex(280,182); //leftmost point on left 
  curveVertex(280,182); 
endShape();
beginShape(); //bottom right lashline
  curveVertex(225,207); //leftmost point on right
  curveVertex(225,207);
  curveVertex(230,209);
  curveVertex(245,215);
  curveVertex(255,215);
  curveVertex(265,210);
  curveVertex(265,210); //rightmost point on right
endShape();
  
//top left lashline highlight
  stroke(110,76,66);
beginShape(); //rightmost point on left
  curveVertex(173,185);
  curveVertex(173,185);
  curveVertex(166,182.5);
  curveVertex(145,183);
  curveVertex(145,183);
endShape();
beginShape(); //leftmost point on left
  curveVertex(125,184); 
  curveVertex(125,184);
  curveVertex(130,183.7); 
  curveVertex(130,183.7);
endShape();
//top right lashline highlight
beginShape();
  curveVertex(227,185); //leftmost point on right
  curveVertex(227,185);
  curveVertex(234,182.5);
  curveVertex(255,183);
  curveVertex(255,183);
endShape();
beginShape();
  curveVertex(275,184); //rightmost point on right 
  curveVertex(275,184);
  curveVertex(270,183.7);
  curveVertex(270,183.7);
endShape();
  
  fill(128,88,77); //hair higlights
  stroke(128,88,77);
beginShape();
  curveVertex(170,95);
  curveVertex(170,95);
  curveVertex(150,90); //left top
  curveVertex(138,105);
  curveVertex(130,120);
  curveVertex(140,125); //left bottom
  curveVertex(160,122);
  curveVertex(180,117);
  curveVertex(200,112); //bottom middle
  curveVertex(220,117);
  curveVertex(240,122);
  curveVertex(260,125); //right bottom
  curveVertex(270,120);
  curveVertex(262,105);
  curveVertex(250,90); //right top
  curveVertex(230,95);
  curveVertex(210,100); //top middleish
  curveVertex(190,100);
  curveVertex(170,95);
  curveVertex(170,95);
endShape();
  stroke(110,76,66);
  fill(110,76,66);
beginShape();
  curveVertex(155,80); //left top
  curveVertex(155,80);
  curveVertex(160,100);
  curveVertex(175,99);
  curveVertex(180,100);
  curveVertex(190,105);
  curveVertex(200,106); //middle
  curveVertex(210,105);
  curveVertex(220,100);
  curveVertex(225,99);
  curveVertex(240,100);
  curveVertex(245,80); //right top
  curveVertex(245,80);
endShape();
beginShape();
  curveVertex(130,130); //left bottom
  curveVertex(130,130);
  curveVertex(174,115);
  curveVertex(200,117); //middle
  curveVertex(226,115);
  curveVertex(270,130); //right bottom
  curveVertex(270,130);
endShape();
beginShape(); //left
  curveVertex(113,108);
  curveVertex(113,108); //top
  curveVertex(122,90);
  curveVertex(128,85);
  curveVertex(123,92);
  curveVertex(117,96);
  curveVertex(107,111);
  curveVertex(102,123);
  curveVertex(100,138); //bottom
  curveVertex(102,134);
  curveVertex(106,123);
  curveVertex(113,108);
  curveVertex(113,108);
endShape();
beginShape(); //right
  curveVertex(287,108);
  curveVertex(287,108); //top
  curveVertex(278,90);
  curveVertex(272,85);
  curveVertex(277,92);
  curveVertex(283,96);
  curveVertex(293,111);
  curveVertex(298,123);
  curveVertex(300,138); //bottom
  curveVertex(298,134);
  curveVertex(294,123);
  curveVertex(287,108);
  curveVertex(287,108);
endShape();
beginShape(); //left
  curveVertex(98.5,150);
  curveVertex(98.5,150);
  curveVertex(97.5,154);
  curveVertex(97.7,158);
  curveVertex(97.7,158);
endShape();
beginShape(); //right
  curveVertex(301.5,150);
  curveVertex(301.5,150);
  curveVertex(302.5,154);
  curveVertex(302.3,158);
  curveVertex(302.3,158);
endShape();
  stroke(128,88,77);
beginShape(); //left
  curveVertex(125,135);
  curveVertex(125,135);
  curveVertex(123,140);
  curveVertex(122,143);
  curveVertex(122,143);
endShape();
beginShape(); //right
  curveVertex(275,135);
  curveVertex(275,135);
  curveVertex(277,140);
  curveVertex(278,143);
  curveVertex(278,143);
endShape();
  
  noStroke();
  translate(0, 20); //cancel former translation effects

scale(1.2); //scale beethoven
translate(-65,-70)
//-----
//beethoven (white cat)
  noStroke();
  //hand on head
  noStroke();
  fill(240, 210, 204);
  ellipse(330,280,60,40);
  //torso
  fill(223, 224, 230); //back, shadowed
  rect(263,385,122,40,5);
  ellipse(293,390,60,60);
  ellipse(355,390,60,60);
  fill(242, 243, 247); //main torso, white
  rect(275,350,90,100,5);
  fill(242, 243, 247); //shoulders
  ellipse(319,352,95,50);
  fill(223, 224, 230); //chest shadow
    //alternate arc(320,375,60,50,0,PI);
    //alternate rect(290,340,60,40)
    //alternate ellipse(320,352,85,40);
  ellipse(318,348,85,35);
  //ears, left then right
  fill(242, 243, 247);
  stroke(242, 243, 247);
  strokeWeight(5);
  strokeJoin(ROUND);
  triangle(280,265,280,300,350,310); //note: x1,y1,x2,y2,x3,y3
  triangle(375,270,367.7,321.9,297,310);
  fill(235, 185, 185); //inner ear, left then right
  stroke(235, 185, 185);
  strokeWeight(5);
  strokeJoin(ROUND);
  triangle(285,275,285,290,300,284);
  triangle(368,280,365,301,350,288);
  //head
  noStroke();
  fill(242, 243, 247);
  ellipse(320,320,100,75);
  ellipse(303,332,80,50); //chin
  ellipse(313,348,60,20);
  fill(223, 224, 230); //nose shadow
  rect(303.5,325,20,10,5);
  fill(235, 185, 185); //nose dot
  rect(308,327,10,5,5);
  //eyes
  fill(193, 199, 151); //green iris base
  ellipse(291,320,20,20);
  fill(210, 217, 163);
  ellipse(291,324,12,10);
  fill(151, 174, 199); //blue iris base
  ellipse(337,320,20,20);
  fill(242, 243, 247);
  fill(167, 192, 219);
  ellipse(337,324,12,10);
  fill(172, 179, 132); //green pupil
  ellipse(291,320,5,10);
  fill(136, 156, 179); //blue pupil
  ellipse(337,320,5,10);
  fill(242, 243, 247, 100);
  ellipse(282,321,10,5,5); //eye highlights
  ellipse(328,321,10,5,5);
  //lashes
beginShape(); //green lash
  stroke(193, 199, 151);
  strokeWeight(3);
  noFill();
  curveVertex(280,314);
  curveVertex(280,314);
  curveVertex(285,316);
  curveVertex(285,316);
endShape();
  noFill();
beginShape(); //blue lash
  stroke(151, 174, 199);
  strokeWeight(3);
  noFill();
  curveVertex(345,316);
  curveVertex(345,316);
  curveVertex(349,314);
  curveVertex(349,314);
endShape();
  noFill();
  //mouth
  stroke(223, 224, 230);
  strokeWeight(3);
  noFill();
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
}
