# Object

> 객체 타입의 복합 데이터

<br/>

## 객체 생성

- _`key` - 문자, 숫자, 문자열, 심볼_
- _`value` - 원시값, 객체 (함수)_
- 키와 밸류가 동일한 경우 하나만 작성 가능
  - {name: name} ⇒ {name}

```jsx
Object literal { key: value };
```

<br/>

### 속성 접근

```jsx
let apple = {
  name: 'apple',
};
apple.name; // dot notation
apple['name']; // bracket notation

// 동적으로 속성에 접근
// 대괄호 표기법을 사용 💡
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));
```

<br/>

### 속성 추가

```jsx
apple.emoji = '🍎';

// 동적으로 속성 추가
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);
```

<br/>

### 속성 삭제

```jsx
delete apple.emoji;

// 동적으로 속성 삭제
function deleteKey(obj, key) {
  delete object[key];
}
deleteKey(obj, 'job');
```

<br/>

## 객체 안의 함수

- 객체 안에서 속성을 참조하고 싶을 때는 `this` 사용

```jsx
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};
apple.display();
```

<br/>

## 생성자 함수

정해진 틀 안에서 객체를 생성 (현업에서는 class를 활용 ✨)

```jsx
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능, 자동으로 this을 리턴하게 됨
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
```

---

<br/>

#### 참조👇

[JavaScript 객체 기본 - Web 개발 학습하기 | MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics)

[객체로 작업하기 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects)
