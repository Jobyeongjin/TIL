# [Algorithm] 스택과 큐

## **스택 (Stack)**

> 스택(Stack)은 쌓는다는 의미로써, 마치 접시를 쌓고 빼듯이 데이터를 한쪽에서만 넣고 빼는 자료구조
>
> **가장 마지막에 들어온 데이터가 가장 먼저 나가므로 LIFO(Last-in First-out, 후입선출) 방식**

<br />

### **스택 자료구조의 대표 동작**

- 스택에 `새로운 데이터를 삽입 `하는 행위 ==> **push**
- 스택의 가장 `마지막 데이터를 가져오는` 행위 ==> **pop**
- `파이썬은 리스트(List)` 로 스택을 간편하게 사용할 수 있다
  - 넣을 때 ==> append
  - 뺄 때 ==> pop

<br />

### **왜 (why) 스택을 써야할까 ?**

1. `뒤집기`, `되돌리기`, `되돌아가기`
   - 데이터를 뒤집어야 할 때
2. 마무리 되지 않은 일을 `임시 저장`

<br />

### **스택 활용 예시**

- **괄호 매칭**
  - 열렸는데 닫히지 않은 것들을 찾음

```python
map(int, input().split()) # 정상
map(int, input().split())) # 괄호가 잘못 들어갔다고 알림
```

- **함수 호출 (재귀 호출)**

```python
print(sum(max(min(2, 5), 10), min(2, 5))) # 출력하려고 하니 함수가 끝나지 않음
>>> print(sum(max(2, 10), min(2, 5)))
>>> print(sum(10, min(2, 5)))
>>> print(sum(10, 2))
>>> 12
```

- **백트래킹**
- **DFS(깊이 우선 탐색)**

<br />

### **스택 활용 문제 풀이**

- 백준 - 제로

```python
# 문제 풀이의 핵심
# 문제 이해 >> 요점 파악 >> 쓸데없는 내용 지우기

K = int(input())

input_list = []
for _ in range(K):
  input_list.append(int(input()))

stack = []
for elem in input_list:
	if elem != 0:
    stack.append(elem)
  else:
    stack.pop()

print(sum(stack))


# 숏코딩하면 ?
stack = []
for _ in range(int(input())):
  number = int(input())

  if number == 0:
    stack.pop()
  else:
    stack.append(number)

print(sum(stack))
```

---

<br />

## **큐 (Queue)**

> 한 쪽 끝에서 데이터를 넣고, 다른 한 쪽에서만 데이터를 뺄 수 있는 자료구조
>
> **가장 먼저 들어온 데이터가 가장 먼저 나가므로 FIFO(First-in First-out, 선입선출) 방식**

<br />

### **큐 자료구조의 대표 동작**

- 맨 뒤에 데이터를 삽입하는 행위 ==> **enqueue**
- 맨 앞 데이터를 가져오는 행위 ==> **dequeue**
- `파이썬은 리스트(List)` 로 큐를 간편하게 사용할 수 있다
  - 넣을 때 ==> append
  - 뺄 때 ==> pop(0)

<br />

### **큐의 단점**

> 데이터를 뺄 때 큐 안에 있는 데이터가 많은 경우 비효율적이다

- 맨 앞 데이터가 빠지면서, 리스트의 인덱스가 하나씩 당겨지기 때문
- **큐보다는 덱을 활용하는 게 낫다**

<br />

### **큐 활용 예시**

```python
n = int(input())
queue = list(range(1, n + 1))

while len(queue) > 1:
  print(queue.pop(0), end=' ')
  queue.append(queue.pop(0))

print(queue[0])
```

---

<br />

## **덱(Deque, Double-Ended ) 자료구조**

- `양 방향` 으로 삽입과 삭제가 자유로운 큐
- **삽입, 추출이 모두 큐보다 훨씬 빠르다**

<br />

### **덱 활용 예시**

```python
# 큐 활용 예시와 동일한 코드
from collections import deque

n = int(input())
queue = deque(range(1, n + 1))

while len(queue) > 1:
  print(queue.popleft(), end=' ')
  queue.append(queue.popleft())

print(queue[0])


# 덱 활용 예시
numbers = [1, 2, 3, 4, 5]

queue = deque(numbers)

queue.append(6)

queue.popleft()

print(queue)
>>> deque([2, 3, 4, 5, 6])

# 리스트 형태로 출력
print(list(queue))
>>> [2, 3, 4, 5, 6]

# 하나씩 출력
for num in queue:
  print(num, end=' ')
>>> 2 3 4 5 6
```
