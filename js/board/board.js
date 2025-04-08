const board_size = 21;
export const gameboard = document.getElementById('game-board');

export function generateRandomBoardPosition(){
    return{
        x: Math.floor(Math.random() * board_size) + 1,
        y: Math.floor(Math.random() * board_size) + 1
    }
}

export function isOutsideBoard(position){
    return position.x > board_size || position.x < 1 ||
            position.y > board_size || position.y < 1;
}