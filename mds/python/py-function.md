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

#### 📚 참조

- 함수가 더 궁금하다면 [클릭](https://docs.python.org/3/library/functions.html)
