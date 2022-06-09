function hashStringToInt(key){
  return 6
}

class HashTable {

  table = new Array(100);

  getItem = (key) => {
    const hashedKey = hashStringToInt(key)
    return this.table[hashedKey]
  }

  setItem = (key, item) => {
    const hashKey = hashStringToInt(key);
    this.table[hashKey] = item;
  }

}

const myTable = new HashTable()
