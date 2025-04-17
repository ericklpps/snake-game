import { gameboard, generateRandomBoardPosition } from '../board/board.js';
import { colisao as snakeCollision, aumentarCobra, setCorCobra } from '../snake/snakeBody.js';

export const cresceCobra = 1;
let foodPosition = generateRandomPosition();
let foodType = 'normal';
let score = 0;

export function update() {
    if (snakeCollision(foodPosition)) {
        aumentarCobra(cresceCobra);
        score++;

        const pontuacaoElement = document.getElementById("pontuacao");
        if (pontuacaoElement) {
            pontuacaoElement.textContent = `Pontos: ${score}`;
        }

        if (foodType === 'pokebola') {
            setCorCobra('roxa');
        } else {
            setCorCobra('verde');
        }

        foodPosition = generateRandomPosition();
        foodType = Math.random() < 0.2 ? 'pokebola' : 'normal';
    }
}

export function getScore() {
    return score;
}

export function draw() {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;

    if (foodType === 'pokebola') {
        foodElement.classList.add('food', 'pokebola');
    } else {
        foodElement.classList.add('food');
    }

    gameboard.appendChild(foodElement);
}

function generateRandomPosition() {
    let newFoodPosition;

    while (
        newFoodPosition === undefined ||
        snakeCollision(newFoodPosition)
    ) {
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition;
}

export function resetScore() {
    score = 0;
    const pontuacaoElement = document.getElementById("pontuacao");
    if (pontuacaoElement) {
        pontuacaoElement.textContent = `Pontos: 0`;
    }
}