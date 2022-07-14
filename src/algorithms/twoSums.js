// [2,7,11,15] target=9

const twoSums = (arr, target) => {
  let storage = {}

  for (let i=0; i<arr.length; i++){
    let dif = target - arr[i];

    if(storage[arr[i]] === undefined){
      storage[dif] = i
    }
    else {
      return [storage[arr[i]], i]
    }
  }

}

export default twoSums;
