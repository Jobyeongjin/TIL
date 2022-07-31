# [Base64] Base64 인코딩이란?

## **인코딩**

> 정보의 형태나 형식을 표준화, 보안, 처리 속도 향상, 저장 공간 절약 등을 위해서 다른 형태나 형식으로 변환하는 처리 혹은 처리 방식

<br />

## **Base64**

> 64진법

- 2의 제곱수에 기반한 진법 중 화면에 표시되는 ASCII 문자들로 표시할 수 있는 가장 큰 진법
- **길이가 33% 정도 늘어남에도 불구하고 사용하는 이유**
  - `64개의 안전한 출력 문자` 사용
    - 암호화 시에 특수 문자나 기호들이 생기면서 데이터 송수신에서 오류가 생길 수 있음
    - 아스키코드에 포함된 126개의 문자와 제어문자 중 일부는 하드웨어나 운영체제에 따라 인코딩 형태가 다르거나 존재하지 않을 수도 있음

<br />

```python
# 인코딩
import base64

w = 'Hello World!'
e = w.encode('UTF-8')
r = base64.b64encode(e)

print(r)
>>> SGVsbG8gV29ybGQh
```

```python
# 디코딩
import base64

w = 'SGVsbG8gV29ybGQh'
e = w.encode('UTF-8')
r = base64.b64decode(d)

print(r)
>>> Hello World!
```

---

<br />

#### 📚 참조

- Base64 테이블 [클릭](https://wookkl.tistory.com/22)
- 자세한 내용이 궁금하다면 [클릭](https://en.wikipedia.org/wiki/Base64)
- 공식 문서가 궁금하다면 [클릭](https://docs.python.org/ko/3.7/library/base64.html)
- 인코딩 사용법이 궁금하다면 [클릭](https://ao.ms/how-to-base64-encode-a-string-in-python/)
