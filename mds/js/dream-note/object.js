// Objects 📝
// one of the Javascript's data types.
// a collection of related data and/or functionlity.
// Nearly all objects in Javascript are instances of Object
// object = { key : value }; 💡


// 1. Literals and properties 📝
const obj1 = {}; // 'obejct literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavsScript magic (dynamically typed language)
// and add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties 📝
// key should be always string 💡
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;

function printValue(obj, key) {
  console.log(obj[key]);
  // console.log(obj.key); -> key는 어떤 걸 출력할지 코딩하는 시점에서는 모르니 위처럼 사용한다. 
  // computed properties는 동적으로 key와 관련된 value를 가져올 때 유용 💡
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand 📝
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

// 반복적으로 name, age를 사용하는 대신 아래와 같이 리턴하는 함수를 생성 💡
const person4 = new Person('ellie', 30);
console.log(person4);


// 4. Constructor Function 📝
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// 5. in operator: property existence check (key in obj) 📝
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);


// 6. for..in vs for..of 📝
// for (key in obj)
console.clear(); // -> 출력 지우기
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];

for (let i = 0; i < array.length; i++) { // -> 출력은 같으나 코드가 길어진다
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}


// 7. Fun cloning 📝
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user); // -> user를 복사하기 {커맨드 + 클릭} 으로 내부 확인해보기 💡
// const user4 = Object.assign({}, user); -> 리턴값을 바로 받아오기
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
