let nextDirection = { x: 0, y: 0 };
let lastDirection = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            nextDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            nextDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            nextDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            nextDirection = { x: 1, y: 0 };
            break;
    }
});

export function getInputDirection() {
    if (
        (nextDirection.x !== 0 && nextDirection.x === -lastDirection.x) ||
        (nextDirection.y !== 0 && nextDirection.y === -lastDirection.y)
    ) {
        return lastDirection;
    }

    lastDirection = nextDirection;
    return nextDirection;
}
