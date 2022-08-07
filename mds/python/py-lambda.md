# [Python] 익명함수 람다

## **lambda**

> 이름없이 인수와 수식을 통해 값을 반환하는 한 줄 함수, 익명 함수

- `lambda 인수 : 반환할 식` 또는 `lambda 매개변수 : 표현식 `

```python
k = lambda x, y : x * y
k(10, 5)

>>> 50

#
p = lambda x, y : (x + y, x - y, x * y)
p(6, 4)

>>> (10, 2, 24)

#
mul = lambda x, y, z : x * y * z
mul(5, 7, 9)

>>> 315

# 변수없이도 사용
(lambda x, y, z: x * y * z)(5, 7, 9)

>>> 315


#
m = ['파이썬', lambda x: x * x, 100]
m[0]
>>> '파이썬'

m[1]
>>> <function <lambda> at 0x0365BB70>

m[2]
>>> 100

m[1](5)
>>> 25
```

<br />

### **일반함수와 람다함수 비교**

```python
# 일반 함수
def even(i):
  return i % 2 == 0


# 람다 표현식
even = lambda i: i % 2 == 0
```

<br />

### **lambda + map**

```python
a = [1, 2, 3, 4]
b = [10, 20, 30, 40]

c = list(map(lambda x, y: x + y, a, b))

print(c)
>>> [11, 22, 33, 44]
```

<br />

### **lambda + filter**

```python
a = [1, 2, 5, 11, 18, 24, 12, 8, 7, 29]
b = list(filter(lambda x: x & 2 == 0, a))

print(b)
>>> [1, 5, 24, 12, 8, 29]
```
