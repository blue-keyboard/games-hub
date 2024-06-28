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
            ${
               localStorage.getItem('memorygame-win')
                  ? `<div class="trophy-2 won" >${globals.TROPHY_SVG}</div>`
                  : `<div class="trophy-2" >${globals.TROPHY_SVG}</div>`
            }
            ${
               localStorage.getItem('rockpaperscissors-win')
                  ? `<div class="trophy-3 won">${globals.TROPHY_SVG}</div>`
                  : `<div class="trophy-3">${globals.TROPHY_SVG}</div>`
            }
        </div>
    </div>
`

export const updateScore = (game) => {
   if (game === 'tictactoe') {
      localStorage.setItem(
         'saved-tictactoe',
         document.querySelector('.tictactoe-wrapper').innerHTML
      )
      localStorage.setItem('tictactoe-win', true)
      document.querySelector('.trophy-1').classList.add('won')
   } else if (game === 'memorygame') {
      localStorage.setItem(
         'saved-memorygame',
         document.querySelector('.memorygame-wrapper').innerHTML
      )
      localStorage.setItem('memorygame-win', true)
      document.querySelector('.trophy-2').classList.add('won')
   } else if (game === 'rockpaperscissors') {
      localStorage.setItem(
         'saved-rockpaperscissors',
         document.querySelector('.rockpaperscissors-wrapper').innerHTML
      )
      localStorage.setItem('rockpaperscissors-win', true)
      document.querySelector('.trophy-3').classList.add('won')
   }
   globals.score++
}
