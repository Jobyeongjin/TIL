# Class

> 객체를 생성하기 위한 템플릿

<br/>

```jsx
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple하고 orange는 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
```

<br/>

## Static

클래스 함수 자체에 메소드 설정

```jsx
// 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// Class
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(MAX_FRUITS);

// Instance
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
```

<br/>

## Field

외부에서 보이지 않도록 숨김

```jsx
// 접근제어자 - 캡슐화
// private(#), public(기본)
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}
const apple = new Fruit('apple', '🍎');
console.log(apple);

// #field는 외부에서 접근이 불가능
apple.#name = '오렌지';
apple.display();
```

<br/>

## Getter & Setter

함수를 변수처럼 만듬

```jsx
// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // 함수지만 행위보다는 속성에 가깝기 때문에 get을 사용하여 속성처럼 만듬
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
console.log(student.firstName);

// console.log(student.fullName());
console.log(student.fullName);
student.fullName = '김철수';
```

<br/>

## Extends

부모 클래스의 속성을 상속받음

- `super`: 상속하고 있는 부모 클래스를 가리킴
- `overriding`: 부모 클래스의 함수나 속성에 덮어씌우는 행위

```jsx
// 부모 클래스
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹고');
  }
  sleep() {
    console.log('자고');
  }
}

// 자식 클래스
class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

// 자식 클래스
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // super
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀고');
  }
  // overriding
  eat() {
    super.eat(); // 부모 함수도 같이 호출할 때 super를 사용
    console.log('강아지는 먹는다');
  }
}
const dog = new Dog('빨강이', '수지');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
```

---

<br/>

#### 참조👇

[Classes - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

[정적 메서드와 정적 프로퍼티](https://ko.javascript.info/static-properties-methods)

[Class Public & Private field MDN 내용 정리](https://velog.io/@mollog/Class-Public-Private-field-MDN-%EB%82%B4%EC%9A%A9-%EC%A0%95%EB%A6%AC)
