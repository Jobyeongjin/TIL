# [JS] 함수 📝

> 어떤 목적을 가진 작업들을 수행하는 코드들이 모인 블럭

<br />

## **함수 💭**

- `참조 타입 중 하나`로써 `function 타입`에 속함
- JavaScript에서 함수를 정의하는 방법은 주로 2가지로 구분
  - `함수 선언식 (function declaration)`
  - `함수 표현식 (function expression)`
- JavaScript의 함수는 `일급 객체(First-class citizen)`에 해당
  - 일급 객체: 다음의 조건들을 만족하는 객체를 의미함
    - 변수에 할당 가능
    - 함수의 매개변수로 전달 가능
    - 함수의 반환 값으로 사용 가능

<br />

## **함수 표현식(function expression) 💭**

- `함수를 표현식 내에서 정의하는 방식`
  - 표현식 : 어떤 하나의 값으로 결정되는 코드의 단위
- `함수의 이름을 생략하고 익명 함수로 정의 가능`
  - 익명 함수(anonymous function): 이름이 없는 함수
  - 익명 함수는 함수 표현식에서만 가능

```javascript
const name = function (args) {
  // do something
};

const add = function (num1, num2) {
  return num1 + num2;
};
add(1, 2);

// default arguments(기본 인자)
const greeting = function (name = "Anonymous") {
  return `Hi ${name}`;
};
greeting(); // Hi Anonymous
```

<br />

### **매개변수와 인자의 개수 불일치 허용**

```javascript
// 인자의 개수가 많을 경우
const noArgs = function () {
  return 0;
};
noArgs(1, 2, 3); // 0

const twoArgs = function (arg1, arg2) {
  return [arg1, arg2];
};
twoArgs(1, 2, 3); // [1, 2]

// 인자의 개수가 적은 경우
const threeArgs = function (arg1, arg2, arg3) {
  return [arg1, arg2, arg3];
};
threeArgs(); // [undefined, undefined, undefined]
threeArgs(1); // [1, undefined, undefined]
threeArgs(1, 2); // [1, 2, undefined]
```

<br />

### **Rest Parameter**

- rest parameter(…)를 사용하면 함수가 `정해지지 않은 수의 매개변수를 배열로 받음`
  - `python 의 *args 와 유사`

```javascript
const restOpr = function (arg1, arg2, ...restArgs) {
  return [arg1, arg2, restArgs];
};
restArgs(1, 2, 3, 4, 5); // [1, 2, [3, 4, 5]]
restArgs(1, 2); // [1, 2, []]
```

<br />

### **Spread operator**

- spread operator(…)를 사용하면 `배열 인자를 전개하여 전달 가능`

```javascript
const spreadOpr = function (arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
};

const numbers = [1, 2, 3];
spreadOpr(...numbers); // 6
```

<br />

### **선언식 vs 표현식**

- `함수의 타입`
  - 선언식 함수와 표현식 함수 모두 `타입은 function으로 동일`

```javascript
// 함수 표현식
const add = function (args) {};

// 함수 선언식
function sub(args) {}

console.log(typeof add); // function
console.log(typeof sub); // function
```

<br />

- `호이스팅(hoisting) - 함수 선언식`
  - `함수 선언식으로 선언한 함수는 var로 정의한 변수처럼 hoisting 발생 `
  - 함수 호출 이후에 선언 해도 동작

```javascript
add(2, 7); // 9

function add(num1, num2) {
  return num1 + num2;
}
```

<br />

- `호이스팅(hoisting) - 함수 표현식`

  - `함수 표현식으로 선언한 함수는 함수 정의 전에 호출 시 에러 발생 `

  - 함수 표현식으로 정의된 함수는 변수로 평가되어 변수의 scope 규칙을 따름

```javascript
sub(7, 2); // Uncaught ReferenceError: Cannot access 'sub' before initialization

const sub = function (num1, num2) {
  return num1 - num2;
};
```

<br />

### **Arrow Function**

- 함수를 비교적 간결하게 정의할 수 있는 문법
- function 키워드 생략 가능
- 함수의 `매개변수가 단 하나 뿐이라면, ‘( )’ 도 생략 가능`
- 함수 `바디에 표현식 하나라면 ‘{ }’과 return도 생략 가능 `

```javascript
const arrow1 = function (name) {
  return `hello, ${name}`;
};

// 1. function 키워드 삭제
const arrow2 = (name) => {
  return `hello, ${name}`;
};

// 2. 매개변수가 1개일 경우에만 () 생략 가능
const arrow3 = (name) => {
  return `hello, ${name}`;
};

// 3. 함수 바디가 return을 포함한 표현식 1개일 경우에 {} & return 삭제 가능
const arrow4 = (name) => `hello, ${name}`;
```

<br />

---

#### **참조 📚**

- 자세한 내용이 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

<br />

---

```javascript
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
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2. Parameters 📝
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie); // -> {name: 'coder'}

// 3. Default parameters (added in ES6) 📝
// 매개변수를 하나만 입력을 하게 되면 입력을 하지 않은 from은 undefined 값이 나오게 되고,
// 이를 방지하기 위해 from 기본값을 지정한다. 💡
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

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
printAll("dream", "coding", "ellie");

// 5. Local scope 📝
// 밖에서는 안이 보이지 않고, 안에서만 밖이 보인다. 💡
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
  // 함수 안에 함수
  function printAnother() {
    // 자식이 부모 함수는 볼 수 있어도
    console.log(message);
    let childMessage = "hello";
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
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

const add = function (a, b) {
  return a + b;
};

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수 호출없이 바로 호출하기
(function hello() {
  console.log("IIFE");
})();
```

<br />

---

#### **참조 📚**

- 잘 정리된 영상이 궁금하다면 [클릭](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)
