# SCSS

> Syntactically Awesome Style Sheets

- **CSS Preprocessor: CSS 전처리기**
- `SASS는 들여쓰기`로 구분하고, `SCSS는 CSS와 동일`하게 중괄호와 세미콜론으로 구분

## 주석처리

한 줄 주석`//`은 SCSS에서 제공하는 방법으로 컴파일 변환시 기록이 남지 않음

```scss
/* 여러 줄 주석 */
// 한줄 주석
```

## 제공기능

### **변수(Variable) 할당**

```scss
// 글로벌 변수
$globalSize: 100px;

.container {
  // 지역 변수
  $size: 200px;
  position: fixed;
  top: $size;
  .item {
    width: $size;
    height: $size;
    transform: translateX($globalSize);
  }
}
```

### **중첩(Nesting)**

가독성 높임

```scss
.container {
  ul {
    list-style: none;
    li {
      font-size: 40px;
      .name {
        color: royalblue;
      }
      .age {
        color: orange;
      }
    }
  }
}
```

### **모듈화(Modularity)**

파일 분할

```scss
/* base.scss */
$primary-color: #333;

body {
  color: $primary-color;
}

/* style.scss */
@use 'base';
.inverse {
  background-color: base.$primary-color;
}
```

### **믹스인(Mixins)**

함수처럼 사용

```scss
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  @include center;
  .item {
    @include center;
  }
}
.box {
  @include center;
}
```

```scss
@mixin box($size: 100px, $color: tomato) {
  width: $size;
  height: $size;
  background-color: $color;
}
.container {
  @include box(200px, red);
  .item {
    @include box($color: green);
  }
}
.box {
  @include box;
}
// 인수를 넣어서 사용할 수 있고, 기본값 지정도 가능하다.
```

```scss
@mixin left-top {
  position: absolute;
  top: 0;
  left: 0;
  @content;
}
.box {
  width: 200px;
  height: 200px;
  @include left-top {
    bottom: 0;
    right: 0;
    margin: auto;
  }
}
// Content를 사용하여 내용을 확장시킬 수 있다.
```

### **확장 & 상속(Extend & Inheritance)**

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

### **연산자(Operators)**

산술 연산

```scss
div {
  width: 20px + 20px;
  height: 40px - 10px;
  font-size: 10px * 2;
  margin: (30px / 2);
  padding: 20px % 7;
}
// 나누기는 CSS 단축 속성과 겹쳐서 나눌 수 없기 때문에 산술할 것이라고 명시해줘야 한다.
```

## 규칙

### 부모 선택자 참조 `&`

```scss
.list {
  li {
    &:last-child {
      margin: 0;
    }
  }
}
```

### 네스팅

```css
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  }
  margin: {
    top: 10px;
    left: 20px;
  }
}
```

### 반복문

```scss
// 자바스크립트
// for (let i = 0; i < 10; i += 1) {
//   console.log(`loop-${i}`);
// }

// SCSS
@for $i from 1 through 10 {
  .box:nth-child(#{$i}) {
    width: 100px * $i;
  }
}
// 인덱스는 1부터 시작하고, 변수 보간처리는 #{}
```

### 함수

```scss
@function ratio($size, $ratio) {
  @return $size * $ratio;
}

.box {
  $width: 100px;
  width: $width;
  height: ratio($width, 1/2);
}
```

---

참조👇

[Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)
