// 1. Use strict 📝
// added in ES5
// use this for Valina Javascript. -> strict모드로 개발하기, 상식적인 코드 사용으로 효율적인 작업을 할 수 있다💡
'use strict';


// 2. Variable, rw(read, write) 📝
// let (added in ES6), ES6 -> 가장 현대적인 버전 💭

// Global scope -> 항상 메모리에 탑재되어 있기 때문에 최소한으로 사용하는 게 좋다. 💭
let globalName = 'global name';

// Block scope 💭
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
// 블록 안은 밖에서 접근 불가
console.log(name);
console.log(globalname);

// var (don't ever use this!) 🚨
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);


// 3. Contant, r(read only) 📝
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note💡
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types 📝
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; // integer 💭
const size = 17.1; // decimal number 💭

// number - spcicla numeric values: infinity, -infinity, NaN 💭
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

// string 💭
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
const helloBob = `hi ${brendan}` // template literals (string) -> python : f''string
console.log(`hi ${helloBob}, type: ${typeof helloBob}`);

// boolean 💭
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false

// null 💭
let nothing = null;

// undefined 💭
let x = undefined;
let x;

// symbol, create unique identifiers for objects 💭
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol2 = Symbol.for('id');
const gSymbol1 = Symbol.for('id');
console.log(gSynbol1 == gSynbol2); // true
// 심볼을 출력하려면 .description을 붙여서 string으로 변환해야 한다. 💡 
console.log(`value: ${symbol1.description}, type: ${typeof: symbol1.description}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
// 변경 가능
ellie.age = 21;


// 5. Dynamic typing: dynamically typed language 📝
let text = 'hello'; // string
text = 1; // number
text = '7' + 5; // string
text = '8' / '2'; // number
