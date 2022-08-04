# [Algorithm] 이차원 리스트 순회

## **순회**

1. **인덱스를 통해 각각 출력**

```python
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2]
]

print(matrix[0][0], matrix[0][1], matrix[0][2], matrix[0][3])
print(matrix[1][0], matrix[1][1], matrix[1][2], matrix[1][3])
print(matrix[2][0], matrix[2][1], matrix[2][2], matrix[2][3])

>>> 1 2 3 4
>>> 5 6 7 8
>>> 9 0 1 2
```

2. **이중 for 문을 이용한 `행 우선` 순회**

```python
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2]
]

for i in range(3): # 행
	for j in range(4): # 열
    print(matrix[i][j], end=' ') # 좌표 (i, j)
  print()

>>> 1 2 3 4
>>> 5 6 7 8
>>> 9 0 1 2


# n * m
n = len(matrix)
m = len(matrix[0])

for i in range(n):
  for j in range(m):
    print(matrix[i][j], end=' ')
  print()

>>> 1 2 3 4
>>> 5 6 7 8
>>> 9 0 1 2


# matrix
for row in matrix:
  for elem in row:
    print(elem, end=' ')
  print()

>>> 1 2 3 4
>>> 5 6 7 8
>>> 9 0 1 2
```

3. **이중 for 문을 이용한 `열 우선` 순회**

```python
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2]
]

for i in range(4): # 열
	for j in range(3): # 행
    print(matrix[j][i], end=' ')
  print()

>>> 1 5 9
>>> 2 6 0
>>> 3 7 1
>>> 4 8 2
```

---

<br />

### **총합 구하기**

```python
matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]

total = sum(map(sum, matrix)) # map() => sum을 matrix 안 리스트에 각각 적용 💡

print(total)
>>> 12


# n * m
matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
	[1, 1, 1, 1]
]

n = len(matrix)
m = len(matrix[0])

total = 0
for i in range(n):
  for j in range(m):
    total += matrix[i][j]

print(total)
>>> 12


# matrix
matrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
	[1, 1, 1, 1]
]

total = 0
for row in matrix:
  	total += sum(row)

print(total)
>>> 12


#
def matrix_sum(matrix):
  return sum(map(sum, matrix))

matrix_sum(matrix)
```

<br />

### **최대값과 최소값 구하기**

```python
# 최대값
matrix = [
  [0, 5, 3, 1],
  [4, 6, 10, 8],
  [9, -1, 1, 5]
]

max_value = 0

for i in range(3):
  for j in range(4):
    if matrix[i][j] > max_value:
      max_value = matrix[i][j]

print(max_value)
>>> 10


# 최소값
matrix = [
  [0, 5, 3, 1],
  [4, 6, 10, 8],
  [9, -1, 1, 5]
]

min_value = 99999999

for i in range(3):
  for j in range(4):
    if matrix[i][j] < min_value:
      min_value = matrix[i][j]

print(min_value)
>>> -1


# Pythonic 💡
matrix = [
  [0, 5, 3, 1],
  [4, 6, 10, 8],
  [9, -1, 1, 5]
]

max_value = max(map(max, matrix))
min_value = min(map(min, matrix))

print(max_value)
>>> 10

print(min_value)
>>> -1
```

<br />

### **이차원 리스트 순회 연습**

```python
list_a = [list(map(int, input().split())) for i in range(2)]
list_b = [list(map(int, input().split())) for i in range(2)]
list_c = [[0] * 3 for _ in range(2)]

# 두 배열의 같은 위치끼리 곱하여 새로운 이차원 리스트에 저장
for i in range(2):
  for j in range(3):
    list_c[i][j] = list_a[i][j] * list_b[i][j]

# 결과 출력하기
for i in range(2):
  for j in range(3):
    print(list_c[i][j], end=' ')
  print()
```

---

<br />

## **전치**

> 행렬의 행과 열을 서로 맞바꾸는 것

```python
matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2]
]

transposed_matrix = [[0] * 3 for _ in range(4)] # 전치 행렬을 담을 이차원 리스트 초기화 (행과 열의 크기가 반대)

for i in range(4):
  for j in range(3):
    transposed_matrix[i][j] = matrix[j][i] # 행, 열 맞바꾸기
```

---

<br />

## **회전**

> 이차원 리스트를 왼쪽, 오른쪽으로 90도 회전

```python
# 왼쪽으로 90도 회전하기
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

n = 3
rotated_matrix = [[0] * n for _ in range(n)]

for i in range(n):
  for j in range(n):
    rotated_matrix[i][j] = matrix[j][n - i - 1]


# 오른쪽으로 90도 회전하기
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

n = 3
rotated_matrix = [[0] * n for _ in range(n)]

for i in range(n):
  for j in range(n):
    rotated_matrix[i][j] = matrix[n - j - 1][i]
```

---
