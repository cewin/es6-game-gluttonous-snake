import Food from './foot.js';
import Snake from './snake.js';

class Game{
    constructor(map){
        this.food =new Food();
        this.snake =new Snake();
        this.map= map;
    }
    start() {
        this.runSnake()
        this.bindkey()
    }
    runSnake(){
        var timerId = setInterval(() =>{
            this.snake.move(this.food, this.map);
            // 在渲染前，删除之前的蛇
            this.snake.render(this.map);
            // 判断蛇是否撞墙
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                clearInterval(timerId);
                alert('Game Over');
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timerId);
                alert('Game Over');
            }
        }, 150);
    }
    bindkey(){
        document.addEventListener('keydown', (e) =>{
            switch (e.keyCode) {
                case 37:
                    // left
                    this.snake.direction = 'left';
                    break;
                case 38:
                    // top
                    this.snake.direction = 'top';
                    break;
                case 39:
                    // right
                    this.snake.direction = 'right';
                    break;
                case 40:
                    // bottom
                    this.snake.direction = 'bottom';
                    break;
            }
        }, false);
    }
}
new Game(document.getElementById('map')).start()