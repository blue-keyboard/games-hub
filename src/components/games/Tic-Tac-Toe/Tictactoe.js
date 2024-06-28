import './Tictactoe.css'
import { TictactoeBoard } from './TicTacToeBoard/TicTacToeBoard'
import { TictactoeTurn } from './TictactoeTurn/TictactoeTurn'

export const Tictactoe = localStorage.getItem('tictactoe-win')
   ? `  
        <div class="tictactoe-wrapper show">
            ${localStorage.getItem('saved-tictactoe')}
        </div>
    `
   : `
        <div class="tictactoe-wrapper show">
            ${TictactoeTurn}
            ${TictactoeBoard}
        </div>
    `
