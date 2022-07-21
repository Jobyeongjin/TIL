# 파이썬 응용 심화

## **List Comprehension**

- 표현식과 제어문을 통해 특정한 값을 가진 `리스트를 간결` 하게 생성하는 방법

- 1~3의 세제곱의 결과가 담긴 리스트를 만드시오.

```python
n = []
for i in range(1, 4):
n.append(i**3)
print(n)

# 특정한 원소(요소)로 구성된 리스트를 만들 때 사용
[i**3 for i in range(1, 4)]
```

- 짝수 리스트

```python
even_list = [for i in range(10) if i % 2 == 0]
print(even_list)
```

<br />

## **Dictionary Comprehension**

- 표현식과 제어문을 통해 특정한 값을 가진 리스트를 간결하게 생성하는 방법
- 1~3의 세제곱의 결과가 담긴 리스트를 만드시오.

```python
n = {}
for i in range(1, 4):
  n[i] = i**3
print(n)

# 특정한 원소(요소)로 구성된 딕셔너리를 만들 때 사용
{i: i**3 for i in range(1, 4)}
```

---

<br />

## **lambda [parameter] : 표현식**

- `람다함수`
  - 표현식을 계산한 결과값을 반환하는 함수로, `이름이 없는 함수` 여서 익명함수라고도 불림
- 특징
  - Return문을 가질 수 없음
  - 간편 조건문 외 조건문이나 반복문을 가질 수 없음
- 장점
  - 함수를 정의해서 사용하는 것보다 간결하게 사용 가능
  - def를 사용할 수 없는 곳에서도 사용 가능

<br />

- `filter(함수, 반복가능한 것)`
  - 순회 가능한 데이터구조의 모든 요소에 함수를 적용하고, 그 `결과가 True` 인 것들을 filter object로 반환

```python
# map(함수, 반복가능한 것)
# 반복 가능한 것들의 모든 요소에 함수를 적용시킨 결과를 map object로 반환한다!

# 3으로 나눠지는 결과만 빼고싶다면 ?
n = [1, 2, 5, 10, 3, 9, 12]
result = []
for i in n:
  if i % 3 == 0:
    result.append(i)
print(result)

# 필터와 람다를 적용
# 필터는 참인 결과만 걸러낸다!
n = [1, 2, 5, 10, 3, 9, 12]
print(list(filter(lambda i: i%3==0, n)))
# 여기서 람다함수는 이렇게 생긴 함수를 임시로 만든 것과 같다!
def is_3(i):
  return i % 3 == 0

🔸

# 3을 곱한 결과를 얻고싶다면?
n = [1, 2, 5, 10, 3, 9, 12]
result = []
for i in n:
  if i % 3 == 0:
    result.append(i * 3)
print(result)

# map으로 표현한다면 ?
# 함수를 정의해야 한다!
n = [1, 2, 5, 10, 3, 9, 12]
def multiple_3(i):
  return i * 3
print(list(map(multiple_3, n)))

# 위에서 정의한 함수는 계속 사용되지 않고, map에서만 사용되기 때문에!
# 임시적인 함수를 만들고 싶다면 ?
n = [1, 2, 5, 10, 3, 9, 12]
print(list(map(lambda i: i*3, n)))
```

---

<br />

## 어노테이션

- 변수 어노테이션 문법

```python
# 변수 어노테이션
a: int = 3
print(a)

# 함수 어노테이션
def add(x: int, y: int) -> int:
  return x + y
print(add(7, 4))
# int라고 숫자만 되는 게 아니라 문자도 가능하다!
print(add('hi', 'hello'))

# 함수 어노테이션
def add2(x, y):
  return x + y
print(add2(7, 4))

# 동적 타입 언어인 파이썬을 정적 타입으로 바꿔주는 것이 아니라
# 메모라고 생각하기!
```
