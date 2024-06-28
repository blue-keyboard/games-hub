import { Memorygameboard } from './MemoryGameBoard/MemoryGameBoard'
import './Memorygame.css'

export const Memorygame = localStorage.getItem('memorygame-win')
   ? `
     <div class="memorygame-wrapper hide">
         ${localStorage.getItem('saved-memorygame')}
     </div>
 `
   : `
     <div class="memorygame-wrapper hide">
          ${Memorygameboard}
     </div>
 `
