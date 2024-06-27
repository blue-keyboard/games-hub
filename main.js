import './style.css'
import { Header } from './src/components/Header/Header'
import { Nav } from './src/components/Nav/Nav'
import { addNavButtonsEventListeners } from './src/components/Button/Button'
import { Gameboard } from './src/components/Gameboard/Gameboard'
import { Score } from './src/components/Score/Score'
import { tictactoeboardAddEventListeners } from './src/components/games/Tic-Tac-Toe/TicTacToeBoard/TicTacToeBoard'

const app = document.querySelector('#app')

app.innerHTML = `
    ${Header}
    ${Nav}
    ${Gameboard}
    ${Score}
`

document.querySelector('header').addEventListener('click', () => {
   localStorage.clear()
   location.reload()
})

addNavButtonsEventListeners()
tictactoeboardAddEventListeners()
