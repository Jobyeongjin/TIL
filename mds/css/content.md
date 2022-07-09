# [CSS] 가상요소 선택자 만들기

### 구분선 삽입

- `::before` 또는 `::after` 사용하여 콘텐츠 추가
- 가상요소는 인라인 요소

<br />

```html
<ul>
  <li>문자1</li>
  <li>문자2</li>
  <li>문자3</li>
  <li>문자4</li>
</ul>
```

```css
🔸 방법1 li::before {
  content: "|";
  float: right;
  color: black;
  margin-right: -15px;
}

li:last-child::before {
  /* 문자 사이에만 적용할 것이니 마지막 자식에는 컨텐츠 제거 */
  content: none;
}

🔸 방법2 ul {
  display: flex;
}
li {
  position: relative;
}
li::before {
  content: "";
  display: block;
  width: 1px;
  height: 12px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
li:last-child::before {
  display: none;
}
```

<br />

📚 참고

- 콘텐츠 속성이 더 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Generated_Content)
