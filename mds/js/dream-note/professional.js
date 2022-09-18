// Ternary Operator 📝
// ❌ Bad Code 
function getResult(score) {
  let result;
  if (score > 5) {
    resilt = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result;
}

// ✅ Good Code ✨
function getResult(score) {
  return score > 5 ? '👍' : '👎';
}


// Nullish coalescing operator 📝
// ❌ Bad Code 
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display 😜';
  }
  console.log(message);
}

// ✅ Good Code ✨
function printMessage(text) {
  const message = text ?? 'Nothing to display 😜';
  console.log(message);
}

// 🚨 Default parameter is only for undefined
function printMessage(text = 'Nothing to display 😜') {
  console.log(text);
}

printMessage('Hello'); // 'Hello'
printMessage(undefined); // 'Nothing to display 😜'
printMessage(null); // null

// Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display 😜';
  console.log(message);
}

printMessage('Hello'); // 'Hello'
printMessage(undefined); // 'Nothing to display 😜'
printMessage(null); // 'Nothing to display 😜'


// Object Destructuring 📝
const person = {
  name: 'Julia',
  age: 20,
  phone: '01077777777',
};
// ❌ Bad Code 
function displayPerson(person) {
  displayAvator(person.name);
  displayName(person.name);
  displayProfile(person.namem person.age);
}

// ✅ Good Code ✨
function displayPerson(person) {
  const { name, age } = person;
  displayAvator(name);
  displayName(name);
  displayProfile(name, age);
}


// Spread Syntax - Object 📝
const item = { type: '👔', size: 'M'};
const detail = { price: 20, made: 'Korea', gender: 'M'};

// ❌ Bad Code 
item['price'] = detail.price;

// ❌ Bad Code 
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

// ❌ Bad Code 
const newObject2 = {
  type: item.type,
  size: item.size,
  price: item.price,
  made: item.made,
  gender: item.gender
}

// ✅ Good Code ✨
const shirt0 = Object.assign(item, detail);

// ✅ Better! Code ✨
const shirt = { ...item, ...detail };
const shirt = { ...item, ...detail, price: 40 }; // 기존 데이터를 업데이트 가능 💡


// Spread Syntax - Array 📝
let fruits = ['🍉', '🍅', '🍌'];

// fruits.push('🍓');
fruits = [...fruits, '🍓'];

// fruits.unshift('🍇');
fruits = ['🍇', ...fruits];

const fruits2 = ['🍈', '🍑', '🍍'];
let combined = fruits.concat(fruits2);
combined = [...fruits, ...fruits2];


// Optional Chaining 📝
const bob = {
  name: 'Julia',
  age: 20,
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};

// ❌ Bad Code 
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  const title = person.job?.title ?? 'No Job Yet 🔥';
  console.log(title);
}


// Template Literals (Template String) 📝
const person = {
  name: 'Julia',
  score: 4,
};

// ❌ Bad Code 
console.log(
  'Hello' + person.name + ', Your current score is: ' + person.score
);

// ✅ Good Code ✨
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// ✅ Good Code ✨
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// ✅ Better! Code ✨ -> 자주 반복되는 코드는 재사용이 가능한 함수를 만들어서 사용하는 것이 확장성, 유지보수성에도 좋다 💡
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}


// Looping 📝
const items = [1, 2, 3, 4, 5, 6];

// ❌ Bad Code -> 아래와 같이 일일이 수동적으로 함수를 만들어 사용
const evens = getAllEvens(items);
const multiple = multiplyByFour(items);
const sum = sumArray(items);
console.log(sum)

function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

// ✅ Good Code ✨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// ✅ Good Code ✨
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);


// Promise -> Async/await 📝

// ❌ Bad Code 
function displayUser() {
  fetchUser() 
    .then((user) => {
      fetchProfile(user)
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// ✅ Good Code ✨
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}


// Remove Duplicates! 📝
const array = ['🐶', '🐱', '🐈', '🐶', '🦉', '🐱'];
console.log(array);

console.log([...new Set(array)]);