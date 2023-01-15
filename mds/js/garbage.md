# Garbage Collection

> 쓰레기 수집

## _Garbage Collection_

쓸모 없어진 객체가 차지하는 메모리를 자동으로 처리

```jsx
// 글로벌 변수는 앱이 종료될 때까지 계속 메모리에 유지됨
const global = 1;
{
  // 그렇기 때문에 변수는 필요한 곳에서 선언하는 것이 좋음
  // 블럭 내부에서만 존재하고, 블럭이 끝나면 자동으로 소멸됨 (Garbage Collection)
  const local = 1;
}

function print() {
  // 함수 내부에서도 블럭 안에서 필요한 경우에는
  // 블럭 안에서 변수를 선언하고 사용해야 한다
  if (true) {
    let temp = 0;
  }
}
```

---

#### 참조👇

[Memory management - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

[가비지 컬렉션](https://ko.javascript.info/garbage-collection)
