# 객체지향 프로그래밍

> Object Oriented Programing, 문제를 여러 개의 객체 단위로 나눠 작업하는 방식

- 컴퓨터 프로그래밍의 패러다임 중 하나
- 명령어의 목록으로 보는 시각에서 벗어나 `여러 개의 독립된 단위`, 즉 객체들의 모임으로 파악하고자 하는 것
- `객체 또는 오브젝트` 는 클래스에서 정의한 것을 토대로 `메모리 (실제 저장공간)에 할당` 된 것을 의미
  > - 객체는 메세지를 주고받고, 데이터를 처리
  > - 객체(object)는 `특정 타입(class)의 인스턴스(instance)`
  >   - 리스트 안에는 값들이 존재하고, 문자열이지만 각자 실제 값들이 존재
  >     - `타입과 값 (class and instance)` 으로 구성
  >     - 1, 2, 3 은 int 의 인스턴스
  >     - '123' 는 str 의 인스턴스
  >     - [1, 2, 3] 은 list 의 인스턴스
- `파이썬은 모든 것이 객체` 로 구성

<br />

### **객체의 특징**

- **타입(type)** : `어떤 연산자 (operator)` 와 `조작 (method)` 이 가능한가?
- **속성(attribute)** : `어떤 상태 (데이터)` 를 가지는가?
- **조작법(method)** : `어떤 행위 (함수)` 를 할 수 있는가?

<br />

---

## **절차지향 프로그래밍**

- `데이터` 와 `함수` 로 인한 결과
- 개체를 `순차적으로 처리`하여 `프로그램 전체가 유기적으로 연결` 되어 있음
  - 컴퓨터의 처리구조와 유사하기 때문에 `실행 속도가 빠름`
  - 대표적인 언어로는 `c언어`

```python
a = 10
b = 30
square1_area = a * b
square1_circumference = 2 * (a + b)

c = 300
d = 20
square2_area = a * b
square2_circumference = 2 * (a + b)
```

<br />

---

## **객체지향 프로그래밍**

- 클래스를 이용해 연관있는 `처리부분 (함수)` 과 `데이터 부분 (변수)` 를 하나로 묶어 `객체 (인스턴스)를 생성` 해 사용
- 프로젝트를 `독립적인 객체 단위로 분리해서 작업` 할 수 있기 때문에 프로그램을 보다 `유연하고 변경이 용이` 하며 직관적인 코드 분석으로 `유지보수 또한 뛰어남`

```python
# 사각형 - 클래스
class Rectangle:
  	def __init__(self, x, y):
      	self.x = x
        self.y = y

    # 각 사각형 - 인스턴스
    def area(self):
      	# 사각형의 행동/기능 - 메소드 (넓이 구하기, 높이 구하기)
      	return self.x * self.y

    def circumference(self):
      	return 2 * (self.x + self.y)

# 사각형의 정보 - 속성 (가로 길이, 세로 길이)
r1 = Rectangle(10, 30)
# 메소드 호출
r1.area()
r1.circumference()

r2 = Rectangle(300, 20)
r2.area()
r2.circumference()
```

<br />

### **속성**

- 특정 데이터 타업/클래스의 `객체들이 가지게 될 상태/데이터` 를 의미

<br />

### **메소드**

- 특정 데이터 타입/클래스의 `객체에 공통적으로 적용 가능한 행위 (함수)`

<br />

### **객체 비교하기**

- ==
  - `동등한(equal)`
  - 변수가 참조하는 객체가 동등한 경우 True
  - 두 객체가 같아 보이지만 실제로 동일한 대상을 가리키고 있다고 확인해 준 것은 아님
- is
  - `동일한(identical)`
  - 두 변수가 동일한 객체를 가리키는 경우 True

#### **예시**

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b, a is b)
# True False

a = [1, 2, 3]
b = a

print(a == b, a is b)
# True True
```

<br />

#### **예시**

```python
a = [1, 2, 3]
b = a
b[0] = 'hi'

print(a)
print(b)
# 결과는 같다
# 변수는 메모리 주소값에 저장되어 있기 때문에 같은 방향을 바라보고 있음

# 다른 결과를 원한다면 리스트 형변환
# 값은 같지만 다른 메모리 주소를 가짐
c = [3, 4, 5]
d = list(c)
d[0] = 'hi'

# 또는 슬라이싱
e = [4, 5, 6]
f = e[::]
f[0] = 'hi'

# 깊은 복사
# 결과는 같다
a = [[1, 2], 3, 4]
b = list(a)
b[0][0] = 'hi'

print(a)
print(b)

# b 값만 바꾸고 싶다면
import copy
a = [[1, 2], 3, 4]
b = copy.deepcopy(a)
b[0][0] = 'hi'
```

<br />

---

## **추상화**

> 현실 세계를 프로그램 설계에 반영 (추상화)

```python
class Person:
  	def __init__(self, name, age, gender):
      	self.name = name
        self.age = age
        self.gender = gender

    def info(self):
      	return (self.name, self.age, self.gender)

hong = Person('홍길동', 100, 'M')
ko = Person('고길동', 40, 'M')

print(hong.info())
print(hong.name)
print(hong.age)
```

## **인스턴스 메소드**

> - 인스턴스 변수를 사용하거나, 인스턴스 변수에 값을 설정하는 메소드
> - 클래스 내부에 정의되는 메소드의 기본
> - 호출 시, 첫번째 인자로 인스턴스 자기자신 (self)이 전달됨

<br />

- `self`
  - 인스턴스 자기자신
  - 호출 시 첫번째 인자로 `인스턴스 자신이 전달되게 설계`
  - 매개변수 이름으로 self를 `첫번째 인자` 로 정의
  - 파이썬에서 `암묵적인 규칙`

<br />

- `생성자(Constructor) 메소드`
  - 인스턴스 객체가 생성될 때 자동으로 호출되는 메소드
  - 인스턴스 변수들의 초기값을 설정
    - 인스턴스 생성
    - `__init__` 메소드 자동 호출

```python
class Person:
  	# 생성자! 인스턴스가 생성될 때 어떠한 작업!
  	def __init__(self, name):
      	# 인스턴스의 이름을 name으로 설정
        self.name = name

# Person 클래스의 인스턴스인 iu, jimin 설정
iu = Person('아이유')
jimin = Person('지민')

print(iu.name)
print(jimin.name)
```

<br />

- `소멸자(Destructor) 메소드`
  - 인스턴스 객체가 소멸되기 직전에 호출되는 메소드
  - `__del__`

```python
class Person:
    def __del__(self):
        print('인스턴스가 사라졌습니다')
```
