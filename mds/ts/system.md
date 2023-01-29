# System

- 타입을 명시적으로 지정할 수 있다.
- 타입을 명시적으로 지정하지 않으면, 컴파일러가 자동으로 타입을 추론한다.

<br />

# Type System

_타입이란 해당 변수가 할 수 있는 일을 결정합니다._

```tsx
// 타입을 명시적으로 지정하지 않은 경우, 컴파일러는 a를 any로 추정하게 되고,
// 이 함수의 리턴 타입은 number로 추론한다.
function aNumber(a) {
  return a * 12;
}

console.log(aNumber(10)); // 120
console.log(aNumber('string') + 5); // NaN
```

<br />

# Config Option

[TSConfig Reference - Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig)

## nolmplicitAny

_타입스크립트가 추론 중에 “any” 라고 판단하게 되면 컴파일 에러를 발생시켜 사용자가 명시적으로 지정할 수 있도록 유도한다._

## nolmplicitReturns

_함수 내에서 모든 코드가 값을 리턴하지 않은 경우 컴파일 에러를 발생한다._

## strictNullChecks

_모든 타입에 자동으로 포함되어 있는 ‘null’ 과 ‘undefined’ 를 제거한다._

## strictFunctionTypes

_함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우 에러를 발생한다._
