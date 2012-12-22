function animation(offsetX, offsetY, minFrame, maxFrame, updateFrame, frameWidth, frameHeight){
	this.currentAnimationFrame = 0; //Our current frame in the sprite sheet were on.
	this.minAnimationFrame = minFrame; //Min number of frames in the sprite sheet(would believe it to always be 0 O_o)
	this.maxAnimationFrame = maxFrame; //Max number of frames in the sprite sheet.
	this.FrameCount = 0; //Determines its time to update the current animation frame.
	this.FramesMax = updateFrame; //Current updating every other frame.
	this.frameWidth = frameWidth; //Width of the currently selected frame
	this.frameHeight = frameHeight; //Height of the currently selected frame
}

animation.prototype.trigger = function(){
	this.FrameCount++;		
	if(this.FrameCount == this.FramesMax){
		//Reset animation counter
		this.FrameCount = 0;
		
		//Update current animation frame.
		if(this.currentAnimationFrame != this.maxAnimationFrame)
			this.currentAnimationFrame++;
		else
			this.currentAnimationFrame = 0;
	}
}