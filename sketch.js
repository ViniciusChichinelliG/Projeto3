let cor;
let circleY;
let circleX;

function setup() {
  createCanvas(1000, 800);
  background("yellow");
  cor=color(random(0,255),random(0,255),random(0,255));
  circleY=[random(height),random(height),random(height)];
  circleX=[0,0,0];
}

function draw() {
  fill(cor);
 for(let quantos in circleX) {
   circle(circleX[quantos],circleY[quantos],50);
   circleX[quantos]+=random(0,3);
   circleY[quantos]+=random(-3,3);
   
   if(circleX[quantos]>=width) {
     circleX[quantos]=0;
     circleY[quantos]=random(height);
   }
 }
  
  
  
  
  
  if(mouseIsPressed) {
    cor=color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
  
}
