import {gameboard, generateRandomBoardPosition} from '../board/board.js'
import {colisao as snakeCollision, aumentarCobra} from '../snake/snakeBody.js'

export const cresceCobra = 1;

let foodPosition = generateRandomPosition();

export function update(){
    if (snakeCollision(foodPosition)){
        aumentarCobra(cresceCobra);
        foodPosition = generateRandomPosition();
    }
}

export function draw(){
    const foodElement =  document.createElement('div');

        foodElement.classList.add('food')

        //configurar a posição 
        foodElement.style.gridRowStart = foodPosition.y;
        foodElement.style.gridColumnStart = foodPosition.x;

        //manipular o dom
        gameboard.appendChild(foodElement)
}

function generateRandomPosition(){
    let newFoodPosition;

    while(newFoodPosition === undefined || snakeCollision(newFoodPosition)){
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition;
}