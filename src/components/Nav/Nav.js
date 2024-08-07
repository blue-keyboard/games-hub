import { globals } from '../../globals'
import { createButton } from '../Button/Button'
import './Nav.css'

let navInnerHTML = ''

for (let gameName of globals.GAMES) {
   const button = createButton(gameName)
   navInnerHTML += button
}

export const Nav = `<div class="nav">${navInnerHTML}</div>`

export const addNavButtonsEventListeners = () => {
   const buttons = document.querySelectorAll('.button')
   const gameWrappers = document.querySelectorAll('.gameboard > div')

   document.querySelectorAll('.button').forEach((button) => {
      if (button.innerHTML === 'Tic Tac Toe') {
         button.classList.add('active')
      }

      // Tic Tac Toe => tictactoe-wrapper
      const gameWrapperClass =
         button.innerHTML.replace(/\s+/g, '').toLowerCase() + '-wrapper'
      const gameWrapper = document.querySelector(`.${gameWrapperClass}`)

      button.addEventListener('click', (event) => {
         if (button.classList.contains('active')) return
         gameWrappers.forEach((gw) => {
            if (gw.classList.contains('show')) {
               gw.classList.remove('show')
               gw.classList.add('hide')
            }
         })
         buttons.forEach((button) => button.classList.remove('active'))
         button.classList.add('active')
         gameWrapper.classList.remove('hide')
         gameWrapper.classList.add('show')
      })
   })
}
