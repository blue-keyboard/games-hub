import { globals } from '../../../globals'
import { createButton } from '../../Button/Button'
import {
   TictactoeBoard,
   tictactoeboardAddEventListeners
} from '../Tic-Tac-Toe/TicTacToeBoard/TicTacToeBoard'
import { TictactoeTurn } from '../Tic-Tac-Toe/TictactoeTurn/TictactoeTurn'
import { tictactoeGameState } from '../Tic-Tac-Toe/tictactoeGameState'
import './GameEnd.css'

export const winMessage = `
    <div class="message">
        <div class="message--text">You won!</div>
        ${globals.TROPHY_SVG}
    </div>
`

export const loseMessage = `
    <div class="message">
        <div class="message--text">You Lost!</div>
        ${createButton('Try again!')}
    </div>
`

export const tieMessage = `
    <div class="message">
        <div class="message--text">Tie!</div>
        ${createButton('Try again!')}
    </div>
`

export const tryAgainHandleClick = (gameBoardWrapper) => {
   const gameBoard = document.querySelector(`.${gameBoardWrapper}`)
   const button = document.querySelector(`.${gameBoardWrapper} .button`)
   button.addEventListener('click', () => {
      if (gameBoardWrapper === 'tictactoe-wrapper') {
         gameBoard.innerHTML = `
                ${TictactoeTurn}
                ${TictactoeBoard}
            `
         tictactoeboardAddEventListeners()
         tictactoeGameState.reset()
      }
   })
}
