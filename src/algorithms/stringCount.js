function countOfCharInString(char,string){
  let charObj = {}

  for (let i=0;i<string.length;i++){
    if(charObj[string[i]] === undefined){
      charObj[string[i]] = 1;
    } else {
      charObj[string[i]] = charObj[string[i]] + 1
    }
  }
  return charObj[char]
}

export default countOfCharInString
