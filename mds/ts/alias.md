# Alias

_타입을 다른 이름으로 지정할 수 있음_

```typescript
// primitive
type MyStringType = string;

let myStr: MyStringType = 'hello';

// union
type StringOrNumber = string | number;

let another: StringOrNumber = 0;

// tuple
type PersonTuple = [string, number];

let another: PersonTuple = ['Tim', 26];

// function
type EatType = (food: string) => void;

// object
type Student = {
  name: string;
  age: number;
};
```
