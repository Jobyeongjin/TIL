# [Python] 함수 정의하기

### **# 함수란 ?**

- 특정한 기능을 하는 조각 모음

<br />

### **# 선언과 호출**

- 키워드는 `def`
- 들여쓰기를 통해 내용을 작성
- `매개 변수를 넘김`
  - `Parameter` : 함수 내부에 사용되는 식별자
  - `Argument` : 함수 호출시 parameter를 통해 전달되는 값
- `리턴` 을 통해 결과값 전달

```python
# 1. def : 정의
# 2. add : 함수 이름
# 3. a, b : 인풋
def add(a, b)
  return a + b  # 4. 리턴 : 값을 반환

print(add(5, 10))  # 5. 호출
```

<br />

### **# 함수의 입력**

- `Position` Argument
  - 순서에 따라 전달
- `Keyword` Argument
  - 직접 변수의 이름으로 전달
- `Default` Argument Value
  - 기본값을 지정
- `정해지지 않은 개수` 의 Aegument
  - `튜플` 로 하고 싶다면 `*`
  - `딕셔너리` 로 하고 싶다면 `**`

```python
def add(x, y):
  return x + y

add(2, 3)  #  기본값인 포지션(순서)에 따라 입력
add(x = 2, y = 3)  #  키워드에 따라 입력, 위치는 더이상 의미가 없어짐

🔸 디폴트 아규먼트 밸류

def add(x, y = 0):  #  y 값에 기본값 지정
  return x + y

🔸 정해지지 않은 개수

def add(*args):  #  튜플
def add(**args):  #  딕셔너리
```

<br />

### **# 함수의 범위**

- **독립적인 공간** 을 가지고 있음
- **객체 생명주기**
  - built-in scope : 영원히 유지
  - grobal scope : 모듈이 호출된 시점 혹은 인터프리터가 끝날 때까지 유지
  - local scope : 함수가 호출되고 함수가 종료될 때까지 유지
- **이름 검색 규칙**
  - `L` (함수) > `E` (함수의 상위 함수) > `G` (함수 밖 변수) > `B` (파이썬 내장 함수 또는 속성)

```python
🔸
def say_hello():  #  def 를 사용하여 say_hello 라는 함수 정의
  print('안녕')  #  들여쓰기로 영역 표기
  print('반가워')

say_hello()  #  호출하면 해당 함수의 내용을 출력 🚨

🔸 default argument value

def say_hello(who):  #  인자를 지정하고
  print('안녕', who)

say_hello('철수')  #  인자 값을 넣으면 결과는 안녕 철수
```

<br />

### **# 리턴**

- 반드시 `하나의 값` 만 🚨
- 리턴과 동시에 함수는 종료

```python
🔸
def say_hello(name, age, are_from, fav_food):
    return f'hello {name} you are {age} you are from {are_from} you like {fav_food}'
    # 문자열 숫자 함수 등 복합적으로 사용할 때는 f'...' 사용
    #  🚨 리턴은 값을 함수 밖으로 보내주는데, 리턴한 값 이외에 아래 작성한 내용들은 밖으로 나갈 수가 없음

hello say_hello(name='철수', age='20', fav_food='불고기', are_from='한국')
#  키워드 인자는 순서와 관계없이 넣을 수 있기 때문에 변수가 많을 때 용이

print(hello)

🔸 튜플 반환

def foo():
  return 1, 2  #  두 개를 내보내도 결국은 하나의 값

result = foo()

print(result, type(result))  #  결과값 찍어보기 !
```

<br />

### 유용한 내장함수

| 함수                   | 설명                               |
| ---------------------- | ---------------------------------- |
| abs(x)                 | x 의 절대값 반환                   |
| max( [1, 2, 3, 4] )    | 최대값 반환                        |
| min( [1, 2, 3, 4] )    | 최소값 반환                        |
| sorted( [3, 4, 1, 2] ) | 매개변수 정렬                      |
| type(x)                | x 의 자료형 확인                   |
| round(x, [num] )       | x 를 num 번째 자리 수까지 반올림   |
| pow(x, y)              | x 의 y 제곱을 반환                 |
| map(함수, 함수)        | 모든 요소에 함수를 반복적으로 적용 |
| int()                  | 숫자형 변환                        |

<br />

### 유용한 외장함수

- 외장함수란 다른 사람이 미리 정의해 놓은 함수
- 라이브러리(또는 모듈) 란 남들이 미리 작성해 놓은 코드들의 집합
- `사용방법`
  - import 라이브러리이름
  - 지정해서 가져올 때는 : from 라이브러리이름 import 함수이름

| 함수     | 설명                               |
| -------- | ---------------------------------- |
| time     | 시간 관련                          |
| os       | 환경 변수나 디렉토리, 파일 등 제어 |
| datetime | 날짜와 시간을 저장                 |
| random   | 난수 발생                          |

<br />

#### 📚 참조

- 내장함수가 더 궁금하다면 [클릭](https://docs.python.org/3/library/functions.html)
  - 한국어가 최고라고 생각한다면 [클릭](https://docs.python.org/ko/3.6/library/functions.html#getattr)
- 외장함수가 더 궁금하다면 [클릭](https://wikidocs.net/33)
- 파이썬 패키지 모음 [클릭](https://pypi.org/)
