# Promise
> 콜백을 깔끔하게 처리

## *Promise*

비동기 처리에 사용되는 객체

```jsx
// 생성자
const promise = new Promise(function(resolve, reject) {
	resolve(value) — 일이 성공적으로 끝난 경우 그 결과를 나타내는 value와 함께 호출
	reject(error) — 에러 발생시 에러 객체를 나타내는 error와 함께 호출
});

// 소비자
promise()
  .then('필요한 일을 수행')
  .catch('에러처리')
  .finally('실패와 관계없이 무조건 실행')
```

## *Callback vs Promise*

### Callback

```jsx
// 타이머
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수를 전달해야 함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}
try {
  runInDelay(() => {console.log('타이머 완료!!');
  }, 2);
} catch (error) {};
```

### Promise

```jsx
// 타이머
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if(!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000)
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!!'))
  .catch(console.error)
  .finally(() => console.log('끝!');)
```

## 관련 함수

```jsx
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
}

getChicken() 
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log)
// 🐔 => 🥚 => 🍳
```

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

// 바나나와 사과를 같이 가지고 오기 (3+1초)
getBanana() //
  .then((banana) => 
    getApple()
      .then((apple) => [banana, apple])
  )
  .then(console.log);
// [ '🍌', '🍎' ]

// Promise.all 
// 병렬적으로 한번에 모든 Promise를 실행! (1초/3초)
Promise.all([getBanana(), getApple()])
.then(fruits => console.log('all', fruits));
// all [ '🍌', '🍎' ]

// Promise.race 
// 주어진 Promise중에 제일 빨리 수행된 것이 이김! (1초)
Promise.race([getBanana(), getApple()])
.then(fruits => console.log('race', fruits));
// race 🍌

// 하나라도 통과하지 못하면 Error
Promise.all([getBanana(), getApple(), getOrange()])
.then(fruits => console.log('all-error', fruits))
.catch(console.log);
// (출력되지 않음)

// Promise.allSettled
// 실패하든 성공하든 결과를 출력해줌
Promise.allSettled([getBanana(), getApple(), getOrange()])
.then(fruits => console.log('allSettled', fruits))
.catch(console.log);
```

---

#### 참조👇
[Promise - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[프라미스](https://ko.javascript.info/promise-basics)