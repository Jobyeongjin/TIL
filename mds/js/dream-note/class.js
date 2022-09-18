'use strict';
// Object-oriendted programming 📝
// class: template
// object: instance of a class
// JavaScript classes
//  - introducted in ES6
//  - syntactical sugar over prototype-based inheritance


// 1. Class declarations 📝
// 붕어빵 틀
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!!`);
  }
}

// 붕어빵 만들기
const ellie = new Person('ellie', 20); // new -> 새로운 오브젝트를 만들 때 사용
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters 📝
// age가 -1이 될 수는 없기에 이를 방지하기 위해 getter와 setter를 사용한다. 
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be nevative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('steve', 'Job', -1); 
console.log(user1.age);


// 3. Fields (public, private) 📝
// Too soon! -> 가장 최신의 버전이라 최신 브라우저에서도 지원이 안되니 주의!
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and nethods 📝
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance 📝
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // OverRiding 👍
  // 부모 클래스로부터 상속받은 메소드를 자식 클래스에서 재정의하여 사용한다.
  draw() {
    // super -> 부모의 메소드도 같이 사용하고 싶을 때 사용 👍
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf 📝
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());