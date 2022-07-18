# [Python] 예외처리

### **예외처리하기**

- 발생하는 오류들을 회피하거나 처리하는 방법

<br />

### **try & except**

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

### **raise & assert**

- 강제로 오류 발생시키는 방법

```python
raise Exception('강제로 에러 발생')

🔸
a = 3

assert a > 10, 'a가 너무 작아서 에러가 나오네요'  #  조건이 만족하지 않아 우측의 문자 출력
```
