import { gameboard, isOutsideBoard } from "./board/board.js";
import {
  snake_speed,
  draw as snakeDraw,
  update as snakeUpdate,
  getSnakeHead,
  hasSelfColision as hasSnakeSelfCollision,
  setSnakeSpeed,
  snakeBody
} from "./snake/snakeBody.js";
import {
  draw as foodDraw,
  update as foodUpdate,
  getScore,
  resetScore
} from './food/food.js';

let lastTimeRender = 0;
let isGameOver = false;

const dificuldadeElement = document.getElementById('dificuldade-atual');

document.getElementById('easy').addEventListener('click', () => {
  setSnakeSpeed(5);
  setDificuldade('GAZELA FERIDA');
  resetGame();
});

document.getElementById('medium').addEventListener('click', () => {
  setSnakeSpeed(10);
  setDificuldade('AINDA COM MEDO?');
  resetGame();
});

document.getElementById('hard').addEventListener('click', () => {
  setSnakeSpeed(35);
  setDificuldade('MESTRE DAS COBRAS');
  resetGame();
});

function setDificuldade(label) {
  if (dificuldadeElement) {
    dificuldadeElement.textContent = `Dificuldade: ${label}`;
  }
}

function main(currentTime) {
  if (isGameOver) return;

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000;
  if (secondsSinceLastRender < 1 / snake_speed) return;

  lastTimeRender = currentTime;

  update();
  draw();

  if (checkGameOver()) {
    isGameOver = true;
    showGameOverScreen();
  }
}

function showGameOverScreen() {
  const screen = document.getElementById('game-over-screen');
  const finalScoreElement = document.getElementById('final-score');
  const score = getScore();

  screen.classList.remove('hidden');
  finalScoreElement.textContent = `Pontuação: ${score}`;

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-container');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Digite seu nome';
  input.id = 'nome-jogador';

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Salvar';
  saveButton.id = 'save-button';

  inputContainer.appendChild(input);
  inputContainer.appendChild(saveButton);

  screen.querySelector('.game-over-box').appendChild(inputContainer);

  saveButton.addEventListener('click', () => {
    const nome = input.value.trim();
    if (nome === '') return;

    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    ranking.push({ nome, pontos: score });
    localStorage.setItem('ranking', JSON.stringify(ranking));

    window.location.href = 'ranking.html';
  });

  document.getElementById('restart-button').addEventListener('click', () => {
    window.location.reload();
  });
}

function update() {
  gameboard.innerHTML = '';
  snakeUpdate();
  foodUpdate();
}

function draw() {
  snakeDraw();
  foodDraw();
}

function resetGame() {
  while (gameboard.firstChild) {
    gameboard.removeChild(gameboard.firstChild);
  }

  isGameOver = false;
  snakeBody.length = 1;
  snakeBody[0] = { x: 11, y: 11 };

  resetScore(); 

  window.requestAnimationFrame(main);
}

export function checkGameOver() {
  return isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision();
}

window.addEventListener('keydown', e => {
  const isInputFocused =
    document.activeElement.tagName === 'INPUT' ||
    document.activeElement.tagName === 'TEXTAREA';

  if (!isInputFocused && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();
  }
});

window.requestAnimationFrame(main);
