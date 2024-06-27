import './TictactoeTurn.css'

export const TictactoeTurn = `
    <div class="tictactoe-turn">
          <div class="tictactoe-turn--player active">Player turn</div>
          <div class="tictactoe-turn--computer">Computer turn</div>
    </div>
`

export const switchPlayerBanner = () => {
   const playerBanner = document.querySelector('.tictactoe-turn--player')
   const computerBanner = document.querySelector('.tictactoe-turn--computer')

   if (playerBanner.classList.contains('active')) {
      computerBanner.classList.add('active')
      playerBanner.classList.remove('active')
   } else {
      playerBanner.classList.add('active')
      computerBanner.classList.remove('active')
   }
}
