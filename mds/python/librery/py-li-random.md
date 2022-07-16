# [Python] 랜덤

### **`random`**

- 다양한 분포로 의사 난수를 생성
- 랜덤에 관련한 함수들을 모아놓은 모듈

<br />

### **함수**

| 함수                  | 설명                                   |
| --------------------- | -------------------------------------- |
| random()              | 0.0 ~ 1.0 사이의 실수 반환             |
| uniform(a, b)         | a ~ b 사이의 실수 반환                 |
| randint(a, b)         | a, b 사이의 랜덤한 정수 반환           |
| sample(seq or set, n) | 해당 타입에서 무작위로 n개의 인자 반환 |
| shuffle(seq)          | 데이터 순서를 무작위로 바꿈            |

```python
import random

# 0부터 1까지 랜덤한 실수
n = random.random()
print(n)

# 1부터 5까지 수 중 랜덤으로 2개 출력
n = random.sample([1, 2, 3, 4, 5], 2)
print(n)

# n의 리스트 순서를 무작위로
n = [1, 2, 3, 4, 5]
random.shuffle(n)
print(n)
```

```python
import random

# 로또 번호 자동으로 뽑기
n = int(input())

for i in range(n):
    # 1부터 45까지 반복, 6개의 숫자 뽑기
    numbers = random.sample(range(1, 46), 6)
    # 순차적으로 정력
    numbers.sort()
    print(numbers)
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/random.html)
