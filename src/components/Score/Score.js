import { globals } from '../../globals'
import './Score.css'

export const Score = `
    <div class="score-wrapper">
        <div class="score-text">Score:</div>
        <div class="score-trophies">
            ${
               localStorage.getItem('tictactoe-win')
                  ? `<div class="trophy-1 won" >${globals.TROPHY_SVG}</div>`
                  : `<div class="trophy-1" >${globals.TROPHY_SVG}</div>`
            }
            <div class="trophy-2" >${globals.TROPHY_SVG}</div>
            <div class="trophy-3" >${globals.TROPHY_SVG}</div>
        </div>
    </div>
`

export const updateScore = (game) => {
   if (game === 'tictactoe') {
      document.querySelector('.trophy-1').classList.add('won')
   } else if (game === 'memorygame') {
      document.querySelector('.trophy-2').classList.add('won')
   } else if (game === 'rockpaperscissors') {
      document.querySelector('.trophy-3').classList.add('won')
   }
}
