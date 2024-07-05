class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (iterable === undefined || Array.isArray(iterable) || typeof iterable === 'string') {
      this.data = {};

      if (iterable) {
        for (const element of iterable) {
          this.data[element] = true;
        }
      }
    }
    else
      throw new Error("This set only accpets string, arrays or nothing");
  }

  // return number of elements in MySet
  size() {
    let size = 0;
    for (const key in this.data)
      size++;
    return size;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true;
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if(this.data[item]) {
      delete this.data[item];
      return true;
    }
    return false;
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if(this.data[item]) return true;
    return false;
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    const arr = [];
    for (const key in this.data)
      arr.push(key);
    return arr;
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = MySet;

