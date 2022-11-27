# [JS] 표현식과 연산자 📝

<br />

## **할당 연산자 💭**

- `x 연산자 y`

| 연산자   | 설명                                 | 비고                   |
| -------- | ------------------------------------ | ---------------------- |
| =        | 할당                                 | x = y                  |
| +=       | 더하기 할당                          | x = x + y              |
| -=       | 빼기 할당                            | x = x - y              |
| \*=      | 곱하기 할당                          | x = x \* y             |
| /=       | 나누기 할당                          | x = x / y              |
| %=       | 나머지 할당                          | x = x % y              |
| \*\*=    | 거듭제곱 할당                        | x = x \*\* y           |
| <<=, >>= | 왼쪽 시프트 할당, 오른쪽 시프트 할당 | x = x << y, x = x >> y |
| >>>=     | 부호 없는 오른쪽 시프트 할당         | x = x >>> y            |
| &=       | 비트 AND 할당                        | x = x & y              |
| ^=       | 비트 XOR 할당                        | x = x ^ y              |
| \|=      | 비트 OR 할당                         | x = x \| y             |
| &&=      | 논리 AND 할당                        | x && (x = y)           |
| \|\|=    | 논리 OR 할당                         | x \|\| (x = y)         |
| ??=      | 널 병합 할당                         | x ?? (x = y)           |
|          |                                      |                        |

<br />

## **비교 연산자 💭**

| 연산자 | 설명                             | 비고 |
| ------ | -------------------------------- | ---- |
| ==     | 같으면 참                        |      |
| !=     | 다르면 참                        |      |
| ===    | 값과 타입이 모두 같은 경우 참    |      |
| !==    | 갑 또는 타입이 서로 다를 경우 참 |      |
| >, <   | 크거나 작으면 참                 |      |
| <=, => | 크거나 같으면, 작거나 같으면 참  |      |
|        |                                  |      |

<br />

## **산술 연산자 💭**

| 연산자 | 설명                                   | 비고 |
| ------ | -------------------------------------- | ---- |
| %      | 나머지                                 |      |
| ++     | 증가                                   |      |
| --     | 감소                                   |      |
| -      | 빼기, 부호를 반대로 바꿈               |      |
| +      | 더하기, 숫자가 아니면 숫자로 변환 시도 |      |
| \*\*   | 거듭제곱                               |      |
| /      | 나누기                                 |      |
| \*     | 곱하기                                 |      |
|        |                                        |      |

<br />

## **논리 연산자 💭**

| 연산자 | 설명 | 비고 |
| ------ | ---- | ---- |
| &&     | AND  |      |
| \|\|   | OR   |      |
| !      | NOT  |      |
|        |      |

<br />

---

```javascript
// 1. String(문자) concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//  2. Numeric(수) operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement(증가, 감소) operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
// 먼저 더하고 할당할지, 할당하고 더할지
const preDecrement = --counter;
const postDecrement = counter--;

// 4. Assignment(할당) operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison(비교) operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical(논리) operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), findes the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// check() 함수 동작 -> 위에서 출력할 때 함수는 무겁기 때문에 뒤쪽에 사용해야 한다💡
// function check() {
//     for (let i = 0; i < 10; i++) {
//         console.log('😱');
//     }
//     return true;
// }

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-stratement
// nullableObject && nullableObject.something
if (nullableObject != null) {
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😱");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality(균등)
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // ture
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

---

#### **참조 📚**

- 자세한 내용이 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators)
