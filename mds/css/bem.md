# [CSS] BEM 📝

## BEM(Block Element Modifier) 💭

> CSS 구조를 개선하기 위한 방법론 중 하나입니다.

```css
.header__navi--navi-text {
  color: red;
}
```

| 명칭     | 설명                         | 비고 |
| -------- | ---------------------------- | ---- |
| Block    | 전체를 감싸고 있는 블럭 요소 |      |
| Element  | 블럭을 구성하는 조각 요소    |      |
| Modifier | 볼럭 또는 요소의 속성을 담당 |      |
|          |                              |

<br />

## **Block**

```html
<div class="nav">
  <ul class="nav__link">
    link
  </ul>
  <button class="nav__btn">button</button>
</div>
```

- `nav` : 블럭
- `nav__link` : 조각 요소
- `nav__btn` : 조각 요소

<br />

## **Element**

```html
<div class="cards">
  <div class="card">
    <img class="card__img" />
    <div class="card__content">
      <h2 class="card__title">title</h2>
      <p class="card__text">text</p>
    </div>
  </div>
</div>
```

- `card > card__img + card__content > card__title + card__text`
- 여기서 card\_\_content 안에 title과 text가 있다고 해서 케스케이딩을 여러 번 사용할 필요가 없습니다.
- 예를 들면 `card__content__title (X)`

<br />

## **Modifier**

```html
<ul class="nav">
  <li class="nav__link nav__link--focused">focused</li>
  <li class="nav__link">link</li>
  <li class="nav__link">link</li>
</ul>
```

- `다르게 생기거나, 다르게 동작`하는 블럭이나 엘리먼트를 만들 떄 사용합니다.
