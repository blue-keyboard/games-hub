import { mostRepeatedElement } from '../../../utils'
import {
   handleTictactoeCellClick,
   oSvg,
   xSvg
} from './TicTacToeBoard/TicTacToeBoard'
import { tictactoeGameState } from './tictactoeGameState'

const gameState = tictactoeGameState

export const handleMove = (player, cell = false) => {
   if (player === 'computer') {
      const move = computerMove()
      console.log(move)
      cell = document.getElementById(move)
   }
   cell.removeEventListener('click', handleTictactoeCellClick)
   cell.style.cursor = 'unset'
   gameState.availableMoves = gameState.availableMoves.filter(
      (avMove) => avMove !== cell.id
   )
   const [i, j] = [cell.id[0], cell.id[1]]
   gameState.board[i][j] = player === 'player' ? 'O' : 'X'
   cell.innerHTML = player === 'player' ? oSvg : xSvg
   gameState.checkLines()
}

export const computerMove = () => {
   if (gameState.computerWinningMoves.length > 0) {
      return gameState.computerWinningMoves[
         Math.floor(Math.random() * gameState.computerWinningMoves.length)
      ].join('')
   } else if (gameState.playerWinningMoves.length > 0) {
      return gameState.playerWinningMoves[
         Math.floor(Math.random() * gameState.playerWinningMoves.length)
      ].join('')
   } else if (gameState.computerFollowUps.length > 0) {
      const parsedComp = gameState.computerFollowUps.map((move) =>
         move.join('')
      )
      const combinedArrays = [
         ...parsedComp,
         ...gameState.playerFollowUps
            .filter((move) => parsedComp.includes(move.join('')))
            .map((move) => move.join(''))
      ]
      console.log(combinedArrays)
      const mostRepeated = mostRepeatedElement(combinedArrays)
      console.log(mostRepeated)

      return mostRepeated
   } else if (gameState.playerFollowUps.length > 0) {
      console.log(
         'playerFollowUps: ',
         JSON.stringify(gameState.playerFollowUps)
      )
      return mostRepeatedElement(
         gameState.playerFollowUps.map((move) => move.join(''))
      )
   } else {
      return gameState.availableMoves[
         Math.floor(Math.random() * gameState.availableMoves.length)
      ]
   }
}
