class Game{
	constructor(){
		this.score = 0;
		this.status = false;
		this.bird = null;
		this.background = null;
		this.base = null;
		this.pipe = null;
		this.canvas = null;
		this.context = null;
		this.height = 512;
		this.width = 488;
		this.bestScore = this.score;
	}
	init(){
		this.canvas = document.getElementById("myCanvas");
		this.canvas.height = this.height;
		this.canvas.width = this.width;
		this.context = this.canvas.getContext('2d');
		this.context.font = "30px Arial";
		this.context.fillStyle = "white";
		this.background = new Background(this,bg,0,0,1);
		this.pipe = new Pipe(this, pipe, 120);
		this.base = new Background(this,base,0,0,8);
		this.base.y = this.height - 90;
		this.bird = new Bird(this,bird1,bird2);
	}
	run(){
		if (this.score > this.bestScore) {
			this.bestScore = this.score;
		}
		this.background.changeBackground();
		this.pipe.createPipe();
		this.base.changeBackground();
		this.bird.down();
		this.context.fillText("score: "+this.score,0,30);
	}
}
let bg = document.getElementById('bg');
let base = document.getElementById('base');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let pipe = document.getElementById('pipe');
let sound1 = document.getElementById('1');
let sound2 = document.getElementById('2');
let game = new Game();
game.init();
run();
function run(){
	document.getElementById('bestscore').innerHTML = "<h1>Điểm cao nhât "+game.bestScore+"</h1>";
	if (game.status == false) {
		game.run();
		setTimeout(run,30);
	}else sound2.play();
}

function clickFly(){
	sound1.play();
	game.bird.speedY = -13;
}
function playAgain(){
	game.score = 0;
	sound2.pause();
	game.status = false;
	game.init();
	run();
}
