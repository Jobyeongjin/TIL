# More-Logical Operator

## 단축평가

조건문 안에서는 모든 표현식이 평가가 되어서 불리언 타입으로 확인하지만,

조건문 밖에서는 `타입 변환없이` 그대로 반환

```jsx
// 논리연산자 Logical Operator
// && 그리고
// || 또는
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'suji' };

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인없음');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인있음');
  }
  animal.owner = '새로운주인!';
}

// 조건이 truthy일 떄 && 무언가를 해야할 경우
// 조건이 falshy일 때 || 무언가를 해야할 경우
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // { name: '🐶' }
console.log(obj2); // { name: '🐱', owner: '바뀐주인!' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: '🐶', owner: '새로운주인!' }
console.log(obj2); // { name: '🐱', owner: '바뀐주인!' }

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price); // item이 있다면 1, 없다면 undefined

// 기본값을 설정
// default parameter -> 전달하지 않거나, undefined인 경우에만 설정
// || -> 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
```

## *Optional Chaining Operator*

**?.**

`null` 또는 `undefined`가 아니라면 **우항을 참조하여 연산을 이어감**

```jsx
// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item?.price;
console.log(price);

// 활용예
let obj = { name: '🐶', owner: { name: 'suji' } };
function printName(obj) {
  const ownerName = obj?.owner?.name; 
	// obj && obj.owner && obj.owner.name;
	// obj안에, owner안에 name을 할당하는데 반복하지 않고, 간단하게 할 수 있음
  console.log(ownerName);
}
printName();
```

## *Nullish Coalescing Operator*

**??**

`null` 또는 `undefined`가 아니라면 **우항을 참조하여 연산을 이어감**

```jsx
// ?? -> null, undefined
// || -> falshy한 경우 설정(할당): 0, -0, null, undefined, ''
let num = 0;
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0
```

---

#### 참조👇
[단축 평가](https://velog.io/@najiexx/JavaScript-%EB%8B%A8%EC%B6%95-%ED%8F%89%EA%B0%80)

[논리연산자(&&, ||) 단축평가](https://curryyou.tistory.com/193)