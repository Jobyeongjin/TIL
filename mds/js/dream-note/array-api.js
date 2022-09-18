// Q1. make a string out of an array 📝
{
  const fruits = ['apple', 'banana', 'orange'];
  // result!!
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string 📝
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // result!!
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] 📝
{
  const array = [1, 2, 3, 4, 5];
  // result!!
  const result = array.reverse();
  console.log(result);
  console.log(array); // -> 배열 자체를 변경
}

// Q4. make new array without the first two elements 📝
{
  const array = [1, 2, 3, 4, 5];
  // result!!
  const result = array.slice(2, 5); // -> 원하는 부분만 리턴해서 받아와 배열 자체에는 변화가 없다 💡
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
  const result = array.splice(0, 2);
  console.log(result); // [1, 2]
  console.log(array); // [3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 📝
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students 📝
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores 📝
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50 📝
{
  const result = students.some((student) => student.score < 50);  // some -> 조건을 만족하는 게 있는지 확인할 때 사용 💡
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50); // every -> 모든 조건이 만족하면 참, 아니면 거짓
  console.log(result2);
}

// Q9. compute students' average score 📝
{
  // reduce() -> 배열을 순회하면서 값을 누적할 때 사용 💡
  // curr: 배열의 요소를 순차적으로 전달받음
  // prev: 콜백함수에서 리턴받은 값을 전달받음
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores 📝
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order 📝
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}
