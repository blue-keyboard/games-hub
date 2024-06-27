import { winMessage } from '../GameEnd/GameEnd'
import { Memorygameboard } from './MemoryGameBoard/MemoryGameBoard'
import './Memorygame.css'

export const Memorygame = localStorage.getItem('memorygame-win')
   ? `
     <div class="memorygame-wrapper hide">
         ${winMessage}
     </div>
 `
   : `
     <div class="memorygame-wrapper hide">
          ${Memorygameboard}
     </div>
 `
