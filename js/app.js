import { gameboard } from "./board/board.js";
import { snake_speed, draw as snakeDraw, update as snakeUpdate } from "./snake/snakeBody.js"

let lastTimeRender = 0;

function main(currentTime){
    
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
}

function draw(){
    snakeDraw();
}

window.requestAnimationFrame(main)
