import { Board } from './board'
import { Ai } from './ai'
import { PossibleMove } from './models/possibleMove'
import { Piece } from './models/piece'


export class Game {
    constructor(private board: Board, private ai: Ai) { }

    getPossibleMovesToPiece(piece: Piece): PossibleMove[] {
        throw new Error('Not implemented')
    }

    getAllPossibleMoves(): PossibleMove[] {
        throw new Error('Not implemented')
    }

    whoIsWinner(): 'black' | 'white' | undefined {
        throw new Error('Not implemented')
    }

    movePiece(piece: Piece, possibleMove: PossibleMove) {
        throw new Error('Not implemented')
    }
}