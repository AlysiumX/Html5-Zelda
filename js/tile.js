var gameTiles = []; //An array of all tiles.

function tile(id, imgsrc, x, y, width, height, scale, flippedH, flippedV, flip90){
	this.ID = id;
	this.IMG = new Image();
	this.IMG.src = imgsrc;
	this.offsetX = x;
	this.offsetY = y;
	this.width = width;
	this.height = height;
	this.scale = scale;
	this.flippedH = flippedH;
	this.flippedV = flippedV;
	this.flipped90 = flip90;
	gameTiles.push(this);
}

tile.getTileByID = function(tileID){
	for(var i=0;i<gameTiles.length;i++)
		if(tileID == gameTiles[i].ID)
			return gameTiles[i];
}

tile.prototype.getTiles = function(){
	//Handles flipping image.
	var flippingCanvas = document.createElement("Canvas");
	var flippingCtx = flippingCanvas.getContext("2d");
	
	flippingCanvas.width = this.width*this.scale;
	flippingCanvas.height = this.height*this.scale;
	
	if(this.flippedH){
		flippingCtx.scale(-1,1); //flip horizontally 
		flippingCtx.translate(-this.width*this.scale,0); //move aside original position
	}
	if(this.flippedV){
		flippingCtx.scale(1,-1); //flip vertically 
		flippingCtx.translate(0,-this.height*this.scale); //move beneath original position
	}
	
	if(this.flipped90){
		flippingCtx.translate(this.width*this.scale, 0);
		flippingCtx.rotate(90 * Math.PI / 180);
	}
	
	flippingCtx.drawImage(this.IMG, //Tile Resource
	       				   this.offsetX, this.offsetY, //Tile Resource Offsets 
						   this.width, this.height,  //Tile Width and Height
						   0, 0, //Offset on the map(factoring scale)
						   this.width*this.scale, this.height*this.scale); //width and height scale
	
	return flippingCanvas;
}

