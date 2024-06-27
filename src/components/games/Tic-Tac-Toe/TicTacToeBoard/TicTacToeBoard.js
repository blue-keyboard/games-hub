import './TictactoeBoard.css'
import { tictactoeGameState } from '../tictactoeGameState'
import { switchPlayerBanner } from '../TictactoeTurn/TictactoeTurn'
import {
   loseMessage,
   tieMessage,
   tryAgainHandleClick,
   winMessage
} from '../../GameEnd/GameEnd'
import { updateScore } from '../../../Score/Score'
import { handleMove } from '../tictactoeGameLogic'

const gameState = tictactoeGameState
let cells
let playerTurn = true

export const oSvg = `
    <svg viewBox="0 0 16 16" id="meteor-icon-kit__regular-circle-s" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path fill-rule="evenodd" currentclip-rule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16zM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14z" fill="currentColor"></path></g></svg>
`
export const xSvg = `
    <svg fill="currentColor" width="203px" height="203px" viewBox="0 0 12.00 12.00" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.41999999999999993"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"></path> </g></svg>
`

export const TictactoeBoard = `
    <div class="tictactoe-board">
        <div id="00" class="cell"></div>
        <div id="01" class="cell"></div>
        <div id="02" class="cell"></div>
        <div id="10" class="cell"></div>
        <div id="11" class="cell"></div>
        <div id="12" class="cell"></div>
        <div id="20" class="cell"></div>
        <div id="21" class="cell"></div>
        <div id="22" class="cell"></div>
    </div>
`

export const tictactoeboardAddEventListeners = () => {
   cells = document.querySelectorAll('.tictactoe-board .cell')
   cells.forEach((cell) =>
      cell.addEventListener('click', handleTictactoeCellClick)
   )
}

export const handleTictactoeCellClick = (event) => {
   if (!playerTurn) return
   const cell = event.target
   handleMove('player', cell)

   if (gameState.playerWon) {
      handleGameEnd('win')
      return
   } else if (gameState.availableMoves.length === 0) {
      handleGameEnd('tie')
      return
   }
   playerTurn = false
   switchPlayerBanner()

   setTimeout(() => {
      handleMove('computer')
      playerTurn = true
      if (gameState.computerWon) {
         handleGameEnd('lose')
         return
      }
      switchPlayerBanner()
   }, 1000)
}

const handleGameEnd = (result) => {
   cells.forEach((cell) => {
      cell.style.cursor = 'unset'
      cell.removeEventListener('click', handleTictactoeCellClick)
   })
   setTimeout(() => {
      gameState.winningLine.forEach((cell) => {
         const cellDiv = document.getElementById(cell.join(''))
         cellDiv.style.color = '#ac61b9'
      })
   }, 400)
   setTimeout(() => {
      const gameboardWrapper = document.querySelector('.tictactoe-wrapper')
      if (result === 'win') {
         gameboardWrapper.innerHTML = winMessage
         updateScore('tictactoe')
      } else {
         gameboardWrapper.innerHTML =
            result === 'lose' ? loseMessage : tieMessage
         tryAgainHandleClick('tictactoe-wrapper')
      }
   }, 1600)
}
