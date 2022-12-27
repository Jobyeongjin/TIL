# Global

> 전역에서 사용할 수 있는 속성이나 함수

<br/>

```jsx
// 글로벌 속성
console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 문자열을 값으로 출력
eval('const num = 2; console.log(num)');

// 유한한 숫자인지 아닌지 확인
console.log(isFinite(1));
console.log(isFinite(Infinity));

// 실수로 변환
console.log(parseFloat('12.43'));

// 정수로 변환
console.log(parseInt('12.43'));

// 인코딩
const URL = 'https://한글이스케이프.com';
const encoded = encodeURI(URL);
console.log(encoded);

// 디코딩
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 사용
const part = '한글이스케이프.com';
console.log(encodeURIComponent(part));
```

---

<br/>

참조👇

[Standard built-in objects - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

[인코딩 & 디코딩](https://200301.tistory.com/9)
