# [Python] 함수 정의하기

```python
🔸
def say_hello():  #  def 를 사용하여 say_hello 라는 함수 정의
  print('안녕')  #  들여쓰기로 영역 표기
  print('반가워')

say_hello()  #  호출하면 해당 함수의 내용을 출력

🔸
def say_hello(who):  #  인자를 지정하고
  print('안녕', who)

say_hello('철수')  #  인자 값을 넣으면 결과는 안녕 철수
```

```python
🔸
def say_hello(name, age, are_from, fav_food):
    return f'hello {name} you are {age} you are from {are_from} you like {fav_food}'
    # 문자열 숫자 함수 등 복합적으로 사용할 때는 f'...' 사용
    #  🚨 리턴은 값을 함수 밖으로 보내주는데, 리턴한 값 이외에 아래 작성한 내용들은 밖으로 나갈 수가 없음

hello say_hello(name='철수', age='20', fav_food='불고기', are_from='한국')
#  키워드 인자는 순서와 관계없이 넣을 수 있기 때문에 변수가 많을 때 용이

print(hello)
```

<br />

### 유용한 내장함수

| 함수                   | 설명                             |
| ---------------------- | -------------------------------- |
| abs(x)                 | x 의 절대값 반환                 |
| max( [1, 2, 3, 4] )    | 최대값 반환                      |
| min( [1, 2, 3, 4] )    | 최소값 반환                      |
| sorted( [3, 4, 1, 2] ) | 매개변수 정렬                    |
| type(x)                | x 의 자료형 확인                 |
| round(x, [num] )       | x 를 num 번째 자리 수까지 반올림 |
| pow(x, y)              | x 의 y 제곱을 반환               |
| 추후 업데이트 예정     |

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
