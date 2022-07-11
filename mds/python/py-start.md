# [ Python ] 시작하기

- 파이썬은 다른 언어와 다르게 특정 부분을 구분하기 위해 ; 이나 { } 등 기호로 시작과 끝을 표현하는 것이 아닌 `들여쓰기` 로 구분

- 변수 이름에는 공백이 없어야 하고, `소문자` 로 작성하며, 여러 단어일 경우 `snake_case` 로 작성

  - 예시 : super_long_name

#### **타입의 종류**

```python
a = 100  #  정수
b = 6.76  #  실수
c = '안녕'  #  문자열
d = False  #  참 혹은 거짓
e = None  #  존재하지 않음
```

<br />

#### **기본연산**

```python
x = 1
y = 2
z = 1.2

print(x + y)  #  덧셈
print(x - y)  #  뺄셈
print(x * y)  #  곱하기
print(x / y)  #  나누기
print(x ** y)  #  제곱
print(x // y)  #  몫
print(x % y)  #  나누기의 나머지

x = 4
y = '4'

print(x + y)  #  다른 타입끼리는 에러
print(str(x) + y)  #  x 를 문자열로 변환
print(x + int(y))  #  y 를 숫자로 변환
```

<br />

#### **기초연산자**

| 표식   | 설명                           | 예시       |
| ------ | ------------------------------ | ---------- |
| ==     | 연산자들이 같으면 참           | x == y     |
| !=     | 연산자들이 다르면 참           | x != y     |
| >      | 왼쪽이 클 경우 참              | x > y      |
| <      | 왼쪽이 작을 경우 참            | x < y      |
| >=     | 왼쪽이 크거나 같을 경우 참     | x >= y     |
| <=     | 왼쪽이 작거나 같을 경우 참     | x <= y     |
| and    | 둘 모두 참이어야 참            | x and y    |
| or     | 둘 중 하나라도 참이면 참       | x or y     |
| not    | 참일 경우 거짓, 거짓일 경우 참 | not(x)     |
| is     | 동일한 객체일 경우 참          | x is y     |
| is not | 동일한 객체가 아닌 경우 참     | x is not y |
| in     | 동일한 자식을 찾을 경우 참     | x in y     |

<br />

#### **시퀀스 타입**

- 자세한 내용은 [여기](./py-sequence.md)

<br />

#### **함수 정의**

- 자세한 내용은 [여기](./py-function.md)

<br />

#### **모듈이란 ?**

- 자세한 내용은 [여기](https://formal.hknu.ac.kr/ProgInPython/notebooks/PiPy06B-ModulesAndPackages.html)
- 간략한 내용은 [여기](https://blockdmask.tistory.com/542)

<br />

#### 📚 참조

- 파이썬 도서관 자료가 궁금하다면 [클릭](https://docs.python.org/3/library/)
  - 한국어가 최고라고 생각한다면 [클릭](https://docs.python.org/ko/3/tutorial/index.html)
- 연산자가 궁금하다면 [클릭](https://gostart.tistory.com/206)

<br />
