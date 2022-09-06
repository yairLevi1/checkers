import { Piece } from './piece'

export class PossibleMove {
    constructor(public piece: Piece, public newX: number, public newY: number) { }
}