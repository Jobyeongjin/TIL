# Compatibility

호환성

## Sub Type

서브 타입

```typescript
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // Error, 서브타입에는 슈퍼타입을 넣을 수 없다.

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2; // Error

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3; // Error

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4; // any는 아무거나 넣을 수 있기 때문에 에러를 발생하지 않는다.

// sub5 타입은 sup5 타입의 서브 타입이다.
class Animal {}
class Dog extends Animal {
  eat() {}
}
let sub5: Dog = new Dog();
let sup5: Animal = sub5;
sub5 = sup5; // Error
```

## 공변

_같거나 서브 타입인 경우, 할당이 가능하다._

```typescript
// primitive type
let sub: string = '';
let sup: string | number = sub;

// object
let sub: { a: string; b: number } = {a: '', b: 1 };
let sup: { a: string | number; b: number } = sub;

// array
let sub: Array<{ a: string; b: number }> = [{ a: ''; b: 1 }];
let sup: Array<{ a: string | number; b: number }> = sub;
```

## 반공변

_함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다._

```typescript
// Person > Developer > StartupDeveloper
class Person {}
class Developer extends Person {}
class StartupDeveloper extends Developer {}

// Developer를 인자로 받고, Developer를 리턴하는 함수
function tellme(f: (d: Developer) => Developer) {}

// Developer를 인자로 받음 -> 타입이 같기 때문에 문제없음
tellme(function dToD(d: Developer): Developer) {
	return new Developer();
});

// Person을 인자로 받음 -> 상위 형태인 슈퍼타입이기 때문에 문제없음
tellme(function pToD(d: Person): Developer) {
	return new Developer();
});

// StartupDeveloper를 인자로 받음 -> 하위 형태이기 때문에 에러 발생(strict 옵션을 킨 경우)!
tellme(function sToD(d: StartupDeveloper): Developer) {
	return new Developer();
});
```
