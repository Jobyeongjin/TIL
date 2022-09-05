# [HTML] Table 📝

## **\<table> 💭**

- table의 각 영역을 명시하기 위해 `<thead> <tbody> <tfoot>` 요소를 활용
  - 반드시 필수 요소는 아님
- `<tr> 으로 가로 줄을 구성`하고 내부에는 `<th> 혹은 <td>`로 셀을 구성
- `colspan, rowspan` 속성을 활용하여 셀 병합
- `<caption>` 을 통해 표 설명 또는 제목을 나타냄

<br />

## **table 태그 속성 💭**

| 속성        | 설명            | 비고 |
| ----------- | --------------- | ---- |
| border      | 테두리 두께     |      |
| bordercolor | 테두리 색상     |      |
| width       | 가로 크기       |      |
| height      | 세로 크기       |      |
| align       | 정렬 방식       |      |
| bgcolor     | 배경색          |      |
| colspan     | 행 합치기(가로) |      |
| rowspan     | 열 합치기(세로) |      |
|             |                 |      |

<br />

#### **참조 📚**

- 공식 문서가 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/HTML/Element/table)

<br />

---

# [HTML] Form 📝

<br />

## **\<form> 💭**

> 웹 서버에 정보를 제출하기 위한 양식 범위를 정의하는 태그

- \<form> 기본 속성

| 속성    | 설명                                                                                                                                                     | 비고 |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| action  | form을 처리할 서버의 URL(데이터를 보낼 곳)                                                                                                               |      |
| method  | form을 제출할 때 사용할 HTTP 메서드 (GET 혹은 POST)                                                                                                      |      |
| enctype | method가 post인 경우 데이터의 유형<br />- application/x-www-form-urlencoded : 기본값<br />- multipart/form-data : 파일 전송시 (input type이 file인 경우) |      |
|         |                                                                                                                                                          |      |

<br />

## **\<input> 💭**

- 다양한 타입을 가지는 입력 데이터 유형과 위젯이 제공됨
- \<input> 대표적인 속성

| 속성         | 설명                                                              | 비고 |
| ------------ | ----------------------------------------------------------------- | ---- |
| name         | form control에 적용되는 이름                                      |      |
| value        | form control에 적용되는 값                                        |      |
| required     | 필수 입력값 지정                                                  |      |
| readonly     | 입력 필드 비활성화(읽기 전용)                                     |      |
| autofocus    | 페이지 로딩 시 마우스 커서가 표시되도록 설정                      |      |
| autocomplete | 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 |      |
| disabled     | 입력 필드 비활성화<br />- readonly와 같으나, 값이 전송되지 않음   |      |
| target       | 현재 창이 아닌 다른 위치에 열도록 지정                            |      |
|              |                                                                   |      |

<br />

## **input label 💭**

- label을 클릭하여 input 자체의 초점을 맞추거나 활성화시킬 수 있음
  - 사용자는 선택할 수 있는 영역이 늘어나 웹/모바일(터치) 환경에서 편하게 사용할 수 있음
  - label과 input 입력의 관계가 시각적 뿐만 아니라 화면리더기에서도 label을 읽어 쉽게 내용을 확인할 수 있도록 함
  - `<input>에 id 속성`을, `<label>에는 for 속성`을 활용하여 상호 연관을 시킴

<br />

## **input 유형 💭**

| 유형     | 설명                                                | 비고 |
| -------- | --------------------------------------------------- | ---- |
| text     | 일반 텍스트 입력                                    |      |
| password | 입력 시 값이 보이지 않고 문자를 특수기호(\*)로 표현 |      |
| email    | 이메일 형식이 아닌 경우 form 제출 불가              |      |
| number   | min, max, step 속성을 활용하여 숫자 범위 설정 가능  |      |
| file     | accept 속성을 활용하여 파일 타입 지정 가능          |      |
| checkbox | 다중 선택                                           |      |
| radio    | 단일 선택                                           |      |
| color    | 색상표                                              |      |
| date     | 날짜 입력                                           |      |
| hidden   | 사용자에게 보이지 않는 input 필드                   |      |
| search   | 검색 상자                                           |      |
| tel      | 전화번호 입력 필드                                  |      |
| submit   | 서버전송 버튼                                       |      |
|          |                                                     |      |

<br />

---

#### **참조 📚**

- 공식 문서가 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form)
- 공식 가이드가 궁금하다면 [클릭](https://developer.mozilla.org/ko/docs/Learn/Forms)
