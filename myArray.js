"use strict";
// Объект с логикой
function MyArrayProto() {
  /**
   * method to add one ore more elemnt`s in end to MyArray 
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
   * 
   * @returns {object | undefined} last elemen
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
}
// Создаём прототип(связь между объектами). Наследование
MyArray.prototype = new MyArrayProto();

const myArray = new MyArray(1, 5, 3, 7);
const arr = new Array(1, 5, 3, 7);
console.log(arr);
// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);
// myArray.unshift(7, 8, 9);
console.log(myArray);