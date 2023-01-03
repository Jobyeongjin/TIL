# Map

> **key**와 **value**으로 이루어진 자료구조

## *map*

- **순서가 없음**
- **중복 가능**
- `key`는 **유일한 값**

```jsx
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size); // 2

// 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key6')); // fasle

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1')); // '🍎'
console.log(map.get('key4')); // undefined

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');

// 전부 삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점? 약간의 인터페이스 차이가 있음
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, descrption: '맛있는우유' };

// 키로 접근이 가능하다
const obj = {
  [key]: milk,
};
console.log(obj);

// 다양한 함수 사용 가능하다
const map2 = new Map([[key, milk]])
console.log(map2);
```

---

#### 참조👇

[Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)