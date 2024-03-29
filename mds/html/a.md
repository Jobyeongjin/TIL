# [HTML] 하이퍼링크 삽입 📝

<br />

## **\<a> 💭**

> 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소 등 다른 URL로 연결할 수 있는 하이퍼링크를 생성합니다.

```html
<a href="연결할 주소"></a>
```

- 링크 안 콘텐츠는 링크가 향하는 곳을 설명해야 합니다.
- \<a> 태그를 버튼으로 사용하는 것은 지양해야 합니다.
  - 흔히 `herf='#'` 또는 `javascript:void(0)` 으로 지정해 페이지 새로고침을 막아서 버튼처럼 사용하는 패턴이 자주 사용되고 있음.
- \<a> 태그 안의 콘텐츠는 링크 목적지의 설명을 나타내야 합니다.
  - 아이콘을 사용해 링크의 행동을 강조할 땐 대체 텍스트를 꼭 지정해주세요.
- \<a> 태그의 요소 크기는 최소 44\*44px 크기를 권고합니다.

<br />

## **속성 💭**

| 속성   | 설명                                                                                                                                                                                                                       | 비고 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| href   | 연결할 URL 지정                                                                                                                                                                                                            | 필수 |
| tel    | URL을 사용하는 번호 지정                                                                                                                                                                                                   |      |
| mailto | URL을 사용하는 이메일 주소 지정                                                                                                                                                                                            |      |
| target | 링크한 URL을 표시할 위치를 지정<br />\_self : 현재 페이지에서 바로 이동<br />\_blank : 새 탭에서 이동<br />\_parent : 부모 페이지에서 이동<br />\_top : 최상단 브라우징 맥락에 표시 / 부모가 존재하지 않으면 \_self와 동일 |      |
|        |                                                                                                                                                                                                                            |

<br />

---

#### **참조 📚**

- 공식 문서가 궁금하다면 [클릭](./a.md)
