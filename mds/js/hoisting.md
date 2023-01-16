# Hoisting

> 끌어 올리다

## _Hoisting_

자바스크립트 엔진이 코드를 실행하기 전, **변수, 함수, 클래스의 선언문을 끌어 올림**

```jsx
// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();
function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨 => 변수 이름만 호이스팅💡
// 초기화 전, 변수에 접근하면 컴파일 에러가 발생
console.log(hi);
let hi = 'hi';

console.log(func1);
let func1 = function () {};

const cat = new Cat();
class Cat {}

let x = 1;
{
  console.log(x);
  let x = 2;
}
```

---

#### 참조👇

[호이스팅 - MDN Web Docs 용어 사전: 웹 용어 정의 | MDN](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)
