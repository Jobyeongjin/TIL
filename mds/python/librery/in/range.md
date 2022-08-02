# [Python] range 함수 사용하기

## **range 함수**

> 특정 구간의 숫자의 범위를 만들어주는 함수

<br />

### **range(A)**

- `0` 부터 `A-1` 까지의 정수 범위를 반환

```python
a = range(5)

print(list(a))
>>> [0, 1, 2, 3, 4] # 5개의 정수
```

### **range(A, B)**

- `A` 부터 `B-1` 까지의 정수 범위를 반환

```python
a = range(2, 5)

print(list(a))
>>> [2, 3, 4]
```

### **range(A, B, C)**

- `A` 부터 `C만큼의 간격` 으로 `B-1` 까지의 정수 범위를 반환

```python
a = range(1, 10, 2)

print(list(a))
>>> [1, 3, 5, 7, 9]
```

---

<br />

## **반대로 이동하고 싶다면 ?**

1. `range 함수` 에서 마이너스 숫자로 내려가기

```python
for i in range(5, 0-1, -1)
    print(i)

>>>
5
4
3
2
1
0
```

2. `reversed 함수` 사용하기

```python
for i in reversed(range(5))
    print(i)

>>>
4
3
2
1
0
```

---

#### 참조 📚

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/stdtypes.html#range)
- 활용 예시가 보고싶다면 [클릭](https://wikidocs.net/22)
- 블로거가 궁금하다면 [클릭](https://www.lainyzine.com/ko/article/python-range-function-usage/)
