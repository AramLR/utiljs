/**
 * Capitalizes a string
 * 
 * @param {string} str String to capitalize
 * @returns {string} A capitalized version of the string
 */
function capitalize(str:string){

  const result = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()

  return result
}

export {
  capitalize
}