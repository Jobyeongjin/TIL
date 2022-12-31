# Spread

> 순회가 가능한 모든 것들은 Spread 될 수 있다!

## *Spread*

**펼치다, 퍼뜨리다**

```jsx
function(...iterable)
[...iterable]
{...obj}

// 활용
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));
```

## *Rest parameter*

함수에서 정해지지 않은 수의 매개변수를 배열로 받음

```jsx
// function
function sum(first, second, ...nums) {
  console.log(nums);
	// [0, 1, 2, 4]
}
sum(1, 2, 0, 1, 2, 4);

// Array
const fruits1 = ['🥝', '🍎'];
const fruits2 = ['🍇', '🍑'];
arr = [...fruits1, '🍓', ...fruits2];
console.log(arr);
```

## *Desturcturing*

**Spread 문법**을 이용하여 **값을 해체**한 후, 개별 **값을 변수에 새로 할당**하는 과정

```jsx
const fruits = ['🍊', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first); // '🍊'
console.log(second); // '🥝'
console.log(others); // ['🍓', '🍌']
```

---

#### 참조👇

[전개 구문 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)