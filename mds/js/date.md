# Date

```jsx
// Class level
console.log(new Date()); // 현재 시간 
console.log(new Date('Jun 5, 2022')); // 날짜 지정
console.log(new Date('2022-12-17T03:24:00')); // 날짜, 시간 지정
console.log(Date.parse('2022-12-17T03:24:00')); // 밀리초 단위로 표기

// Instance level
const now = new Date();
// 원하는 시간으로 설정
now.setFullYear(2023);
now.setMonth(0);
console.log(now);

// 원하는 시간 가져오기
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());

// 원하는 문자형태로 변환
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('ko-KR'));
```

---
<br>

#### 참조👇
[Date - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)