# Array

> 인덱스를 가지는 복수의 자료를 저장할 수 있는 자료구조

<br>

## 배열 생성

```jsx
// 1.
let array = new Array(2);
console.log(array);

// 2.
array = new Array(1, 2, 3);
console.log(array);

// 3.
array = Array.of(1, 2, 3);
console.log(array);

// 4. 👍
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

// 5.
array = Array.from(anotherArray);
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다. 
// 그러나 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고, 오브젝트와 유사하다!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이며,
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있다 (Typed Collections)
// 6. 👍
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
```

## 배열 참조

```jsx
const fruits = ['🍌', '🍊', '🍎', '🍇'];

// 인덱스로 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

// 똑같은 출력
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};
```

## 배열 함수

```jsx
const fruits = ['🍌', '🍊', '🍎', '🍇'];

// 특정한 오브젝트가 배열인지 확인
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 확인
console.log(fruits.includes('🍎'));

// 추가
let length = fruits.push('🍑'); // 뒤에 추가
length = fruits.unshift('🍓'); // 앞에 추가

// 제거
let lastItem = fruits.pop(); // 뒤에 제거
firstItem = fruits.shift(); // 앞에 제거

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 1부터 시작해 1을 삭제
fruits.splice(1, 0, '🍎', '🍇'); // 1부터 시작해 삭제하지 않고 추가할 수 있음

// 잘라진 새로운 배열을 만듬 - 기존 배열은 유지
let newArr = fruits.slice(0, 2);

// 여러 개의 배열을 붙여줌 - 기존 배열은 유지
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

// 순서를 거꾸로
const arr4 = arr3.reverse();

// 중첩된 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr.flat(2));

// 특정한 값으로 배열을 채우기
arr.fill(0);
arr.fill('s', 1, 3); // 's' 를 채우는데 1부터 3까지만 채우기

// 배열을 문자열로 합하기
let text = arr.join();
text = arr.join(' | ');
```

---

<br>

#### 참조👇
[Array - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)