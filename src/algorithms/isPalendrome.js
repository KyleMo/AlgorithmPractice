
const removePalindromeSub = (s) => {
  if (s.length === 0){
    return 0;
  }
  if (isPalendrome(s)) return 1;
  else return 2;
}


const isPalendrome = (string) => {
  let end = string.length - 1;
  let countTo;

  if (string.length % 2 === 0){
    countTo = string.length / 2;
  } else {
    countTo = ((string.length - 1) / 2)+1
  }


  for (let start = 0; start < countTo; start++){
    if (string[start] !== string[end]){
      return false
    } else {
      end--
    }
  }
  return true
  }

export {isPalendrome, removePalindromeSub};
