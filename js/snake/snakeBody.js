import { gameboard, isOutsideBoard } from "../board/board.js";
import { getInputDirection, updateLastInputDirection } from "./input.js";

export let snake_speed = 5;
let novosSegmentos = 0;
let corCobra = 'verde';

export const snakeBody = [
    { x: 11, y: 11 }
];

export function setSnakeSpeed(speed) {
    snake_speed = speed;
}

export function setCorCobra(cor) {
    corCobra = cor;
}

export function update() {
    adicionarACobra();

    const inputDirection = getInputDirection();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

    updateLastInputDirection();
}

export function draw() {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake', corCobra);
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        gameboard.appendChild(snakeElement);
    });
}

export function colisao(position) {
    return snakeBody.some(segment => {
        return position.x === segment.x && position.y === segment.y;
    });
}

export function aumentarCobra(quantidade) {
    novosSegmentos += quantidade;
}

export function adicionarACobra() {
    if (novosSegmentos > 0) {
        snakeBody.push({
            ...snakeBody[snakeBody.length - 1]
        });
        novosSegmentos -= 1;
    }
}

export function getSnakeSpeed() {
    return snake_speed;
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function hasSelfColision() {
    const snakeHead = snakeBody[0];

    return snakeBody.some((segment, index) => {
        if (index === 0) return false;
        return snakeHead.x === segment.x && snakeHead.y === segment.y;
    });
}
