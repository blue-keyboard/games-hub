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
