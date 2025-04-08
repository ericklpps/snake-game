import { gameboard, isOutsideBoard } from "./board/board.js";
import { snake_speed, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfColision as hasSnakeSelfCollision } from "./snake/snakeBody.js"
import { draw as foodDraw, update as foodUpdate} from './food/food.js'

let lastTimeRender = 0;


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

export function checkGameOver(){
  return isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision();

}

window.requestAnimationFrame(main)
