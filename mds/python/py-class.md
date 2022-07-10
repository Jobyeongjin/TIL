# [Python] 클래스와 객체란 무엇일까 ?

### **배우기 전에 알아두기 💡**

- `객체 지향` 프로그래밍
  - 객체들이 서로 소통하며 원하는 결과를 얻고, 각 객체들은 데이터와 데이터를 처리하는 메소드로 구성
  - 파이썬은 전형적인 객체 지향 프로그래밍
- `절차 지향` 프로그래밍
  - 순차적으로 진행되며, 데이터 구조와 그 데이터를 변화시키는 알고리즘으로 구성

<br />

### **클래스**

- 똑같은 무언가를 계속해서 만들어 낼 때 사용, `붕어빵 틀` 에 비유
- 객체 또는 인스턴스를 정의
- 변수와 메소드 (객체 내에 정의된 함수) 의 집합체

<br />

### **클래스 생성자 `__init__`**

- 인스턴스를 만들 때 호출되는 특별한 메소드
  - 첫 번째 매개변수는 반드시 현재 클래스의 객체가 되어야 하고, 관습적으로 `self` 라는 단어로 표시
  - 주로 변수의 초기화 코드로 작성

```python
class human:  #  클래스 이름 정의
  def __init__(self, height, age):  #  처음 호출하는 메소드
    self.height = height  #  클래스의 변수
    self.age = age

  def how_old(self):
    print(self.age."살 입니다.")

  def how_tall(self):
    print(self.height."cm 입니다.")
```

<br />

### **클래스 소멸자 `__del__`**

- 객체가 소멸될 때 호출되는 특별한 메소드
- `del 객체이름` 을 입력

```python
class human:
  def __init(self):
    self.height = 3
    self.age = 3

  def __del__(self):
    print('삭제되었습니다.')

sh = human()
del sh  #  메세지가 출력되면서 sh 객체를 삭제
```

<br />

### **정적 메소드와 클래스 메소드**

- 정적 메소드 `@staticmethod`: 인스턴스를 생성하지 않고 바로 호출

- 클래스 메소드 `@classmethod`: 정적 메소드와 유사하지만 첫 번째 변수로 클래스 객체가 전달되는 것이 다름

```python
class student:
	count = 0

  @classmethod
  def cmethod(cls):
    print('클래스 메소드')
    print(cls.count)  #  클래스의 메소드에 접근 가능

  @staticmethod
  def smethod():
    print('정적 메소드')

student.cmethod()
student.smethod()
```

<br />

### **클래스 상속**

- 다른 클래스로부터 데이터 속성과 메소드를 물려받는 일
  - 기존 클래스를 남겨둔 상태에 기능이 추가된 새로운 클래스를 만들고 싶을 때 사용
  - `super()`: 부모에게 정의된 함수를 불러오기

```python
class person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def say_hello(self, name, age):
    print(f'제 이름은 {self.name} 이고, 나이는 {self.age}살 입니다.')

class police(person):  #  person 이라는 클래스 상속
	def arrest(self, to_arrest):
    print('넌 체포됐다 ', to_arrest)

hanna = person('한나', 23)
jenny = police('제니', 28)

hanna.say_hello()
jenny.say_hello()  #  제니는 경찰이면서 사람이기 때문에 사람의 메소드도 사용 가능
jenny.arrest('한나')
```

<br />

### **메소드 오버라이딩**

- 부모로부터 물려받은 메소드를 수정하고 싶을 때
  - 같은 메소드 이름을 사용

```python
class A:
  def method(self, 변수):
    결과

class B(A):  #  상속
  def method(self, 변수):  #  같은 메소드 이름을 정의
    다른 결과 작성  #  새롭게 정의하고 싶은 기능을 입력
```

<br />

### **다중 상속**

- 여러 개의 클래스 상속
  - 메소드 이름이 겹치면 먼저 입력한 클래스를 상속

```python
class A:
  def 함수(self):
    결과

class B:
  def 함수(self):
    결과

class C(A, B):  #  다중 상속은 콤마(,) 를 사용
    pass
```

<br />

#### 📚 참고

- 클래스의 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/tutorial/classes.html)
