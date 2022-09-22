# [Django] Django Template 📝

## **Django Template 💭**

<br />

> 데이터 표현을 제어하는 도구이자 표현에 관련된 로직

- `HTML 정적 부분과 동적 컨텐츠 삽입`
- Template System의 기본 목표는?
  - `데이터 표현을 제어하는 도구이자 표현에 관련된 로직을 담당`한다는 것에 있음

---

<br />

## **Django Template Language(DTL) 💭**

> Bulit-in template system

<br />

- `조건, 반복, 변수 치환, 필터 등의 기능을 제공`
  - pyrhon처럼 일부 프로그래밍 구조(if, for 등)를 사용할 수 있지만 python 코드로 실행되는 것은 아님
  - Django 템플릿 시스템은 단순히 Python이 HTML에 포함된 것이 아니니 주의!
- `프로그래밍적 로직이 아니라 프레젠테이션을 표현하기 위한 것`

<br />

---

## **DTL Syntax 💭**

<br />

### **Variable** 📙

`{{ variable }}`

- 변수명은 영어, 숫자와 밑줄(\_)의 조합으로 구성될 수 있으나 밑줄로는 시작할 수 없음
- Dot(.)을 사용하여 변수 속성에 접근
- Render()의 세번째 인자로 딕셔너리 형태로 넘겨주며, 여기서 정의한 key에 해당하는 문자열이 template에서 사용 가능한 변수명이 됨

<br />

### **Filters** 📙

`{{ variable|filter }}`

- 표시할 변수를 수정할 때 사용
  - 예시) `{{ name|lower }}`
  - : name 변수를 모두 소문자로 출력
- 60개의 built-in template filters를 제공
- chained가 가능하며 일부 필터는 인자를 받기도 함
  - {{ name|truncatewords:30 }}

<br />

### **Tags** 📙

`{% tag %}`

- 출력 텍스트를 만들거나, 반복 또는 논리를 수행하여 제어 흐름을 만드는 등 변수보다 복잡한 일들을 수행
- 일부 태그는 시작과 종료 태그가 필요
  - 예시) `{% if %}{% endif %}`
- 약 24개의 built-in template tags를 제공

<br />

### **Comments** 📙

`{# #}`

- Django template에서 라인의 주석을 표현하기 위해 사용
- 한 줄 주석에만 사용할 수 있음
- 여러 줄 주석은 `{% comment %} {% endcomment %}` 사이에 입력
