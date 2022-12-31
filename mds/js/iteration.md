# Iteration

## *****Iterable Protocol*****

```jsx
[Symbol.iterator](): Iterator{ next(): {value, done}};
```

- 반복가능한 객체
    - 객체는 `Symbol.iterator`라는 key를 가진다.
    - `Symbol.iterator`의 value는 iterator를 반환하는 함수여야 한다.
- 순회가 가능한 기본적인 자료구조
    - Array
    - String
    - Map
    - Set
- 순회가 가능하면 할 수 있는 일들
    - `for...of` 루프
    - spread 연산자 (`...`)
    - 분해대입

```jsx
// for...of
const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
};

const obj = {0: 1, 1: 2};
for(const item in obj) { 
  console.log(item); // key를 출력
};

// spread
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// 분해대입
const fruits = ['🍊', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);
```

## *Iterator*

- `next`라는 메소드를 가진다.
- `next` 메소드는 다음 두 속성을 갖는 객체를 반환한다.
    - `value` - 현재의 값
    - `done` - 반복이 모두 끝났는지 나타냄

```jsx
const iterator = array.values();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // 반복이 끝났으니 true

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
```

```jsx
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return {
          value: num++ * 2,
          done: num > max
        };
      },
    };
  },
};
for (const num of multiple) {
  console.log(num);
};
```

## *Generator*

Iterable를 간단하게 구현할 수 있음

- `yield`: 사용자의 요구에 따라 하나씩 리턴

```jsx
function* multipleGenerator() {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
```

---
<br>

#### 참조👇
[Iteration protocols - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)

[반복기 및 생성기 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators)

[generators](https://ko.javascript.info/generators)