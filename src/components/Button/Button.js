import './Button.css'

export const createButton = (text, className = 'button') =>
   `<div class="${className}">${text}</div>`

export const addButtonsEventListeners = () => {
   const buttons = document.querySelectorAll('.button')
   const gameWrappers = document.querySelectorAll('.gameboard > div')

   document.querySelectorAll('.button').forEach((button) => {
      console.log(button)

      if (button.innerHTML === 'Tic Tac Toe') {
         button.classList.add('active')
      }

      // Tic Tac Toe => tictactoe-wrapper
      const gameWrapperClass =
         button.innerHTML.replace(/\s+/g, '').toLowerCase() + '-wrapper'
      const gameWrapper = document.querySelector(`.${gameWrapperClass}`)

      button.addEventListener('click', () => {
         buttons.forEach((button) => button.classList.remove('active'))
         gameWrappers.forEach((gw) => gw.classList.remove('show'))
         button.classList.add('active')
         gameWrapper.classList.add('show')
      })
   })
}
