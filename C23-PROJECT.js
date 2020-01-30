function setup() {
  createCanvas(500,500);
  block0 = createSprite(35,450,50,250);
  block1 = createSprite(65,450,50,300);
  block2 = createSprite(105,450,50,450);
  block3 = createSprite(375,450,50,450);
  block4 = createSprite(415,450,50,300);
  block5 = createSprite(455,450,50,250)

  main = createSprite(235,450,25,675);
  main1 = createSprite(255,450,25,565);
  main3 = createSprite(215,450,25,415);
  main4 = createSprite(275,450,25,475);
  main5 = createSprite(195,450,25,455);
  main6 = createSprite(295,450,25,585);
  triangle(255,550,65);
}

function draw() {
  background(0);  
  
 drawSprites()
}