# [Python] 제어문

## if 조건문 💭

```python
x = -1
if x > 0:  #  만일 x 가 0 보다 크다면
  print('양수입니다')  #  값 출력
elif x < 0:  #  x 가 0 보다 작다면 ✅ else 와 if 를 합친 단어로 둘 사이에 계속 쓸 수 있는 elif
  print('음수입니다')
else:
  print('0입니다')
# 결과는 음수입니다
```

<br />

## for 반복문 💭

```python
x = [1, 2, 3, 4]

for number in x:  #  x 라는 변수를 하나씩 순차적으로 반복
  print(number)
# 결과는 순차적으로 1 2 3 4

for i in range(3)  #  0 부터 시작해 1 씩 증가하면서 3 번에서 멈춤, 결과는 0 1 2
for i in range(3, 5)  #  3 번부터 시작해 5 번에서 멈춤, 결과는 2 3 4
for i in range(3, 9, 2)  #  3 번부터 시작해 9 번에서 멈추는데 2씩 증가, 결과는 2 4 6
```

<br />

## while 반복문 💭

- If 문과 비슷하나, 조건이 참이면 무한 루프

```python
i = 0
while i <= 100:  #  i 가 100 보다 작거나 같다면 계속 재생
  print(i)  #  결과 출력하고
  i += 1  #  나온 i 값에 1 추가
```

<br />

## 제어문에서 쓰는 명령어 💭

- pass 통과하다
- break 멈추다
- continue 계속하다

```python
if 1 > 0:
  pass  #  아무 일 없이 if 는 통과
else:
  print('2')

while 1 > 0:
  print(1)
  break  #  while 무한 루프지만 1 번만 실행하고 멈춤

i = 0
for i in range(5):
  print(i)
  print('안녕?')
  if i == 3:
    continue  #  i 가 3 이 될 경우 다음으로 넘어감
  print('만나서 반가워')  #  3 이 되면 출력되지 않음
```
