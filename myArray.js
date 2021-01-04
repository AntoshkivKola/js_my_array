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

    const newMyArray = this;

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

const myArray = new MyArray();
const myArray2 = new MyArray();
const arr = new Array(1, 5, 3, 7);
const q1 = myArray.concat(myArray2);

console.log(arr);
// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);
// myArray.unshift(7, 8, 9);
console.log(myArray);