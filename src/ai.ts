
import { Board } from './board'
import { PossibleMove } from './models/possibleMove'


export class Ai {
    constructor(private board: Board) { }

    getBestNextMoves(): PossibleMove {
        throw new Error('Not implemented')
    }
}