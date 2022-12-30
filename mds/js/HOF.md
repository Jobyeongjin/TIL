# Higher-Order Function

## 고차함수

- 함수형 프로그래밍
  - 함수를 인자로 받거나, 함수를 반환해주는 함수


### forEach

for문을 대체

```jsx
arr.forEach(function(value, index, array) {
//	value - 배열의 요소값
//	index - 배열의 인덱스
//	array - 참조된 배열
});
```

```jsx
const fruits = ['🍌', '🍊', '🍎', '🍇'];

// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach
fruits.forEach((value) => console.log(value));
```

### find

조건에 맞는 아이템을 반환

```jsx
arr.find((element, index, array) => {
//	element - 배열의 요소값
//	index - 배열의 인덱스
//	array - 참조된 배열
//	thisArg - 콜백함수에서 this로 사용할 값
//	return - 찾은 요소를 리턴 / 없다면 undefined
}, thisArg);
```

```jsx
const item1 = {name: '🥛', price: 2};
const item2 = {name: '🍪', price: 3};
const item3 = {name: '🍚', price: 1};
const products = [item1, item2, item3, item2];

const found = products.find((value) => value.name === '🍪');
console.log(found); 
// {name: '🍪', price: 3}
```

### findIndex

조건에 맞는 아이템의 인덱스를 반환

```jsx
arr.findIndex((element, index, array) => {
//	element - 배열의 요소값
//	index - 배열의 인덱스
//	array - 참조된 배열
//	thisArg - 콜백함수에서 this로 사용할 값
//	return - 찾은 요소의 인덱스 / 없다면 -1
}, thisArg);
```

```jsx
result = products.findIndex((value) => value.name === '🍪');
console.log(result); 
// 1
```

### some

배열의 아이템들이 부분적으로 조건에 맞는지 확인

```jsx
arr.some((currentValue, index, array) => {
//	currentValue - 배열의 요소값
//	index - 배열의 인덱스
//	array - 참조된 배열
//	thisArg - 콜백함수에서 this로 사용할 값
//	return - 하나의 배열이라도 참이라면 true / 아니라면 false
}, thisArg);
```

```jsx
result = products.some((value) => value.name === '🍪');
console.log(result);
// true
```

### every

배열의 아이템들이 모두 조건에 맞는지 확인

```jsx
arr.every((currentValue, index, array) => {
//	currentValue - 배열의 요소값
//	index - 배열의 인덱스
//	array - 참조된 배열
//	thisArg - 콜백함수에서 this로 사용할 값
//	return - 모든 배열 요소가 참이라면 true / 아니라면 false
}, thisArg);
```

```jsx
result = products.every((value) => value.name === '🍪');
console.log(result);
// false
```

### filter

조건에 맞는 모든 아이템들을 새로운 배열로 반환

```jsx
arr.filter((element, index, array) => {
//	element - 배열의 요소값
//	index - 배열의 인덱스
//	array - 참조된 배열
//	thisArg - 콜백함수에서 this로 사용할 값
//	return - 조건에 맞는 요소들로 구성된 새로운 배열 / 없다면 빈 배열
}, thisArg);
```

```jsx
result = products.filter((value) => value.name === '🍪');
console.log(result);
// [{name: '🍪', price: 3}, {name: '🍪', price: 3}]
```

### map

배열의 아이템들을 각각 다른 아이템으로 매핑하여 새로운 배열로 반환

```jsx
arr.map((currentValue, index, array) => {
//	currentValue - 배열의 요소값
//	index - 배열의 인덱스
//	array - 참조된 배열
//	thisArg - 콜백함수에서 this로 사용할 값
//	return - 찾은 요소 / 없다면 undefined
}, thisArg);
```

```jsx
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
// [2, 4, 6, 8, 10]
```

### sort

배열의 아이템들을 정렬

```jsx
arr.sort(function(a, b) {
// function - 정렬 순서를 정의하는 함수 / 생략되면 문자열로 취급되며, 유니코드 값 순서대로 정렬
}, thisArg);
```

```jsx
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);
// ['abc', 'hi']

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); 
// [0, 1, 10, 2, 4, 5]

numbers.sort((a, b) => a - b);
console.log(numbers);
// [0, 1, 2, 4, 5, 10]
```

### reduce

배열의 요소들을 접어서 값을 하나로 묶음
```jsx
arr.reduce((accumulator, currentValue, index, array) => {
// accumulator - 순회하면서 누적되는 값
// currentValue - 현재 값
//	index - 배열의 인덱스
//	array - 참조된 배열
// initalValue - 초기값 설정
// return - 누적된 값
}, initalValue);
```

```jsx
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result); 
// 15
```