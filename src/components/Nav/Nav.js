import { globals } from '../../globals'
import { createButton } from '../Button/Button'
import './Nav.css'

let navInnerHTML = ''

for (let gameName of globals.GAMES) {
   const button = createButton(gameName)
   navInnerHTML += button
}

export const Nav = `<div class="nav">${navInnerHTML}</div>`
