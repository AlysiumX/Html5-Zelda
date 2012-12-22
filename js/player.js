//TODO : Refactor to handle objects sprites similar to handling tiles.
//TODO : Animation manager.

function player(){
	this.playerX = 0;
	this.playerY = 0;
	this.playerSpeed = 5;
	this.animation = new animation(0, //OffsetX 
								   0, //OffsetY
								   0, //MinAnimationFrame
								   6, //MaxAnimationFrame
								   4, //updateFrame -- Animation update at after this many frames
								   20, //frameWidth 
								   24);//frameHeight

	//Player Images.
	this.playerFImages = new Image();
	this.playerBImages = new Image();
	this.playerLImages = new Image();
	this.playerRImages = new Image();
	
	this.playerFImages.src = "images/player/link_f_walk.png";
	this.playerBImages.src = "images/player/link_b_walk.png";
	this.playerLImages.src = "images/player/link_l_walk.png";
	this.playerRImages.src = "images/player/link_r_walk.png";
	
	this.playerIMG = new Image();
	this.playerIMG = this.playerFImages;
	
	//Player keybinds
	this.p_up = false;
	this.p_down = false;
	this.p_left = false;
	this.p_right = false;
	
	//Animation variables.
	this.currentAnimationFrame = 0; //Our current frame in the sprite sheet were on.
	this.minAnimationFrame = 0; //Min number of frames in the sprite sheet(would believe it to always be 0 O_o)
	this.maxAnimationFrame = 6; //Max number of frames in the sprite sheet.
	this.FrameCount = 0; //Determines its time to update the current animation frame.
	this.FramesMax = 2; //Current updating every other frame.
	this.frameWidth = 20; //Width of the currently selected frame
	this.frameHeight = 24; //Height of the currently selected frame
}

player.prototype.processKeys = function(keyCode, pressed){
	switch(keyCode){
		case KEY_UP:
			this.p_up = pressed;
			break;
		case KEY_DOWN:
			this.p_down = pressed;
			break;
		case KEY_LEFT:
			this.p_left = pressed;
			break;
		case KEY_RIGHT:
			this.p_right = pressed;
			break;
	}
}

player.prototype.update = function(){
	
	//Update Player Movement.
	if(this.p_up){
		this.playerY = this.playerY - this.playerSpeed
		this.playerIMG = this.playerBImages;
	}
	if(this.p_down){
		this.playerY = this.playerY + this.playerSpeed
		this.playerIMG = this.playerFImages;
	}
	if(this.p_left){
		this.playerX = this.playerX - this.playerSpeed
		this.playerIMG = this.playerLImages;
	}
	if(this.p_right){
		this.playerX = this.playerX + this.playerSpeed
		this.playerIMG = this.playerRImages;
	}
}

player.prototype.draw = function(ctx){
	
	//Movement animation.
	if(this.p_up || this.p_down || this.p_left || this.p_right){
		//Animate on trigger
		this.animation.trigger();
	}else{
		thisFrameCount = this.animation.currentAnimationFrame = 0;
	}
	//ctx.drawImage(playerIMG, playerX, playerY);
	//Handling sprite sheets
	//Nine Agruments : The element, source(x, y) coordinates,
	//souce width and height(for cropping)
	//destination (x, y) coordinates, and 
	//destination width and height (resize).
	ctx.drawImage(this.playerIMG, this.animation.currentAnimationFrame * this.animation.frameWidth, 0, this.animation.frameWidth, this.animation.frameHeight, this.playerX, this.playerY, this.animation.frameWidth*2, this.animation.frameHeight*2); 
}