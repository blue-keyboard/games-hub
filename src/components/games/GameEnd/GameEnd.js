import { createButton } from '../../Button/Button'
import { RpsBoard } from '../Rock-Papers-Scissors/RpsBoard/RpsBoard'
import {
   RpsChoose,
   addRpsChooseEventListeners
} from '../Rock-Papers-Scissors/RpsChoose/RpsChoose'
import { RpsScore } from '../Rock-Papers-Scissors/RpsScore/RpsScore'

import {
   TictactoeBoard,
   tictactoeboardAddEventListeners
} from '../Tic-Tac-Toe/TicTacToeBoard/TicTacToeBoard'
import { TictactoeTurn } from '../Tic-Tac-Toe/TictactoeTurn/TictactoeTurn'
import { tictactoeGameState } from '../Tic-Tac-Toe/tictactoeGameState'
import './GameEnd.css'
import { RPS } from '../Rock-Papers-Scissors/RockpaperscissorsObject'

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
      } else if (gameBoardWrapper === 'rockpaperscissors-wrapper') {
         gameBoard.innerHTML = `
            ${RpsScore}
            ${RpsBoard}
            ${RpsChoose}
        `
         addRpsChooseEventListeners()
         RPS.playerScore = 0
         RPS.computerScore = 0
      }
   })
}
