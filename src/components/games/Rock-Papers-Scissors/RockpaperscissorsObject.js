export const RPS = {
   playerScore: 0,
   computerScore: 0,
   moves: [
      {
         move: 'rock',
         svg: `<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path d="M 15 6 C 13.9375 6 13.003906 6.5625 12.46875 7.40625 C 12.03125 7.15625 11.535156 7 11 7 C 9.355469 7 8 8.355469 8 10 L 8 13.65625 L 5.90625 16.34375 C 4.628906 17.996094 4.714844 20.367188 6.09375 21.9375 L 8.46875 24.625 C 9.796875 26.136719 11.707031 27 13.71875 27 L 19 27 C 22.855469 27 26 23.855469 26 20 L 26 11 C 26 9.355469 24.644531 8 23 8 C 22.464844 8 21.96875 8.15625 21.53125 8.40625 C 20.996094 7.5625 20.0625 7 19 7 C 18.464844 7 17.96875 7.15625 17.53125 7.40625 C 16.996094 6.5625 16.0625 6 15 6 Z M 15 8 C 15.566406 8 16 8.433594 16 9 L 16 12 L 18 12 L 18 10 C 18 9.433594 18.433594 9 19 9 C 19.566406 9 20 9.433594 20 10 L 20 12 L 22 12 L 22 11 C 22 10.433594 22.433594 10 23 10 C 23.566406 10 24 10.433594 24 11 L 24 20 C 24 22.773438 21.773438 25 19 25 L 13.71875 25 C 12.28125 25 10.917969 24.394531 9.96875 23.3125 L 7.59375 20.59375 C 6.839844 19.734375 6.800781 18.5 7.5 17.59375 L 8 16.9375 L 8 18 L 10 18 L 10 10 C 10 9.433594 10.433594 9 11 9 C 11.566406 9 12 9.433594 12 10 L 12 12 L 14 12 L 14 9 C 14 8.433594 14.433594 8 15 8 Z"></path></g></svg>`
      },
      {
         move: 'paper',
         svg: `<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path d="M 16 2 C 14.617188 2 13.46875 2.96875 13.125 4.25 C 12.773438 4.105469 12.402344 4 12 4 C 10.355469 4 9 5.355469 9 7 L 9 17.75 L 8.125 16.875 C 6.960938 15.710938 5.039063 15.710938 3.875 16.875 C 2.710938 18.039063 2.710938 19.960938 3.875 21.125 L 10.65625 27.90625 C 11.832031 29.078125 13.457031 30 15.375 30 L 20 30 C 23.855469 30 27 26.855469 27 23 L 27 11 C 27 9.355469 25.644531 8 24 8 C 23.648438 8 23.316406 8.074219 23 8.1875 L 23 7 C 23 5.355469 21.644531 4 20 4 C 19.597656 4 19.226563 4.105469 18.875 4.25 C 18.53125 2.96875 17.382813 2 16 2 Z M 16 4 C 16.566406 4 17 4.433594 17 5 L 17 15 L 19 15 L 19 7 C 19 6.433594 19.433594 6 20 6 C 20.566406 6 21 6.433594 21 7 L 21 15 L 23 15 L 23 11 C 23 10.433594 23.433594 10 24 10 C 24.566406 10 25 10.433594 25 11 L 25 23 C 25 25.773438 22.773438 28 20 28 L 15.375 28 C 14.101563 28 13.007813 27.378906 12.09375 26.46875 L 5.28125 19.71875 C 4.882813 19.320313 4.882813 18.679688 5.28125 18.28125 C 5.679688 17.882813 6.320313 17.882813 6.71875 18.28125 L 9.28125 20.875 L 11 22.59375 L 11 7 C 11 6.433594 11.433594 6 12 6 C 12.566406 6 13 6.433594 13 7 L 13 15 L 15 15 L 15 5 C 15 4.433594 15.433594 4 16 4 Z"></path></g></svg>`
      },
      {
         move: 'scissors',
         svg: `<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path d="M 15 2 C 13.355469 2 12 3.355469 12 5 L 12 6.53125 L 11.875 6.125 C 11.398438 4.550781 9.699219 3.648438 8.125 4.125 C 6.550781 4.601563 5.648438 6.300781 6.125 7.875 L 8.71875 16.3125 C 8.53125 16.386719 8.328125 16.472656 8.125 16.59375 C 7.289063 17.09375 6.34375 18.105469 6.0625 19.71875 C 5.851563 20.914063 6.082031 21.964844 6.25 22.53125 C 6.25 22.542969 6.25 22.550781 6.25 22.5625 L 7.03125 25.0625 C 7.933594 27.996094 10.652344 30 13.71875 30 L 19 30 C 22.855469 30 26 26.855469 26 23 L 26 13.09375 C 26 13.050781 26 13.011719 26 12.96875 C 26 12.949219 26 12.925781 26 12.90625 C 26 12.894531 26 12.886719 26 12.875 C 25.992188 12.84375 25.980469 12.8125 25.96875 12.78125 C 25.878906 11.679688 25.210938 10.652344 24.125 10.21875 C 23.371094 9.917969 22.578125 9.960938 21.875 10.25 C 21.550781 9.636719 21.027344 9.117188 20.34375 8.84375 C 19.558594 8.53125 18.722656 8.582031 18 8.90625 L 18 5 C 18 3.355469 16.644531 2 15 2 Z M 15 4 C 15.566406 4 16 4.433594 16 5 L 16 11.59375 L 14.96875 14.21875 C 14.820313 14.589844 14.75 14.992188 14.75 15.375 L 10.65625 15.90625 L 8.0625 7.28125 C 7.898438 6.742188 8.179688 6.195313 8.71875 6.03125 C 9.257813 5.867188 9.804688 6.179688 9.96875 6.71875 L 12.03125 13.5625 L 13.15625 13.21875 L 14 13.21875 L 14 5 C 14 4.433594 14.433594 4 15 4 Z M 19.1875 10.625 C 19.316406 10.621094 19.464844 10.636719 19.59375 10.6875 C 20.117188 10.898438 20.367188 11.476563 20.15625 12 L 19.09375 14.65625 L 19.09375 14.6875 L 18.6875 15.71875 C 18.667969 15.773438 18.621094 15.796875 18.59375 15.84375 C 18.085938 15.449219 17.445313 15.195313 16.78125 15.1875 C 16.792969 15.113281 16.78125 15.042969 16.8125 14.96875 L 18.3125 11.25 C 18.46875 10.855469 18.800781 10.632813 19.1875 10.625 Z M 22.96875 12 C 23.101563 12 23.242188 12.011719 23.375 12.0625 C 23.769531 12.21875 23.992188 12.574219 24 12.96875 C 24 12.980469 24 12.988281 24 13 C 24 13.121094 23.984375 13.253906 23.9375 13.375 L 22.8125 16.15625 C 22.601563 16.679688 22.023438 16.929688 21.5 16.71875 C 20.976563 16.507813 20.757813 15.929688 20.96875 15.40625 L 22.03125 12.75 C 22.046875 12.710938 22.046875 12.664063 22.0625 12.625 C 22.167969 12.363281 22.359375 12.164063 22.59375 12.0625 C 22.710938 12.011719 22.835938 12 22.96875 12 Z M 16.5 17.15625 C 17.027344 17.03125 17.53125 17.347656 17.65625 17.875 C 17.734375 18.199219 17.691406 18.363281 17.59375 18.53125 C 17.496094 18.699219 17.289063 18.90625 16.84375 19.0625 L 12 20.3125 C 11.703125 20.390625 11.460938 20.601563 11.339844 20.878906 C 11.21875 21.160156 11.230469 21.480469 11.375 21.75 L 12.28125 23.40625 C 12.546875 23.890625 13.15625 24.066406 13.640625 23.796875 C 14.125 23.53125 14.300781 22.921875 14.03125 22.4375 L 13.75 21.9375 L 17.4375 20.96875 C 17.46875 20.960938 17.5 20.949219 17.53125 20.9375 C 18.304688 20.667969 18.925781 20.207031 19.3125 19.5625 C 19.628906 19.035156 19.75 18.421875 19.6875 17.8125 C 19.980469 18.128906 20.355469 18.390625 20.78125 18.5625 C 21.925781 19.019531 23.183594 18.730469 24 17.90625 L 24 23 C 24 25.773438 21.773438 28 19 28 L 13.71875 28 C 11.519531 28 9.585938 26.570313 8.9375 24.46875 L 8.1875 21.96875 C 8.105469 21.699219 7.941406 20.753906 8.0625 20.0625 C 8.25 18.988281 8.71875 18.574219 9.15625 18.3125 C 9.59375 18.050781 9.90625 18.03125 9.90625 18.03125 C 9.925781 18.03125 9.949219 18.03125 9.96875 18.03125 L 16.40625 17.1875 C 16.4375 17.179688 16.46875 17.167969 16.5 17.15625 Z"></path></g></svg>`
      }
   ],

   clapSvg: `
      <svg width="64px" height="64px" viewBox="-0.5 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 1C15.0001 0.447715 14.5524 0 14.0001 0C13.4478 0 13.0001 0.447715 13.0001 1V3C13.0001 3.55228 13.4478 4 14.0001 4C14.5524 4 15.0001 3.55228 15.0001 3V1ZM10.7072 1.29289C10.3167 0.902369 9.68349 0.902369 9.29297 1.29289C8.90244 1.68342 8.90244 2.31658 9.29297 2.70711L10.293 3.70711C10.6835 4.09763 11.3167 4.09763 11.7072 3.70711C12.0977 3.31658 12.0977 2.68342 11.7072 2.29289L10.7072 1.29289ZM18.7072 2.70711C19.0977 2.31658 19.0977 1.68342 18.7072 1.29289C18.3167 0.902369 17.6835 0.902369 17.293 1.29289L16.293 2.29289C15.9024 2.68342 15.9024 3.31658 16.293 3.70711C16.6835 4.09763 17.3167 4.09763 17.7072 3.70711L18.7072 2.70711ZM9.80864 5.39611C9.35019 4.93767 8.73884 4.55126 8.06021 4.41553C7.34665 4.27282 6.54739 4.41472 5.91955 5.04256C5.7265 5.23561 5.57939 5.44487 5.47237 5.66286C5.28204 5.58105 5.0832 5.51719 4.87823 5.47619C4.16467 5.33348 3.36541 5.47538 2.73757 6.10322C2.10972 6.73107 1.96783 7.53032 2.11054 8.24388C2.15154 8.44885 2.2154 8.64769 2.29721 8.83803C2.07922 8.94504 1.86996 9.09215 1.67691 9.2852C1.04906 9.91305 0.907169 10.7123 1.04988 11.4259C1.18561 12.1045 1.57202 12.7158 2.03046 13.1743L2.06719 13.211C1.93173 13.2987 1.80097 13.4038 1.67691 13.5278C1.04906 14.1557 0.907169 14.9549 1.04988 15.6685C1.18561 16.3471 1.57202 16.9585 2.03046 17.4169L6.98021 22.3667C8.99817 24.3846 12.157 24.4841 14.8588 23.0676C16.9438 23.5374 19.2576 23.0196 21.2058 21.0713C22.9322 19.345 24.0001 16.6238 24.0001 14.3642C24.0001 12.0101 22.8954 10.0118 21.0135 8.12529L20.4277 7.52569L20.4278 7.52564L20.4196 7.51743C19.9611 7.05899 19.3498 6.67258 18.6711 6.53685C17.9576 6.39414 17.1583 6.53604 16.5305 7.16388C16.4058 7.28858 16.3 7.42003 16.2117 7.55626L16.1726 7.51743L16.1713 7.5161C15.713 7.05824 15.1021 6.67245 14.4242 6.53685C13.7106 6.39414 12.9114 6.53604 12.2835 7.16388C12.1594 7.28794 12.0544 7.4187 11.9667 7.55417L9.80864 5.39611ZM11.2228 11.053L7.68732 7.51743C7.43865 7.26877 7.29473 6.99624 7.25368 6.79099C7.21962 6.62067 7.2545 6.53604 7.33376 6.45677C7.41302 6.37751 7.49765 6.34263 7.66798 6.37669C7.87323 6.41774 8.14576 6.56167 8.39442 6.81033L12.6362 11.0521L12.6371 11.053L14.7584 13.1743C15.1489 13.5648 15.7821 13.5648 16.1726 13.1743C16.5631 12.7838 16.5631 12.1506 16.1726 11.7601L14.0513 9.63875L14.0506 9.63807C13.8024 9.38959 13.6587 9.11737 13.6176 8.91231C13.5836 8.74199 13.6185 8.65736 13.6977 8.57809C13.777 8.49883 13.8616 8.46395 14.0319 8.49801C14.2372 8.53906 14.5097 8.68299 14.7584 8.93165L14.7607 8.93397L16.8716 11.0311L17.58 11.7532L17.58 11.7533L17.5868 11.7601C18.3172 12.4905 18.6048 13.7688 18.2856 15.3647C17.9715 16.9354 17.0962 18.6147 15.819 19.8918C15.3118 20.3991 14.7707 20.8132 14.2176 21.1369C11.9736 22.4503 9.67717 22.2352 8.39442 20.9525L3.44468 16.0027C3.19601 15.7541 3.05209 15.4815 3.01104 15.2763C2.97698 15.1059 3.01186 15.0213 3.09112 14.9421C3.17038 14.8628 3.25501 14.8279 3.42534 14.862C3.63059 14.903 3.90312 15.0469 4.15178 15.2956L6.2731 17.4169C6.66363 17.8075 7.29679 17.8075 7.68732 17.4169C8.07784 17.0264 8.07784 16.3932 7.68732 16.0027L5.566 13.8814L3.44468 11.7601C3.19601 11.5114 3.05209 11.2389 3.01104 11.0336C2.97698 10.8633 3.01186 10.7787 3.09112 10.6994C3.17038 10.6202 3.25501 10.5853 3.42534 10.6193C3.63059 10.6604 3.90312 10.8043 4.15178 11.053L7.68732 14.5885C8.07784 14.979 8.71101 14.979 9.10153 14.5885C9.49205 14.198 9.49205 13.5648 9.10153 13.1743L5.566 9.63875L4.50534 8.57809C4.25667 8.32943 4.11275 8.0569 4.0717 7.85165C4.03764 7.68133 4.07252 7.5967 4.15178 7.51743C4.23104 7.43817 4.31567 7.40329 4.486 7.43735C4.69125 7.4784 4.96378 7.62233 5.21244 7.87099L6.2731 8.93165L9.80864 12.4672C10.1992 12.8577 10.8323 12.8577 11.2228 12.4672C11.6134 12.0767 11.6134 11.4435 11.2228 11.053ZM19.7916 19.6571C19.0398 20.4089 18.2461 20.8594 17.4576 21.0748C18.8876 19.5558 19.873 17.6255 20.2468 15.7569C20.6344 13.8189 20.3923 11.7403 19.0046 10.3494L18.2949 9.62592L18.2949 9.62589L18.2881 9.61909C18.0379 9.3689 17.8988 9.10223 17.8602 8.90582C17.829 8.74692 17.8598 8.66298 17.9447 8.57809C18.0239 8.49883 18.1086 8.46395 18.2789 8.49801C18.4831 8.53886 18.754 8.68156 19.0016 8.92797L19.5867 9.52674L19.5866 9.52678L19.5942 9.53435C21.2556 11.1988 22.0001 12.7199 22.0001 14.3642C22.0001 16.1046 21.135 18.3137 19.7916 19.6571Z" fill="currentColor"></path></g></svg>
   `,

   logic: {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
   },

   getWinner: (playerMove, computerMove) => {
      if (playerMove === computerMove) {
         return 'tie'
      } else if (RPS.logic[playerMove] === computerMove) {
         RPS.playerScore++
         return 'player'
      } else {
         RPS.computerScore++
         return 'computer'
      }
   }
}
