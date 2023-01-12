# Scope

> 범위 또는 영역

## _Scope_

- `중괄호 { }` 또는 `함수`
- 변수는 최대한 필요한 곳에서 정의해야 한다
- 안쪽에서는 밖이 보이지만, 밖에서는 안을 볼 수가 없다

```jsx
const text = 'global'; // 전역(global) 변수, 전역 스코프
{
  const text = 'inside block1'; // 지역(local) 변수, 지역 스코프
  {
    const text = 'inside block2';
    console.log(text);
    // inside block2
  }
}
```

```jsx
// 블럭 외부에서는 블럭 내부의 변수를 참조 ❌
{
  const a = 'a';
  console.log(a);
}
console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = 'Hello World';
  console.log(message);
}
// 함수 외부에서는 함수의 매개변수를 참조 ❌
console.log(message);
```

---

#### 참조👇

[[JavaScript] 스코프(Scope)와 변수 선언 (var, let, const 키워드 차이점)](https://hanamon.kr/javascript-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%EB%B3%80%EC%88%98%EC%84%A0%EC%96%B8%ED%82%A4%EC%9B%8C%EB%93%9C-%EC%B0%A8%EC%9D%B4%EC%A0%90/)
