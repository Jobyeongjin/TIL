# Async

> 프로미스를 좀 더 편하게 사용

## *async & await*

비동기이지만 동기적으로 보이는 코드

```jsx
async function 함수명() {
  await 비동기처리할_메서드명();
}
```

### 활용예

```jsx
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// async & await (4초)
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits()
  .then((fruits) => console.log(fruits));
// [ '🍌', '🍎' ]
```

---

#### 참조👇
[async function - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)

[async와 await](https://ko.javascript.info/async-await)