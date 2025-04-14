import { gameboard, isOutsideBoard } from "./board/board.js";
import { snake_speed, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfColision as hasSnakeSelfCollision, setSnakeSpeed } from "./snake/snakeBody.js"
import { draw as foodDraw, update as foodUpdate, getScore} from './food/food.js'

let score = 0;
const scoreElement = document.getElementById('pontuacao');
const finalScoreElement = document.getElementById('final-score');

window.addEventListener('keydown', e => ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key) && e.preventDefault());

let lastTimeRender = 0;


const dificuldadeElement = document.getElementById('dificuldade-atual');

document.getElementById('easy').addEventListener('click', () => {
    setSnakeSpeed(5);
    setDificuldade('Fraco');
    resetGame();
});

document.getElementById('medium').addEventListener('click', () => {
    setSnakeSpeed(15);
    setDificuldade('Te falta coragem');
    resetGame();
});

document.getElementById('hard').addEventListener('click', () => {
    setSnakeSpeed(50);
    setDificuldade('Domador de Cobras');
    resetGame();
});


function setDificuldade(label) {
    if (dificuldadeElement) {
        dificuldadeElement.textContent = `Dificuldade: ${label}`;
    }
}

let isGameOver = false;

function main(currentTime){
    
    if (checkGameOver() && !isGameOver) {
        isGameOver = true;
        showGameOverScreen();
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


function showGameOverScreen() {
    const screen = document.getElementById('game-over-screen');
    const finalScoreElement = document.getElementById('final-score');

    screen.classList.remove('hidden');
    finalScoreElement.textContent = `Pontuação: ${getScore()}`;

    document.getElementById('restart-button').addEventListener('click', () => {
        window.location.reload();
    });
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
