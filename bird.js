class Bird{
	constructor(game,bird1,bird2){
		this.game = game;
		this.images = [bird1,bird2];
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
		}else this.game.status = true;
		this.checkLose();
		this.draw();
	}
	checkLose(){
		if ((this.x+40 > this.game.pipe.x && this.x<this.game.pipe.x + 60)&&((this.y < this.game.pipe.y - 120) ||(this.y+40 > this.game.pipe.y))){
				this.game.status = true;
		}
	}
	draw(){
		this.game.context.drawImage(this.images[this.status],this.x,this.y);
	}
}