let button, button2;
var fade = 0;
var xVal = 250;
var yVal = 250;

function setup() {
  createCanvas(400, 400);
  button = createButton('click 2 eat');
  button.position(100, 325);
  button.size(200,50);
  button.mouseOver(hoverEffect);
  button.mouseOut(leaveEffect);
  button.style("background-color","rgb(200,200,200)");
  button.style("border-style","hidden");
  textSize(100);
  background(241,255,247);
  fill(200,150,100);
  noStroke();
  circle(200,200,200);
  for (var i=0; i < 20; i++) {
    fill(100,50,0);
    noStroke();
    circle(random(130,270),random(130,270),10);
  }
}

function draw() {
  button.mousePressed(eatCookie);
  button.mouseReleased(buttonReposition);
}

function hoverEffect(){
  button.style("background-color","rgb(102,204,157)");
}
function leaveEffect(){
  button.style("background-color","rgb(200,200,200)");
}

function buttonReposition(){
  button.position(100, 325);
}

function eatCookie() {
  button.position(100, 330);
  fill(241,255,247,fade);
  noStroke();
  circle(xVal,yVal,200);
  if(fade != 700) {
  fade += 50; 
  }
  if(fade>255 && xVal == 250){
    xVal= 150;
    fade = 0;
  }
  if(fade>255 && xVal == 150){
    yVal= 150;
    xVal = 199;
    fade = 0;
  }
  if(fade>255 && fade!=700 && yVal == 150){
    fade = 700;
    button2 = createButton('more please');
    button2.position(150, 200);
    button2.size(100,50);
    button2.mousePressed(newCookie);
    print(fade);
 }
}

function newCookie() {
  fill(200,150,100);
  circle(200,200,200);
  fade = 0;
  xVal = 250;
  yVal = 250;
  button2.remove();
  for (var i=0; i < 20; i++) {
    fill(100,50,0);
    noStroke();
    circle(random(130,270),random(130,270),10);
  }
}