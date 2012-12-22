//Constructor builds a room based on width and height
function room(num, width, height){
	this.num = num;
	this.roomCanvas = document.createElement("canvas"); //Create room canvas
	this.roomCanvas.width = GAME_WIDTH; //Set canvas to the size of the game canvas
	this.roomCanvas.height = GAME_HEIGHT;
	this.roomCtx = this.roomCanvas.getContext("2d");
	
	this.roomWidth = width;
	this.roomHeight = height;
	this.room = new Array(height);
	
	//Create the room.
	for(var y=0;y<height;y++){
		this.room[y] = new Array(width);
		for(var x=0;x<width;x++)
			this.room[y][x] = "d1";
	}		
}

//Creates the current room -- This replaces the draw function an is only called once per room load to save cycles.
room.prototype.createRoom = function(){
	for(var y=0;y<this.roomHeight;y++)
		for(var x=0;x<this.roomWidth;x++){
			//Flip through tiles and check for the id.
			for(var i=0;i<gameTiles.length;i++)
			{
				if(this.room[y][x] == gameTiles[i].ID) //ID
					this.roomCtx.drawImage(gameTiles[i].getTiles(), x*(gameTiles[i].width*gameTiles[i].scale), y*(gameTiles[i].height*gameTiles[i].scale));
			}
			
		}
}

//Draw the room canvas
room.prototype.draw = function(ctx){
	ctx.drawImage(this.roomCanvas, 0, 0);
}
