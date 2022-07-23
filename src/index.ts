/**
 * Capitalizes a string
 * 
 * @param {string} str String to capitalize
 * @returns {string} A capitalized version of the string
 */
function capitalize(str:string){

  const firstChar = str.charAt(0).toUpperCase()
  const remaining = str.slice(1).toLowerCase()

  const res = firstChar + remaining

  return res
}

export {
  capitalize
}