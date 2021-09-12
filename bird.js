class Bird{
	constructor(game,bird1,bird2,bird3){
		this.game = game;
		this.images = [bird1,bird2];
		this.imageEndgame = bird3;
		this.status = 0;
		this.count = 0;
		this.x = 150;
		this.y = 0;
		this.speedY = 0;
		this.acceleration = 1.5;
	}
	down(){
		this.count++;
		if (this.count%10 == 0) {
			if (this.status == 1) {
				this.status = 0;
			}
			else this.status = 1;
		}
		if (this.y <= this.game.height - 104) {
				this.speedY += this.acceleration;
				this.y += this.speedY;
		}else{
			this.game.context.drawImage(this.imageEndgame,this.x,this.y);
			this.game.status = true;
			return;
		} 
		if ((this.x+40 > this.game.pipe.x && this.x<this.game.pipe.x + 60)&&((this.y < this.game.pipe.y - 120) ||(this.y+40 > this.game.pipe.y))){
			this.game.context.drawImage(this.imageEndgame,this.x,this.y);
			this.game.status = true;
			return;
		}
		this.draw();
	}
	draw(){
		this.game.context.drawImage(this.images[this.status],this.x,this.y);
	}
}