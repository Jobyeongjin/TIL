# This

> 문맥에 따라 이것이 가리키는 것이 달라짐

## This

```jsx
'use strict';
/*
 * 글로벌 컨텍스트의 this
 * - 브라우저: window를 가리킴
 * - 노드: module을 가리킴
 */

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);

// globalThis는 생략가능
// globalThis.setTimeout();
setTimeout();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();
```

## Binding

묶다, 속박하다

```jsx
// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  // this.printName = this.printName.bind(this)
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다멍: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

// 동적으로 변경됨
dog.printName = cat.printName;
dog.printName();
// 고양이의 이름을 출력한다옹: 멍멍

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백을 실행!');
  printName();
}
printOnMonitor(cat.printName);
```

## Arrow

```jsx
const cat = {
  name: 'cat',
  // 객체의 메서드 (오브젝트에 속한 함수)
  play() {
    console.log('냐옹');
  },
};
cat.play();
// const obj1 = new.cat.play(); // 생성자 함수로 사용 ❌

/**
 * 화살표 함수의 특징
 * - 문법이 깔끔하다
 * - 생성자 함수로 사용이 불가능함 (무거운 프로토타입을 만들지 ❌)
 * - 함수 자체 arguments
 * - this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // arrow함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
```

---

#### 참조👇

[자바스크립트의 this란?](https://jungjjeong.github.io/web/javascript/javaScript-this/)

[Function.prototype.bind() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

[화살표 함수 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
