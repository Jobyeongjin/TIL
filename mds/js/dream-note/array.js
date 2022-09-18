'use strict';

// Array 📝


// 1. Declaration 📝
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position 📝
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // -> 배열의 마지막 요소를 찾을 떄


// 3. Looping over an array 📝
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. Addtion, deletion, copy 📝
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from to the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push 💡
// remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); 
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 인덱스 1에 하나를 지우고, 그 자리에 사과와 수박을 추가 💡
console.log(fruits);

// combine two arrays
const fruits2 = ['🍍', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching 📝
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.indexOf('🥥')); // -1, 배열 안에 없으면 -1 반환

// includes
console.log(fruits.includes('🍉')); // true, 배열 안에 존재하면 참, 없으면 거짓
console.log(fruits.includes('🥥')); // false

// lastIndexOf
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.lastIndexOf('🍎')); // 5, 마지막 요소의 인덱스 💡