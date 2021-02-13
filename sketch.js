var music;
var surfaceBlue;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(600, 600)

    surfaceBlue = createSprite(525, 590, 150, 20);
    surfaceBlue.shapeColor = "blue";

    surfaceRed = createSprite(375, 590, 150, 20);
    surfaceRed.shapeColor = "red";

    surfaceGreen = createSprite(225, 590, 150, 20);
    surfaceGreen.shapeColor = "green";

    surfaceYellow = createSprite(75, 590, 150, 20);
    surfaceYellow.shapeColor = "yellow";

    ball = createSprite(Math.round(random(20, 750)), 500, 20, 20);
    ball.shapeColor = ("black");
    ball.velocityX = 4;
    ball.velocityY = 3;
   

}

function draw() {

    background("grey");
  edges=createEdgeSprites();
     ball.bounceOff(edges);

    if (surfaceBlue.isTouching(ball)&&ball.bounceOff(surfaceBlue)){
        ball.shapeColor = "blue";
        //music.play();
    }

    if (surfaceRed.isTouching(ball)&&ball.bounceOff(surfaceRed)){
        ball.shapeColor = "red";
        //music.play();
    }

    if (surfaceGreen.isTouching(ball)&&ball.bounceOff(surfaceGreen)){
        ball.shapeColor = "green";
        music.play();
    }

    if (surfaceYellow.isTouching(ball)&&ball.bounceOff(surfaceYellow)){
        ball.shapeColor = "yellow";
        //music.play();
    }
    
    drawSprites();
}

