

function createEmptyBoard() {
    const board = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
    return board
}
let cnt = 0;
function initStaringGame() {
    const board = createEmptyBoard();

    for (let y = 0; y < 3; y++) {
        for (var x = y % 2 != 0 ? 1 : 0; x < 8; x += 2) {
            board[y][x] = 1;
        }
    }

    for (let y = 5; y < 8; y++) {
        for (let x = y % 2 != 0 ? 1 : 0; x < 8; x += 2) {
            board[y][x] = 2;
        }
    }
    return board;


}
console.log(initStaringGame());