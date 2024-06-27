import { Memorygame } from '../games/Memory-Game/Memorygame'
import { Rockpaperscissors } from '../games/Rock-Papers-Scissors/Rockpaperscissors'
import { Tictactoe } from '../games/Tic-Tac-Toe/Tictactoe'
import './Gameboard.css'

export const Gameboard = `
    <div class="gameboard-wrapper">
        <div class="gameboard">
            ${Tictactoe}
            ${Memorygame}
            ${Rockpaperscissors}
        </div>
    </div>
`
