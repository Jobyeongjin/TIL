# Interface

[Documentation - Object Types](https://www.typescriptlang.org/docs/handbook/interfaces.html)

```typescript
// 인터페이스를 설정하면 타입을 제한하기 때문에 정의된 아이들만 사용 가능하다.
interface Person {
  name: string;
  age: number;
}

function hello(person: Person): void {
  console.log(`안녕하세요! 저는 ${person.name} 입니다.`);
}

const p1: Person = {
  name: '철수',
  age: 12,
};

hello(p1);
```

## Optional property

_물음표를 사용하면 나이는 선택적으로 입력할 수 있게 된다._

```typescript
// Optional types
interface Person {
  name: string;
  age?: number;
}

function hello(person: Person): void {
  console.log(`안녕하세요! 저는 ${person.name} 입니다.`);
}

const p1: Person = {
  name: '철수',
};

hello(p1);
```

## Indexable Types

```typescript
interface Person {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello(person: Person): void {
  console.log(`안녕하새요! 저는 ${person.name} 입니다.`);
}

const p1: Person = {
  name: '철수',
  brothers: ['기현', '현수'],
};

hello(p1);
```

## Function Types

```typescript
interface Person {
  name: string;
  age: number;
  hello(): void;
}

const p1: Person = {
  name: 'John',
  age: 12,
  hello(): void {
    console.log(`hello! my name is ${this.name}.`);
  },
};

// const p2: Person = {
//   name: 'anna',
//   age: 17,
//   // 화살표 함수를 사용할 수는 있지만, 여기서 This는 해당 객체를 가리키지 않는다.
//   hello: (): void => {
//     console.log(`hello! my name is ${this.name}.`);
//   },
// };

p1.hello();
```

## Class - implements

```typescript
interface IPerson {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`hello! My name is ${this.name}.`);
  }
}

const person = new Person('John');
person.hello();
```

## extends

```typescript
interface IPerson {
  name: string;
  age?: number;
}

interface IKorean extends IPerson {
  city: string;
}

const k: IKorean = {
  name: '철수',
  city: '서울',
  age: 12,
};
```

## Function Interface

```typescript
interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  console.log(`Hello! My name is ${name}.`);
};

helloPerson('John', 12);
```

## Readonly

```typescript
interface Person {
  name: string;
  age: number;
  readonly gender: string;
}

const p1: Person = {
  name: 'John',
  age: 12,
  gender: 'male',
};

p1.gender = 'female'; // 에러 발생 ❌
// gender는 바뀔 수 없는 값으로 지정했기 때문에 변경할 수가 없다.
```
