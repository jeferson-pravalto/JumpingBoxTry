//Variable's Creation

var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edge_top,edge_left,edge_right,edge_bottom;

// Definition for few
function preload(){
    music = loadSound("music.mp3");
}

//Setting up the Variables

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(185-55,580,100,40);
    box2 = createSprite(370-55,580,100,40);
    box3 = createSprite(555-55,580,100,40);
    box4 = createSprite(740-55,580,100,40);
    box1.shapeColor = "red";
    box2.shapeColor = "yellow";
    box3.shapeColor = "blue";
    box4.shapeColor = "green";

    //create box sprite and give velocity
    ball = createSprite(random(100,450),random(100,350),30,30)
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 5;

    //edges
    edge_left = createSprite(-2,canvas.height/2,4,canvas.height);
    edge_bottom = createSprite(canvas.width/2,-2,canvas.width,4);
    edge_right = createSprite(canvas.width+2,canvas.height/2,4,canvas.height);
    edge_top = createSprite(canvas.width/2,canvas.height+2,canvas.witdh,4);

}

function draw() {
    background("cyan");
    
    bounceOff(ball,box1);
    bounceOff(ball,box2);
    bounceOff(ball,box3);
    bounceOff(ball,box4);

    if(ball.isTouching(box1)){
        ball.shapeColor = "red";
        music.play();
    } 

    if(ball.isTouching(box2)){
        ball.shapeColor = "yellow";
        music.play();
    } 

    if(ball.isTouching(box3)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(ball.isTouching(box4)){
        ball.shapeColor = "green";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    } 
    //Edge Collision
    bounceOff(ball,edge_top);
    bounceOff(ball,edge_left);
    bounceOff(ball,edge_right);
    bounceOff(ball,edge_bottom);

    if(ball.isTouching(edge_top || edge_left || edge_right || edge_bottom)){
        music.stop();
    }

    
    //create edgeSprite
    //createEdgeSprites();
    //add condition to check if box touching surface and make it box
    drawSprites();
}

//--------------------------------------
/*function createEdgeSprites(){
    var edges = createSprite(-2,canvas.height/2,4,canvas.height);
    var edges = createSprite(canvas.width/2,-2,canvas.width,4);
    var edges = createSprite(canvas.width+2,canvas.height/2,4,canvas.height);
    var edges = createSprite(canvas.width/2,canvas.height+2,canvas.witdh,4);
}*/

function bounceOff(obj1,obj2){
    if(obj1.isTouching(obj2)){
        obj1.velocityX = obj1.velocityX*(-1);
        obj1.velocityY = obj1.velocityY*(-1);
    }
}

function IsTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2 
        && object2.x - object1.x < object2.width/2 + object1.width/2 
        && object1.y - object2.y < object2.height/2 + object1.height/2 
        && object2.y - object2.y < object2.height/2 + object1.height/2) 
        {
                 return true;
        } else {
                 return false;
         } 
     }