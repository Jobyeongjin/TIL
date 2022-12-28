# Number

```jsx
const num1 = 123;
const num2 = new Number(123);
console.log(num1); // number
console.log(num2); // object

// Class level
// 정수에서 사용할 수 있는 가장 큰 수, 작은 수
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// 정수에서 안전하게 사용할 수 있는 큰 수, 작은 수
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// 숫자가 아님
console.log(Number.NaN);
// 무한 대 양수, 음수
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// Instance level
// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234

// 문자열로 변환
console.log(num4.toString()); // 1234.12

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1

// 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
console.log(Number.EPSILON);

// 실수끼리 계산하는 경우 예상치 못한 작은 수가 발생
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.1000....0003
```

---

<br/>

#### 참조👇

[Number - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
