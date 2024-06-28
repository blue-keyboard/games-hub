import { updateScore } from '../../../Score/Score'
import { loseMessage, tryAgainHandleClick } from '../../GameEnd/GameEnd'
import { RPS } from '../RockpaperscissorsObject'
import './RpsChoose.css'

export const RpsChoose = `
    <div class="rps-choose">
        <div class="paper">${RPS.moves[1].svg}</div>
        <div class="rock">${RPS.moves[0].svg}</div>
        <div class="scissors">${RPS.moves[2].svg}</div>
    </div>
`

let moveOptions
let playerMoveDisplay
let computerMoveDisplay
let playerScoreDisplay
let computerScoreDisplay
let waitTurn = false

export const addRpsChooseEventListeners = () => {
   moveOptions = document.querySelectorAll('.rps-choose > div')
   moveOptions.forEach((option) => {
      option.addEventListener('click', handleRpsOptionClick)
   })
   playerMoveDisplay = document.querySelector('.rps-player-move')
   computerMoveDisplay = document.querySelector('.rps-computer-move')
   playerScoreDisplay = document.querySelector('.rps-player-score')
   computerScoreDisplay = document.querySelector('.rps-computer-score')
}

const handleRpsOptionClick = (event) => {
   if (waitTurn) return
   waitTurn = true
   const playerMove = event.target.className
   const playerSvg = RPS.moves.find((el) => el.move === playerMove).svg
   const computerChoose = RPS.moves[Math.floor(Math.random() * 3)]
   const [computerMove, computerSvg] = [computerChoose.move, computerChoose.svg]
   setTimeout(() => {
      playerMoveDisplay.innerHTML = playerSvg
      computerMoveDisplay.innerHTML = computerSvg
   }, 1000)
   setTimeout(() => {
      const result = RPS.getWinner(playerMove, computerMove)
      if (result === 'tie') {
         setTimeout(() => {
            playerMoveDisplay.innerHTML = ''
            computerMoveDisplay.innerHTML = ''
            waitTurn = false
         }, 500)
      } else {
         displayRpsTurnWinner(result)
      }
   }, 2000)
}

const displayRpsTurnWinner = (player) => {
   if (player === 'player') {
      playerMoveDisplay.firstElementChild.style.color = '#ac61b9'
      playerScoreDisplay.innerHTML = RPS.playerScore
   } else if (player === 'computer') {
      computerMoveDisplay.firstElementChild.style.color = '#ac61b9'
      computerScoreDisplay.innerHTML = RPS.computerScore
   }
   if (RPS.playerScore === 3 || RPS.computerScore === 3) {
      setTimeout(() => {
         handleRpsGameEnd(player)
      }, 1000)
   } else {
      setTimeout(() => {
         playerMoveDisplay.innerHTML = ''
         computerMoveDisplay.innerHTML = ''
         waitTurn = false
      }, 1200)
   }
}

const handleRpsGameEnd = (player) => {
   if (player === 'player') {
      playerScoreDisplay.style.color = '#ac61b9'
      setTimeout(() => {
         moveOptions.forEach((option) => {
            option.innerHTML = RPS.clapSvg
            option.classList.add('rps-end-animation')
         })
         setTimeout(() => {
            updateScore('rockpaperscissors')
         }, 1000)
      }, 1500)
   } else {
      computerScoreDisplay.style.color = '#ac61b9'
      setTimeout(() => {
         document.querySelector('.rockpaperscissors-wrapper').innerHTML =
            loseMessage
         tryAgainHandleClick('rockpaperscissors-wrapper')
         waitTurn = false
      }, 1500)
   }
}
