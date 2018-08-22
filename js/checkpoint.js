function Checkpoint(game, key) {
	Phaser.Sprite.call(this, game,100, 900,'checkpoint1');
	this.game.physics.enable(this);
	this.enableBody=true;
	this.body.immovable=true;
	this.checkpointLIGHT_RADIUS = 100;
	//create shadow texture
	this.checkpointshadowTexture = this.game.add.bitmapData(this.game.world.width,this.game.world.height);
	//create an object that will use the bitmap as texture
	var checkpointLight = this.game.add.image(0,0,this.checkpointshadowTexture);
	//dark everything below the light
	checkpointLight.blendMode = Phaser.blendModes.MULTIPLY;
};

Checkpoint.prototype = Object.create(Phaser.Sprite.prototype);
Checkpoint.prototype.constructor = Checkpoint;

Checkpoint.prototype.update = function() {
	this.updateCheckpointShadowTexture();
}

Checkpoint.prototype.updateCheckpointShadowTexture = function(){
	//create dark texture
		this.checkpointshadowTexture.context.fillStyle = 'rgb(0,0,0)';
		this.checkpointshadowTexture.context.fillRect(0,0,game.world.width,game.world.height);

		//randomly change the radius each frame
		checkpointRadius = this.checkpointLIGHT_RADIUS + this.game.rnd.integerInRange(1,10);

		//draw circle of light with a soft edge
		
		var checkpointGradient = this.checkpointshadowTexture.context.createRadialGradient(this.x,this.y,this.checkpointLIGHT_RADIUS*0.75,this.x,this.y,checkpointRadius);
		
		
		checkpointGradient.addColorStop(0,'rgba(255,255,255,1.0)');
		checkpointGradient.addColorStop(1,'rgba(255,255,255,0.0)');

		//draw the circle of light
		this.checkpointshadowTexture.context.beginPath();
		this.checkpointshadowTexture.context.fillStyle = checkpointGradient;
		this.checkpointshadowTexture.context.arc(this.x,this.y,checkpointRadius,0,Math.PI*2);
		this.checkpointshadowTexture.context.fill();

		//tell the engine it should update the texture
		this.checkpointshadowTexture.dirty = true;
}
