# Closures

> 중첩된 함수에서 내부 함수가 외부 함수에 접근할 수 있음

## Closure

```jsx
function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();
```

### 활용

```jsx
// 내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉을 위해 사용
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일
// Closure
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}
const increase = makeCounter();
increase();

// Class
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
```

---

#### 참조👇

[클로저(Closures)란 무엇일까? - 하나몬](https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/)
