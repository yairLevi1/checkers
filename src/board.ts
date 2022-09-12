import { Piece } from './models/piece'

export class Board {
    matrix: (Piece | undefined)[][]

    constructor() {
        this.matrix = []
        for (let i = 0; i < 8; i++) {
            this.matrix[i] = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
        }
    }

    initStaringPosition() {
        for (let y = 0; y < 3; y++) {
            for (var x = y % 2 != 0 ? 1 : 0; x < 8; x += 2) {
                this.addPiece(new Piece(x, y, true, false))
            }
        }

        for (let y = 5; y < 8; y++) {
            for (let x = y % 2 != 0 ? 1 : 0; x < 8; x += 2) {
                this.addPiece(new Piece(x, y, false, false))
            }
        }
    }

    cloneBoard(): Board {
        throw new Error('Not implemented')
    }

    printBoardToConsole() {
        throw new Error('Not implemented')
    }

    removePiece(piece: Piece) {
        throw new Error('Not implemented')
    }

    addPiece(piece: Piece) {
        this.matrix[piece.y]![piece.x] = piece
    }
}