import { gameboard } from "../board/board.js";
import { getInputDirection } from "./input.js";

export const snake_speed = 5;

let novosSegmentos = 0;

export const snakeBody = [
    {x: 11, y: 11}
]

export function update(){
    adicionarACobra();
    
    const inputDirection = getInputDirection();

    for (let i = snakeBody.length -2; i >=0; i--){
        snakeBody[i + 1] = { ...snakeBody[i]};
    }

    //movimento da cabeça da cobra
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};

export function draw(){
    snakeBody.forEach(segment =>{
        //criar o elemento
        const snakeElement = document.createElement('div');

        //configurar css
        snakeElement.classList.add('snake')

        //configurar a posição 
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        //manipular o dom
        gameboard.appendChild(snakeElement)
    });
};

export function colisao(position){
    return snakeBody.some(segment =>{
        return position.x === segment.x && position.y === segment.y;
    });
}

//expandindo a cobra
export function aumentarCobra(quantidade){
    novosSegmentos += quantidade;
}

export function adicionarACobra(){
    if(novosSegmentos > 0){
        snakeBody.push({
            ...snakeBody[snakeBody.length -1],
        });
        novosSegmentos -= 1;
    };
}