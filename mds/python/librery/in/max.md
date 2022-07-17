# [Python] 최댓값, 최솟값 구하기

### **max() 와 min()**

- 시퀀스 시반의 자료형에서 각 부분의 `최댓값` 과 `최솟값` 을 표현하는 함수

```python
n = [1, 5, 3, 11, 16, 22]

print(max(n))
# 최댓값인 22 출력

print(min(n))
# 최솟값인 1 출력
```

<br />

### **조건문 반복문을 활용하면💡**

```python
# 최댓값 함수 만들기
n = list(map(int, input().split()))
min = n[0]

for i in n:
    if i > min:
        min = i

print(min)

# 최솟값 함수 만들기
n = list(map(int, input().split()))
min = n[0]

for i in n:
    if i < min:
        min = i

print(min)
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/functions.html#max)
