export const tictactoeGameState = {
   board: [
      [false, false, false],
      [false, false, false],
      [false, false, false]
   ],

   lines: [
      [
         [0, 0],
         [0, 1],
         [0, 2]
      ],
      [
         [1, 0],
         [1, 1],
         [1, 2]
      ],
      [
         [2, 0],
         [2, 1],
         [2, 2]
      ],
      [
         [0, 0],
         [1, 0],
         [2, 0]
      ],
      [
         [0, 1],
         [1, 1],
         [2, 1]
      ],
      [
         [0, 2],
         [1, 2],
         [2, 2]
      ],
      [
         [0, 0],
         [1, 1],
         [2, 2]
      ],
      [
         [0, 2],
         [1, 1],
         [2, 0]
      ]
   ],

   checkLines: () => {
      tictactoeGameState.playerWinningMoves = []
      tictactoeGameState.playerFollowUps = []
      tictactoeGameState.computerFollowUps = []
      tictactoeGameState.computerWinningMoves = []

      const board = tictactoeGameState.board

      console.log('board: ', board)

      tictactoeGameState.lines.forEach((line) => {
         let o = 0
         let x = 0
         let possibleMoves = []

         for (const cell of line) {
            const [i, j] = cell
            if (board[i][j] === 'O') o++
            else if (board[i][j] === 'X') x++
            else possibleMoves.push(cell)
         }

         console.log(
            'line: ' +
               JSON.stringify(line) +
               ' -- O: ' +
               o +
               ' -- X: ' +
               x +
               ' -- possibleMoves: ' +
               JSON.stringify(possibleMoves)
         )

         if (o === 3) {
            tictactoeGameState.winningLine = line
            tictactoeGameState.playerWon = true
         } else if (x === 3) {
            tictactoeGameState.winningLine = line
            tictactoeGameState.computerWon = true
         } else if (o === x || possibleMoves.length === 0) return
         else {
            if (o === 1)
               tictactoeGameState.playerFollowUps.push(...possibleMoves)
            if (o === 2)
               tictactoeGameState.playerWinningMoves.push(...possibleMoves)
            if (x === 1)
               tictactoeGameState.computerFollowUps.push(...possibleMoves)
            if (x === 2)
               tictactoeGameState.computerWinningMoves.push(...possibleMoves)
         }
      })

      console.log(`playerWinningMoves: ${JSON.stringify(
         tictactoeGameState.playerWinningMoves
      )},
      playerFollowUps: ${JSON.stringify(tictactoeGameState.playerFollowUps)},
      computerFollowUps: ${JSON.stringify(
         tictactoeGameState.computerFollowUps
      )},
      computerWinningMoves: ${JSON.stringify(
         tictactoeGameState.computerWinningMoves
      )}`)
   },

   availableMoves: ['00', '01', '02', '10', '11', '12', '20', '21', '22'],
   playerFollowUps: [],
   computerFollowUps: [],
   playerWinningMoves: [],
   computerWinningMoves: [],
   winningLine: [],
   playerWon: false,
   computerWon: false,

   reset: () => {
      tictactoeGameState.board = [
         [false, false, false],
         [false, false, false],
         [false, false, false]
      ]

      tictactoeGameState.availableMoves = [
         '00',
         '01',
         '02',
         '10',
         '11',
         '12',
         '20',
         '21',
         '22'
      ]
      tictactoeGameState.winningLine = []
      tictactoeGameState.playerWon = false
      tictactoeGameState.computerWon = false
   }
}
