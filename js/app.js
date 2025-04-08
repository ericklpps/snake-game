import { gameboard, isOutsideBoard } from "./board/board.js";
import { snake_speed, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfColision as hasSnakeSelfCollision, setSnakeSpeed } from "./snake/snakeBody.js"
import { draw as foodDraw, update as foodUpdate} from './food/food.js'

window.addEventListener('keydown', e => ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key) && e.preventDefault());

let lastTimeRender = 0;


document.getElementById('easy').addEventListener('click', () => {
    setSnakeSpeed(5);
    resetGame();
});
  
document.getElementById('medium').addEventListener('click', () => {
    setSnakeSpeed(10);
    resetGame();
});
  
document.getElementById('hard').addEventListener('click', () => {
    setSnakeSpeed(50);
    resetGame();
});



function main(currentTime){
    
    if(checkGameOver()){
        if(confirm('Você perdeu. Pressione OK para recomeçar.')){
            window.location.reload();
        }else{
            window.requestAnimationFrame(main);
        }
        return;
    }

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastTimeRender)/1000;
    
    if (secondsSinceLastRender < 1 / snake_speed) return;

    lastTimeRender = currentTime;

    //contolar a lógica
    update();

    //adicionar elementos na tela
    draw();
}



function update(){
    gameboard.innerHTML = '';
    snakeUpdate();
    foodUpdate();
}

function draw(){
    snakeDraw();
    foodDraw();
}

function resetGame() {
    while (gameboard.firstChild) {
      gameboard.removeChild(gameboard.firstChild);
    }
    
    snakeBody.length = 1;
    snakeBody[0] = { x: 11, y: 11 };
    
    window.requestAnimationFrame(main);
}

export function checkGameOver(){
  return isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision();

}

window.requestAnimationFrame(main)
