function capitalize(str:string){
  const result = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()

  return result
}

export {
  capitalize
}