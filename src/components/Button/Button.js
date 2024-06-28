import './Button.css'

export const createButton = (text, className = 'button') =>
   `<div class="${className}">${text}</div>`
