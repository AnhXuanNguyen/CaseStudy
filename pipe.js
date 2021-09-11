class Pipe{
	constructor(game,_image,n){
		this.game = game;
		this.image = _image;
		this.n = n;
		this.x = 490;
		this.y = 320;
	}
	createPipe(){
		this.x-=8;
		if (this.x == 90) {
			this.game.score++;
		}
		if (this.x == -62) {
			this.x = 490;
			this.y = Math.floor(150+(Math.random()*this.n));
		}
		this.draw();
	}
	draw(){
		this.game.context.drawImage(this.image,this.x, this.y - this.n - 320);
		this.game.context.drawImage(this.image,this.x,this.y);
	}
}