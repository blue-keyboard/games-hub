export const mostRepeatedElement = (arr) => {
   const countMap = {}
   let mostRepeated = null
   let maxCount = 0

   arr.forEach((element) => {
      countMap[element] = (countMap[element] || 0) + 1
      if (countMap[element] > maxCount) {
         maxCount = countMap[element]
         mostRepeated = element
      }
   })

   return mostRepeated
}

export const shuffleArray = (arr) => {
   const shuffled = arr.slice()
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
   }
   return shuffled
}
