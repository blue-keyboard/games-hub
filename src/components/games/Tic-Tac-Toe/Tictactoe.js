import { winMessage } from '../GameEnd/GameEnd'
import './Tictactoe.css'
import {
   TictactoeBoard,
   tictactoeboardAddEventListeners
} from './TicTacToeBoard/TicTacToeBoard'
import { TictactoeTurn } from './TictactoeTurn/TictactoeTurn'

export const Tictactoe = localStorage.getItem('tictactoe-win')
   ? `
        <div class="tictactoe-wrapper show">
            ${winMessage}
        </div>
    `
   : `
        <div class="tictactoe-wrapper show">
            ${TictactoeTurn}
            ${TictactoeBoard}
        </div>
    `
