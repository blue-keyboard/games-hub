import { shuffleArray } from '../../../../utils'
import { updateScore } from '../../../Score/Score'
import { winMessage } from '../../GameEnd/GameEnd'
import { memory } from '../memorygameObject'
import './MemorygameBoard.css'

export const Memorygameboard = `
    <div class="memorygame-board">
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
        <div class="cell hide"></div>
    </div>
`
let waitDisplay = false
let cells

export const placeImagesInMemoryGameBoard = () => {
   cells = document.querySelectorAll('.memorygame-board .cell')
   const images = shuffleArray([...memory.images, ...memory.images])
   cells.forEach((cell) => {
      const img = images.shift()
      cell.innerHTML = img.svg
      cell.id = img.id
      cell.addEventListener('click', onMemorygameCellClick)
   })
}

const onMemorygameCellClick = (event) => {
   if (waitDisplay) return
   const cell = event.target
   cell.classList.remove('hide')
   cell.classList.add('show')

   if (memory.currentImageId === null) {
      memory.currentImageId = cell.id
      memory.currentCellDisplayed = cell
   } else {
      if (memory.currentImageId === cell.id) {
         memory.pairsCount++
         if (memory.pairsCount === 10) {
            handleGameEnd()
         } else {
            handlePairMatch(cell, memory.currentCellDisplayed)
         }
      } else {
         handleMatchError(cell, memory.currentCellDisplayed)
      }
   }
}

const handlePairMatch = (cell1, cell2) => {
   cell1.classList.add('piece-animation')
   cell2.classList.add('piece-animation')
   memory.currentImageId = null
   memory.currentCellDisplayed = null
}

const handleMatchError = (cell1, cell2) => {
   waitDisplay = true
   setTimeout(() => {
      cell1.classList.remove('show')
      cell2.classList.remove('show')
      cell1.classList.add('hide')
      cell2.classList.add('hide')
      memory.currentImageId = null
      memory.currentCellDisplayed = null
      waitDisplay = false
   }, 1000)
}

const handleGameEnd = () => {
   cells.forEach((cell) => {
      cell.classList.add('end-animation')
   })
   setTimeout(() => {
      updateScore('memorygame')
   }, 1000)
}
