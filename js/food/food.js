import { gameboard, generateRandomBoardPosition } from '../board/board.js';
import { colisao as snakeCollision, aumentarCobra } from '../snake/snakeBody.js';


export const cresceCobra = 1;
let foodPosition = generateRandomPosition();

let score = 0;

export function update() {
    if (snakeCollision(foodPosition)) {
        aumentarCobra(cresceCobra);
        score++; 

        const pontuacaoElement = document.getElementById("pontuacao");
        if (pontuacaoElement) {
            pontuacaoElement.textContent = `Pontos: ${score}`;
        }

        foodPosition = generateRandomPosition();
    }
}

export function getScore() {
    return score;
}

export function draw() {
    const foodElement = document.createElement('div');

    foodElement.classList.add('food');

    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;

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
