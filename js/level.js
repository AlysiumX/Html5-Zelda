//A level is just an array of rooms.
function level(){
	this.rooms = [];
	//this.rooms[0] = new room(1, 27, 13); //Room testing.
	//this.rooms[1] = new room(1, 13, 13);
	this.LoadedRoomNum = 0; //This is the room that the player is currently in.
	this.currentRoomNum = 0; //This handles which room were going to draw next.
}
level.prototype.createRoom = function(){
	this.rooms[this.LoadedRoomNum].createRoom();
}
level.prototype.addRoom = function(room){
	this.rooms.push(room);
}
level.prototype.draw = function(ctx){
	if(this.LoadedRoomNum != this.currentRoomNum){
		//make it equal and build the next room.
		this.LoadedRoomNum = this.currentRoomNum;
		//Draw next room
		this.createRoom();
	}
	this.rooms[this.LoadedRoomNum].draw(ctx);
}

