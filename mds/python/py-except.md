# [Python] 예외처리

### **예외처리**

> 발생하는 오류들을 회피하거나 처리하는 방법

<br />

## **try & except**

```python
try:  #  실행코드
  1/0  #  오류
except:  #  예외처리 코드
  print('에러났다!')  #  오류가 나면 실행

🔸
try:
  에러 문장
except:
  에러가 났을 때 실행할 문장
else:
  에러가 안나면 실행할 문장
finally:
  에러 발생 여부와 관계없이 실행할 문장


# 에러문장을 저장하고 싶다면
try:
  1/0
except Exception as e:  #  에러 문장을 변수로 설정
  print(e)
  print('에러났다!')


# 오류회피
try:
  1/0
except:
  pass  #  오류를 회피하고 다음 실행코드로 넘어감
```

<br />

## **raise & assert**

> 강제로 오류 발생

```python
raise 표현식('메세지입력')

🔸
a = 3

# 조건이 만족하지 않아 우측의 문자 출력
assert a > 10, 'a가 너무 작아서 에러가 나오네요'
```

<br />

## **예외(에러)의 종류**

- `ZereDivisionError`
  - 0으로 나눌 수 없음
- `NameError`
  - 정의되지 않은 변수
- `TypeError`
  - 타입 불일치
  - arguments 부족
  - arguments 초과
  - 첫번쨰 인자 타입 불일치
- `ValueError`
  - 밸류 값이 없음
- `IndexError`
  - 인덱스 범위를 벗어남
- `KeyError`
  - 키 없음 (주로 딕셔너리)
- `ModulNotFoundError`
  - 모듈 없음
- `ImportError`
  - 모듈은 있으나 클래스 또는 함수가 없음
- `IndentationError`
  - 잘못된 들여쓰기
- `KeyboardInter`
  - 임의로 프로그램을 종료할 때

---

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/tutorial/errors.html)
- 파이썬 내장 예외 클래스 계층 구조가 궁금하다면 [클릭](https://docs.python.org/ko/3/library/exceptions.html#exception-hierarchy)
- 오류 처리 방법이 궁금하다면 [클릭](./py-except.md)
