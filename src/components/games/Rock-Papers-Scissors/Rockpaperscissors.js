import './Rockpaperscissors.css'
import { RpsBoard } from './RpsBoard/RpsBoard'
import { RpsChoose } from './RpsChoose/RpsChoose'
import { RpsScore } from './RpsScore/RpsScore'

export const Rockpaperscissors = localStorage.getItem('rockpaperscissors-win')
   ? `
        <div class="rockpaperscissors-wrapper hide">
            ${localStorage.getItem('saved-rockpaperscissors')}
        </div>
    `
   : `<div class="rockpaperscissors-wrapper hide">
        ${RpsScore}
        ${RpsBoard}
        ${RpsChoose}
    </div>
`
