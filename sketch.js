var ball;
var database,position,pos;

function setup(){
    createCanvas(500,500);
    //creating database
     database = firebase.database();
     // extract the node from the database
     pos = database.ref('ball/position');
     // add a listener
     pos.on("value", readPos, showError);
     

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");

    if(position!==undefined){
        if(keyDown(LEFT_ARROW)){
            writePos(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePos(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePos(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePos(0,+1);
        }
   }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPos(data){
    position = data.val();
    //var keys = Object.keys(pos)
    ball.x = position.x
    ball.y = position.y
}

function showError(err){
    console.log("error:" + err);
}

function writePos(x,y){
    pos.set({x: position.x + x, y: position.y + y});
}
