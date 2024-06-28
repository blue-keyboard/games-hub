import './style.css'
import { Header } from './src/components/Header/Header'
import { Nav, addNavButtonsEventListeners } from './src/components/Nav/Nav'
import { Gameboard } from './src/components/Gameboard/Gameboard'
import { Score } from './src/components/Score/Score'
import { tictactoeboardAddEventListeners } from './src/components/games/Tic-Tac-Toe/TicTacToeBoard/TicTacToeBoard'
import { placeImagesInMemoryGameBoard } from './src/components/games/Memory-Game/MemoryGameBoard/MemoryGameBoard'
import { addRpsChooseEventListeners } from './src/components/games/Rock-Papers-Scissors/RpsChoose/RpsChoose'

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
placeImagesInMemoryGameBoard()
addRpsChooseEventListeners()
