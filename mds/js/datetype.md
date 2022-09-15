# [JS] 문법과 자료형 📝

## **기본 💭**

<br />

### **세미콜론(;)**

- 명령문이 한 줄을 차지하는 경우 필요하지 않음
  - 한 줄에 두 개 이상의 명령문이 들어가는 경우 반드시 세미콜론으로 구분
- But, 필요하지 않은 경우라도 항상 세미콜론으로 끝마치는 것이 버그 예방 차원에서도 좋은 습관!!

<br />

### **주석(//)**

```javascript
// 한 줄 주석

/* 
	긴 줄  
	주석 
*/
```

<br />

## **선언 💭**

| 변수 선언 | 내용                                                 | 비고 |
| --------- | ---------------------------------------------------- | ---- |
| var       | - 변수 선언<br />- 지금은 사용하지 않음              |      |
| let       | - 블록 스코프 지역 변수 선언<br />- 변경 가능        | 👍   |
| const     | - 블록 스코프 읽기 전용 상수 선언<br />- 변경 불가능 | 👍   |
|           |                                                      |

<br />

### **var를 사용하지 않는 이유**

- `var hoisting` : 어디에 선언되었든 관계없이 항상 선언을 제일 위로 끌어올림
- `no block scope` : 블록 스코프 불가능

<br />

### **변수명**

- `문자, 밑줄(_), 달러 기호($)로 시작`하며, `이후에는 숫자도 사용`가능하다.

<br />

### **변수 스코프**

| 스코프        | 설명                                                                                                                         | 비고 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---- |
| 블록 스코프   | - 함수 내부에서 선언한 변수<br />- 함수 밖에서는 변수 사용 불가                                                              |      |
| 글로벌 스코프 | - 함수 밖에서 선언한 변수<br />- 어디서든 변수 사용 가능 <br />- 항상 메모리에 탑재되기 때문에 최소한으로 사용하는 것이 좋다 |      |
|               |                                                                                                                              |      |

<br />

---

# [JS] 데이터 구조 몇 형 📝

## **데이터 형 💭**

| 형        | 설명                               | 비고 |
| --------- | ---------------------------------- | ---- |
| Boolean   | Ture & false                       |      |
| null      | null                               |      |
| undefined | 값이 정의되지 않은 최상위 속성     |      |
| Number    | 정수 또는 실수                     |      |
| BigInt    | 큰 정수<br />- 숫자 마지막에 n     |      |
| String    | 문자열                             |      |
| Symbol    | 인스턴스가 고유한 불변의 데이터 형 |      |
|           |                                    |

<br />

```javascript
// Variable types 📝
// primitive, single item: number, string, boolean, null, undefined, symbol

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
const helloBob = `hi ${brendan}!`; // template literals (string) -> python : f''string
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


// Dynamic typing: dynamically typed language 💡
let text = 'hello'; // string
text = 1; // number
text = '7' + 5; // string
text = '8' / '2'; // number

```

<br />

---

#### **참조 📚**

- 자세한 내용이 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_types)
