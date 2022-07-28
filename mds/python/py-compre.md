# [Python] 리스트 컴프리헨션

<br />

## **리스트 컴프리헨션이란 ?**

> 직관적으로 리스트를 생성하는 방법

- 대괄호를 감싸고 내부에 반복문과 조건문을 사용하여 조건에 만족하는 것만 리스트로 생성
- **사용하는 이유?**
  - 코드가 직관적이다
  - 여러줄을 한줄로 만든다
  - 실행속도가 빠르다

<br />

### **기본형**

- `[표현식 for 변수 in 반복가능한 객체]`

```python
result = []
for i in range(3):
  result.append(i)
>>> [0, 1, 2]


# 리스트 컴프리헨션
[i for i in range(3)]
>>> [0, 1, 2]


# 새 리스트 생성하기
num = [1, 2, 3, 4, 5]
comp = [2*i for i in n]

print(comp)
>>> [2, 4, 6, 8, 10]
```

<br />

### **필터링**

```python
num = [1, -3, 2, 5, -10]
comp = [i for i in num if i > 0]

print(comp)
>>> [1, 2, 5]
```

<br />

### **수식이나 함수 적용하기**

```python
# 수식 적용
[i*10 for i in range(3)]
>>> [0, 10, 20]


# 함수 적용
def func(x):
  x = str(x) + 'abc'
  return x

[func(i) for i in range(3)]
>>> ['0abc', '1abc', '2abc']
```

<br />

### **조건문 사용하기**

- `[표현식 for 변수 in 반복가능한 객체 if문]`
- if문 `여러 개 사용` 가능
- `왼쪽에 사용할 경우에는 반드시 else` 와 같이 사용

```python
[i for i in range(3) if i%2 == 0]
>>> [0, 2]
```

<br />

### **반복문과 조건문을 여러 번 사용하기**

```python
# 2중 for문
n = []
for i in range(2):
  for j in range(3):
    n.append((i, j))


# 리스트 컴프리헨션
[(i, j) for i in range(2) for j in range(3)]
>>> [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2)]
```
