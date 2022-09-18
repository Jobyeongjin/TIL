// Function 📝
// - findamental building block in the program
// - subprogram can be used multiple times
// - performs a task ro calculates a value

// 1. Function declaration 📝
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);


// 2. Parameters 📝
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); // -> {name: 'coder'}


// 3. Default parameters (added in ES6) 📝
// 매개변수를 하나만 입력을 하게 되면 입력을 하지 않은 from은 undefined 값이 나오게 되고, 
// 이를 방지하기 위해 from 기본값을 지정한다. 💡
function showMessage(message, from = 'unknown') { 
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6) 📝
// ...args -> 배열 형태로 입력
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        comsole.log(args[i]);
    }
    // 간단하게
    for (const arg of args) {
        console.log(arg);
    }
    // 더 간단하게
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


// 5. Local scope 📝
// 밖에서는 안이 보이지 않고, 안에서만 밖이 보인다. 💡
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    // 함수 안에 함수 
    function printAnother() {
        // 자식이 부모 함수는 볼 수 있어도
        console.log(message);
        let childMessage = 'hello';
    }
    // 부모가 자식 함수는 볼 수 없다
    console.log(childMessage);
}
printMessage();


// 6. Return a value 📝
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit 📝
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good 💡
// 조건이 맞지 않다면 빠르게 리턴을 하고, 조건이 맞을 때만 실행하는 것이 좋다. 
function upfradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// First-class function 📝
// functions are treated like any other variable
// can be assiqned as a value to variable 
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Funtion expression 📝
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it. 
const print = function() {
    // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
};

const add = function (a, b) {
    return a + b;
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 함수 호출없이 바로 호출하기
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2, 3));