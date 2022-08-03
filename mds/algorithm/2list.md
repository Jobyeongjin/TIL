# [Algorithm] 이차원 리스트

## **이차원 리스트**

> 세상을 표현하는 방식, 거의다 표현할 수 있다!

<br />

### **`리스트를 원소로 가지는 리스트` 일 뿐이다**

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# 보기 좋게 변경하면 행렬의 형태를 보인다
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

print(matrix[0][0])
>>> 1
print(matrix[1][2])
>>> 6
print(matrix[2][0])
>>> 7
```

<br />

### **이차원 리스트는 `행렬(matrix)` 이다**

- 좌표

| 행렬  | 0             | 1             | 2             |
| ----- | ------------- | ------------- | ------------- |
| **0** | 1<br />(0, 0) | 2<br />(0, 1) | 3<br />(0, 2) |
| **1** | 4<br />(1, 0) | 5<br />(1, 1) | 6<br />(1, 2) |
| **2** | 7<br />(2, 0) | 8<br />(2, 1) | 9<br />(2, 2) |

<br />

### **이차원 리스트 만들기**

```python
from pprint import pprint

matrix1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

# 반복문으로 작성 (100 * 100 행렬)
matrix = []

for _ in range(100):
  matrix.append([0] * 100)


# 반복문으로 작성 (n * m 행렬)
n = 4 # 행
m = 3 # 열
matrix = []

for _ in range(n): # 행, 세로
  matrix.append([0] * m) # 열, 가로

pprint(matrix)
>>>
[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
```

<br />

```python
# n * m, 이차원 리스트
n = 4
m = 3

# 반복문으로 표현 💡
for _ in range(n):
  matrix.append([0] * m)

# 리스트 컴프리헨션으로 표현하면 💡
matrix1 = [[0] * m for _ in range(n)]

print(matrix1)
>>> [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]

# 또다른 방식, 출력은 같으나 주소값이 다르다 🚨
# 이것은 복붙!!! 🚨
matrix2 = [[0] * m] * n

print(matrix2)
>>> [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]


# 확인해보면 💭
n = 4
m = 3

matrix1 = [[0] * m for _ in range(n)]
matrix2 = [[0] * m] * n

matrix1[0][0] = 1
matrix2[0][0] = 1

print(matrix1)
>>> [[1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
print(matrix2)
>>> [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0]]
```

<br />

### **입력받기**

- 행렬의 크기가 미리 주어지는 경우

```python
matrix = []
for _ in range(3):
    line = list(map(int, input().split()))
    matrix.append(line)

print(matrix)
>>> [[], [], []]

# 리스트 컴프리헨션
matrix = [list(map(int, input().split())) for _ in range(3)]

print(matrix)
>>> [[], [], []]
```
