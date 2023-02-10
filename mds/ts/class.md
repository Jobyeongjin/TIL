# Class

## basic Class

```typescript
// ES6에 도입된 JavaScript의 Class와 큰 차이가 없어 보인다.
class Person {}
```

## Field declaration

```typescript
// new 라는 키워드를 사용하여 객체를 생성한다.
const p = new Person();
```

## Constructors

```typescript
class Person {
  name!: string;
  age: number;
  // 생성자 함수를 통해 값을 전달받을 수 있다.
  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person('John');
// 객체를 생성하면서 클래스에 값을 전달한다.

// parameters
class Person {
  // 따로 작성할 필요없이 바로 할당할 수 있다.
  constructor(public name: string, public age: number) {}
}

const p1 = new Person('John', 12);
```

## Access modifier

```typescript
class Person {
  // 클래스 내부에서 설정한다.
  // 접근 제어자 종류: public(기본값), private(외부접근불가), protected(private과 동일하지만 상속 관계에서도 접근 가능)
  public name!: string;
  public age!: number;

  private constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}

const p1 = new Person();
```

## readonly

```typescript
class Person {
  public readonly name: string = 'John';
  private readonly country: string;

  public constructor(public _name: string) {
    this.country = 'Korea';
  }

  hello() {
    // 다른 값으로 변경할 수 없고(에러 발생), 읽기만 가능하다.
    this.country = 'China';
  }
}
```

## Index Signature

```typescript
// 동적으로 프로퍼티가 들어오는 경우 사용할 수 있다.
class Students {
  [index: string]: 'male' | 'female';
}

const a = new Students();
a.mark = 'male';
a.jade = 'male';

const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';
```

## Static Properties & Methods

```typescript
class Person {
	// static property == class level
  static CITY. = "Seoul";
	// method == instance level
	public hello() {
    console.log('hi!');
  }
}

const p1 = new Person();
// instance level
p1.hello();

// class level
Person.hello();
```

## Inheritance

```typescript
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`My name is ${this._name}, I'm ${this._age} years old.`);
  }

  protected printName(): void {
    console.log(this._name);
  }
}

const p = new Parent('John', 22);
p.print();

class Child extends Parent {
  public gender = 'male';

  constructor(age: number) {
    // 자식 생성자에서는 항상 super를 먼저 호출해줘야 한다.
    super('John Jr.', age);
    this.printName();
  }
}

const c = new Child(5);
c.print();
c.gender;
```

## Abstract

```typescript
abstract class AbstractPerson {
  protected _name: string = 'John';

  abstract setName(name: string): void;
}

// new AbstractPerson() ❌
// - abstact은 기능이 완전하지 않다라는 걸 말하고, 이 때문에 클래스를 만들 수 없다.

// 클래스를 상속받아 완전하지 않은 기능을 마저 구현한다.
class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person();
```
