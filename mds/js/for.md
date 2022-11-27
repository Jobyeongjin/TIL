# [JS] 반복문 📝

<br />

## **for 💭**

- 초기화 구문인 초기문이 존재하면 초기문이 실행
  - 보통 1이나 반복문 카운터로 초기 설정 또는 복잡한 구문이나 변수로도 선언
- 조건문이 참이라면 반복문 실행
- 문장이 많은 경우 {} 를 써서 문장들을 묶어둠
- 갱신 구문인 증감문이 존재하면 실행되고 2번째 단계로 돌아감

```javascript
for ([초기문]; [조건문]; [증감문]) 문장;
```

<br />

## **do while 💭**

- 특정 조건이 거짓으로 판별될 때까지 반복
- 조건을 확인하기 전 문장은 한번만 실행
- 문장이 많은 경우 {} 를 써서 문장들을 묶어둠

```javascript
do 문장;
while (조건문);

// 예시
// 문장 : 1씩 증가하는 i를 출력
// 조건 : i가 5보다 작으면 반복
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

<br />

## **while 💭**

```javascript
while (조건문) 문장;

// 예시
// n이 1씩 증가하고, 증가한 n을 x에 더하기 할당
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

<br />

## **break vs continue 💭**

- `break` : 문장을 종료하고 탈출
- `continue` : 다음 진행으로 넘어감

<br />

## **for in 💭**

- `객체가 가진 속성`을 지정된 변수에 넣어서 반복

```javascript
for (variable in object) {
  statements;
}
```

<br />

## **for of 💭**

- `배열과 같은 반복가능한 객체`의 내용을 변수에 담아 반복

```javascript
for (variable of object) {
  statement;
}
```

<br />

---

```javascript
// 1. Loops
// while loop, while the condition is truthy,
// body code is excuted.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; codition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; J++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate form 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
```

---

#### **참조 📚**

- 자세한 내용이 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration)
