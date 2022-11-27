# [JS] 조건문 📝

<br />

## **if 💭**

- `조건이 참일 때 실행`
- `else if` 를 사용하여 다수의 조건 작성
- `false 값으로 평가되는 것들 = false, undefined, null, 0, NaN, ""`

```javascript
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

<br />

### **Ternary operator**

- `condition ? value1 : value2;`

```JavaScript
// 이름이 철수가 맞으면 yes 아니면 no를 출력
console.log(name === '철수' ? 'yes' : 'no');
```

<br />

## **switch 💭**

- if문이랑 동일
  - 조건이 계속 반복되는 경우, 가독성을 고려해서 적절히 사용하는 것이 좋아보인다.

```javascript
switch (expression) {
  case label_1:
    statements_1;
    break;
  case label_2:
    statements_2;
    break;
    …
  default:
    statements_default;
}
```

<br />

---

```javascript
// 1. Conditional(조건) operators: if
// if, else if, else
const name = "df";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazine coder");
} else {
  console.log("unkwnon");
}

// 2. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 3. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}
```

---

#### **참조 📚**

- 자세한 내용이 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
