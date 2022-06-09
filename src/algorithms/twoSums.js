// [2,7,11,15] target=9

const twoSums = (arr, target) => {
  let storage = {}

  for (let i = 0; i < arr.length; i++){
    let key = target - arr[i]

    if(storage[arr[i]] === undefined){
      storage[key] = i;
    } else {
      return [storage[arr[i]], i]
    }
  }
  console.log(storage)
}

export default twoSums;
