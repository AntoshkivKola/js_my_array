"use strict";
// Объект с логикой
function MyArrayProto() {

  /**
 * method to add one ore more elemnt`s in end to MyArray 
 * @method
 * @param {any}
 * @returns {number} this.length
 */
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };


  /**
 * method to delete one elemnt in end to MyArray 
 * @method
 * @returns {Element | undefined} last element
 */
  this.pop = function () {
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
  this.unshift = function () {
    for (let i = (this.length + arguments.length - 1); i > 0; i--) {
      this[i] = this[i - (arguments.length)];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
      ++this.length;
    }
    return this.length;
  };

  /**
 * method to delete one elemnt in start to MyArray 
 * @method
 * @returns {Element | undefined} first element
 */
  this.shift = function () {
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
  this.concat = function () {
    if (this.length === 0 && (arguments.length === 0 || arguments[0].length === 0)) {
      return;
    }

    const newMyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newMyArray.push(this[i]);
    }

    if ((arguments[0] instanceof Array) || (arguments[0] instanceof MyArray)) {
      for (let i = 0; i < arguments[0].length; i++) {
        newMyArray.push(arguments[0][i]);
      }
    } else {
      for (let i = 0; i < arguments.length; i++) {
        newMyArray.push(arguments[i]);
      }
    }
    return newMyArray;
  };

  /**
  * method to reveerse MyArray 
  * @method
  * @returns {object | undefined} 
  */
  this.reverse = function () {
    if (this.length === 0) {
      return;
    }

    /* :)
     const normArray = [];
     for(let i = 0; i < this.length; i++){
       normArray.push(this[i]);
     }
     normArray.reverse();
     for(let i = 0; i < this.length; i++){
       this[i] = normArray[i];
     }
     */
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
  this.map = function (fun) {
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
  this.forEach = function (fun) {
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
  this.every = function every(func){
    for(let i = 0; i < this.length; i++){
      if(!func(this[i], i, this)){
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
  this.filter = function filter(func){
    const newArray = new MyArray();
    for(let i = 0; i < this.length; i++){
      if(func(this[i], i, this)){
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
}

// Объекты с данными
/**
 * function constructor to create object`s MyArray
 * @constructor
 * @param {any}
 * @return {object} type MyArray
 */
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
  /**
   * method to check if an object is MyArray
   * @returns {boolean}
   */
  this.isMyArray = function () {
    return this instanceof MyArray;
  }
}
// Создаём прототип(связь между объектами). Наследование
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1, 5, 3, 7);
const myArray2 = new MyArray(5, 8, 6);
const arr = new Array(1, 5, 3, 7);
const q1 = myArray.map(function (num) {
  return num * 2;
});
console.log(q1);
q1.reverse();
console.log(q1);
q1.forEach((element) => {
  console.log(element);
});
// console.log(arr);

// console.log(myArray);