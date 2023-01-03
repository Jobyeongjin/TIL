# Set

> **순서가 없고, 중복이 없는** 데이터의 집합체

```jsx
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size); // 3

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));

for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);

// 삭제
set.delete(6);

// 전부 삭제
set.clear();

// Object Set
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);
// {{ name: '🍎', price: 8 }, { name: '🍌', price: 5 }}
```

---

#### 참조👇

[Set - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)