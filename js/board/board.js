const board_size = 21;
export const gameboard = document.getElementById('game-board');

export function generateRandomBoardPosition(){
    return{
        x: Math.floor(Math.random() * board_size) + 1,
        y: Math.floor(Math.random() * board_size) + 1
    }
}