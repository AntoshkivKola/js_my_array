"use strict";

class MyArray {
  /**
 * function constructor to create object`s MyArray
 * @constructor
 * @param {any}
 * @return {object} type MyArray
 */
  constructor(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this.push(args[i]);
    }
  }
  /**
   * method to check if an object is MyArray
   * @param {object}
   * @returns {boolean}
   */
  static isMyArray(obj) {
    return obj instanceof MyArray;
  }

  /**
* method to add one ore more elemnt`s in end to MyArray 
* @method
* @param {any}
* @returns {number} this.length
*/
  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i];
    }
    return this.length;
  };


  /**
  * method to delete one elemnt in end to MyArray 
  * @method
  * @returns {Element | undefined} last element
  */
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };


  /**
  * method to add one ore more elemnt`s in start to MyArray 
  * @method
  * @param {any}
  * @returns {number} this.length
  */
  unshift(...args) {
    for (let i = (this.length + args.length - 1); i > 0; i--) {
      this[i] = this[i - (args.length)];
    }
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
      ++this.length;
    }
    return this.length;
  };

  /**
  * method to delete one elemnt in start to MyArray 
  * @method
  * @returns {Element | undefined} first element
  */
  shift() {
    if (this.length === 0) {
      return;
    }
    const firstItem = this[0];
    delete this[0];
    --this.length;
    return firstItem;
  };

  /**
  * method to concat any to MyArray 
  * @method
  * @param {any}
  * @returns {Object | undefined} MyArray
  */
  concat(...args) {
    if (this.length === 0 && (args.length === 0 || args[0].length === 0)) {
      return;
    }

    const newMyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newMyArray.push(this[i]);
    }

    if ((args[0] instanceof Array) || (args[0] instanceof MyArray)) {
      for (let i = 0; i < args[0].length; i++) {
        newMyArray.push(args[0][i]);
      }
    } else {
      for (let i = 0; i < args.length; i++) {
        newMyArray.push(args[i]);
      }
    }
    return newMyArray;
  };

  /**
  * method to reveerse MyArray 
  * @method
  * @returns {object | undefined} 
  */
  reverse() {
    if (this.length === 0) {
      return;
    }

    let item = null;
    for (let i = 0; i < Math.ceil(this.length / 2); i++) {
      item = this[i];
      this[i] = this[this.length - 1 - i];
      this[this.length - 1 - i] = item;
    }

    return this;
  };

  /**
   * method creates a new MyArray with the result of calling the specified function for each element of the MyArray. 
   * @method
   * @param {Function}
   * @returns {Element | undefined} 
   * 
   */
  map(fun) {
    if (this.length === 0) {
      return;
    }
    let newMyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newMyArray.push(fun(this[i], i, this));
    }

    return newMyArray;
  };

  /**
   * method executes the specified function once for each element in the array.
   * @method
   * @param {Function}
   * @returns {undefined} 
   * 
  */
  forEach(fun) {
    if (this.length === 0) {
      return;
    }
    for (let i = 0; i < this.length; i++) {
      fun(this[i], i, this);
    }

    return;
  };

  /**
  * Method checks if all elements of the array
  * satisfy the condition specified in the passed function.
  * @method
  * @param {Function}
  * @returns {boolean} 
  * 
  */
  every(func) {
    for (let i = 0; i < this.length; i++) {
      if (!func(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Method creates a new array with all elements 
   * that passed the validation specified in the passed function.
   * @method
   * @param {Function}
   * @returns {MyArray} 
   * 
  */
  filter(func) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }


  flat(depth = 1) {
    let result = new MyArray();
    this.forEach((item) => {
      if (MyArray.isMyArray(item) && depth) {
        result = result.concat(item.flat(depth - 1));
      } else if (item !== undefined) {
        result.push(item);
      }
    });
    return result;
  }


}

const myArray = new MyArray(1, 5, 3, 7);
const arr = new MyArray(1, 5, new MyArray(1, 5, 3, new MyArray(1, 5, 3, 7), 7, 3, 7));
const myArray2 = new MyArray(5, 8, 6);
const myArr = new MyArray(1, 2, myArray2);
//console.log(myArray2);

console.log(myArr);
// console.log(arr);

// console.log(myArray);