# Wrapper

> 원시 타입의 값을 감싸는 형태의 객체

<br/>

## 래퍼 객체

프로퍼티를 참조할 때 임시로 생성되며 참조가 끝나면 사라짐

- number ⇒ Number
- string ⇒ String
- boolean ⇒ Boolean
- symbol ⇒ Symbol

```jsx
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123;
console.log(number); // number 원시타입
console.log(number.toString()); // number 원사타입을 감싸고 있는 Number 객체로 감싸짐

const text = 'text';
console.log(text); // string 원시 타입
text.length; // String 객체의 속성 사용
text.trim();
```

---

<br/>

#### 참조👇

[원시타입(Primitive Type)과 래퍼객체 (Wrapper Object)](https://medium.com/@yms0214/%EC%9B%90%EC%8B%9C%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%83%80%EC%9E%85-primitive-type-%EA%B3%BC-%EB%9E%98%ED%8D%BC%EA%B0%9D%EC%B2%B4-wrapper-object-d8cda814022d)
