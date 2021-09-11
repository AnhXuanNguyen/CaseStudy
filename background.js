class Background{
	constructor(game,_image,x,y,_a){
		this.game = game;
		this.x = x;
		this.y = y;
		this.img = _image;
		this.a = _a;
	}	
	changeBackground(){
		this.x -= this.a;
		if (this.x == -488) {
			this.x = 0;
		}
		this.draw();
	}
	draw(){
		this.game.context.drawImage(this.img,this.x,this.y);
		this.game.context.drawImage(this.img,this.x+488,this.y);
	}
}