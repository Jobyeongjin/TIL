# [python] 오류 처리

## **오류시 체크사항 🚨**

> 제어가 되는 시점

- `branches`
  - 모든 조건이 제대로 동작하는지
- `for loops`
  - 반복문에 진입하는지
  - 원하는 횟수만큼 실행하는지
- `while loops`
  - 반복문에 진입하는지
  - 종료조건이 제대로 동작하는지
- `function`
  - 함수 호출
  - 함수 파라미터
  - 함수 결과

<br />

## **디버깅 🚨**

> 프로그램에서 의도치 않게 실행되는 오류를 수정하는 작업

- `print` 함수 활용
  - 특정 함수 결과
  - 반복, 조건 결과
  - 코드를 쪼개서 생각
- `개발 환경`(text editor, IDE)에서 제공하는 기능 활용
  - breakpoint, 변수 조회 드
- `python tutor` 활용
- 뇌컴파일, 눈디버깅

<br />

## **문법 에러 (Syntax Error)**

> 문법 에러가 발생하면 파이썬 프로그램은 실행되지 않음

- `EOL (End if Line)`
  - "" 따옴표를 안 적은 경우
- `EOF (End of File)`
  - () 괄호가 안 닫힌 경우
- `Invalid syntax`
  - : 콜론을 안 적은 경우
- `assign to literal`
  - 상수에 값을 할당하려고 한 경우

<br />

---

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/tutorial/errors.html)
- 예외 처리가 궁금하다면 [클릭](./py-except.md)
