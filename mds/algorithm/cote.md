# [Algorithm] 코딩 테스트 준비

## **코딩 테스트 준비 (기본)**

> 기본 코딩 테스트는 주로 **문제의 내용을 코드로 구현 가능한지** 테스트

- 문제 풀이에 시간 제한이 없는 경우가 많기 때문에 **시간 복잡도를 생각하지 않고 풀어보는 것이 좋다.**
- 완전탐색 중에서도 **2차원 배열의 탐색, 델타 탐색 등 선형 탐색**이 주를 이룬다.
  - 삼성 SW 역량 테스트 IM 시험이 대표적인 예시

---

<br />

## **단순 구현 (Implementation)**

> 문제에 제시된 풀이 과정을 그대로 구현하는 유형

- 시뮬레이션의 경우 완전탐색 유형 중 하나로써, **모든 경우의 수를 탐색하여 풀이**한다.
- 아이디어나 알고리즘을 요구하기보다는, **문제에 제시된 과정을 그대로 구현할 수 있는가**가 핵심이다.
  - 삼성 SW 역량테스트 IM, A형에서 주로 출제

<br />

### **문제 풀이 📝**

- 완전한 풀이는 아닙니다. 본격적인 풀이를 앞둔 **개념 정리**라고 보시면 됩니다.

```python
# 백준 - 킹
# 델타탐색 + 아스키코드

# 8방향 델타값
directions = {
  'R': (0, 1),
  'L': (0, -1),
  'B': (1, 0),
  'T': (-1, 0),
  'RT': (-1, 1),
  'LT': (-1, -1),
  'RB': (1, 1),
  'LB': (1, -1)
}

K, S, N = input().split()

# 아스키코드 사용해 체스판 위치(A1, A2, ...)를 좌표로 변환
# 65 -> 'A', 이를 빼서 열의 좌표값을 구한다
# 8은 인덱스를 뒤집기 위함 (체스판에서 A1 -> (7, 0))
KX, KY = 8 - int(K[1], ord(K[0]) - 65
SX, SY = 8 - int(S[1], ord(S[0]) - 65

# 또는 딕셔너리 활용
alpha = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6,
  'H': 7
}

# K가 A1이라면 💭
K = 'A1'
KX = 8 - int(K[1]) # 아스키코드
KY = alpha[K[0]] # 딕셔너리
```