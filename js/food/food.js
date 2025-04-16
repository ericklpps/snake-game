import { gameboard, generateRandomBoardPosition } from '../board/board.js';
import { colisao as snakeCollision, aumentarCobra } from '../snake/snakeBody.js';

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
            setCobraRoxa();
        } else {
            setCobraVerde();
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

function setCobraRoxa() {
    document.querySelectorAll('.snake').forEach(segment => {
        segment.classList.remove('verde');
        segment.classList.add('roxa');
    });
}

function setCobraVerde() {
    document.querySelectorAll('.snake').forEach(segment => {
        segment.classList.remove('roxa');
        segment.classList.add('verde');
    });
}
