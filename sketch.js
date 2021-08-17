i = 400;

function preload(){
	
}

function setup() {
	createCanvas(1000, 700);

	player = createSprite(500, 600, 40, 40);
	player.shapeColor = "orange";
	ground = createSprite(width/2, 700, width, 50);
	ground.shapeColor = "white";

	wallArray = [];
	gameState = 1;

	for(var g = 0; g < 100; g++){		
	wallArray[g] = new WallPair(760, i, 235, i, player);
	i -= 250;
	} 

	gameState = "playing";
}

function draw() {
  rectMode(CENTER);
  background("blue");

  player.velocityY += 1.1;
  player.collide(ground);


	if(gameState === "playing"){
	for(var y = 0; y < wallArray.length; y++){
		rand = Math.round(random(1, 10));
		wallArray[y].move(rand);
		wallArray[y].Check();
		if(wallArray[y].Check() === true){
			console.log("checked")
			gameState = "gameover";
		}
	}
}
	if(gameState === "gameover"){
		for(var y = 0; y < wallArray.length; y++){
			wallArray[y].stop();
		}
	}

	

    camera.position.y = player.y;

   drawSprites();

}

function keyPressed(){
	if(keyCode === 32 && gameState === "playing"){
		player.velocityY = -15;
	}
}