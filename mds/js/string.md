# String


```jsx
const textObj = new String('Hello World');
const text = 'Hello World!';
console.log(textObj); // object
console.log(text); // srting

// 문자열의 길이
console.log(text.length);

// 인덱스의 문자 확인
console.log(text[0]);
console.log(text.charAt(0));

// 해당 문자의 인덱스 찾기
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

// 해당 문자가 있는지 확인
console.log(text.includes('tx'));

// 시작하는, 끝나는 문자 확인
console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

// 대소문자로 변경
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 슬라이싱
console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

// 공백 제거
const space = '      space       ';
console.log(space.trim());

// 공백으로 기준으로 나누기
const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
```

---

<br>

#### 참조👇
[String - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)