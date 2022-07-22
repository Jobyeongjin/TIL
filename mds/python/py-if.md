# [Python] 제어문

## **`if` 조건문** 💭

- `참` 인가 `거짓` 인가
- 위에서부터 순차적으로 진행

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

#### **조건 표현식** 💡

```python
# 조건문 코드
num = -10

if num >= 0:
  value = num
else:
  value = -num

print(num, value)

# 조건 표현식 코드 💡
value = num if num >= 0 else -num
```

<br />

## **`for` 반복문** 💭

- 처음부터 끝까지 모두 순회
- `순회할 때(문자열, 리스트 등) + 횟수를 알 때(range)` 사용

```python
x = [1, 2, 3, 4]

for number in x:  #  넘버라는 변수에 x(리스트)를 하나씩 순차적으로 반복
  print(number)
# 결과는 순차적으로 1 2 3 4

🔸

chars = input()

for idx in range(len(chars)):
  print(chars[idx])

🔸 딕셔너리 순회 💡

grades = {
  'john': 80,
  'eric': 90
}

for name in grades:
  print(name)  #  존과 에릭이 출력
for name in grades:
  print(name, grades[name])  #  키와 밸류까지 출력

🔸

for i in range(3)  #  0 부터 시작해 1 씩 증가하면서 3 번에서 멈춤, 결과는 0 1 2
for i in range(3, 5)  #  3 번부터 시작해 5 번에서 멈춤, 결과는 2 3 4
for i in range(3, 9, 2)  #  3 번부터 시작해 9 번에서 멈추는데 2씩 증가, 결과는 2 4 6
```

<br />

## **`while` 반복문** 💭

- If 문과 비슷하나, `조건이 참` 이면 `무한 루프`
  - **종료 조건**이 반드시 필요 🚨
- 조건에 도달할 때까지 반복
  - `while True + break` 을 추천

```python
i = 0
while i <= 100:  #  i 가 100 보다 작거나 같다면 계속 재생
  print(i)  #  값을 출력하고
  i += 1  #  나온 i 값에 1 추가

print('종료')  #  와일문이 종료되면 출력
```

<br />

### **제어문에서 쓰는 명령어** 💭

- **pass** 통과하다
- **break** 멈추다
- **continue** 계속하다

```python
if 1 > 0:
  pass  #  아무 일 없이 if 는 통과
else:
  print('2')

🔸

while 1 > 0:
  print(1)
  break  #  while 무한 루프지만 1 번만 실행하고 멈춤

🔸

i = 0
for i in range(5):
  print(i)
  print('안녕?')
  if i == 3:
    continue  #  i 가 3 이 될 경우 다음으로 넘어감
  print('만나서 반가워')  #  3 이 되면 출력되지 않음
```

<br />

## 📚 참고

- 온라인에서 간단하게 코드를 실행하고 싶다면 [클릭](https://replit.com/)
- 코드 실행 순서가 궁금하다면 [클릭](https://pythontutor.com/visualize.html#mode=edit)

<br />

#### 연습하기

```python
🔸

def age_check(age):
  print(f'너의 나이는 {age}')  #  너의 나이는 19, 참이면 해당 값 실행
  if age < 18:  #  만일 18보다 작다면?
    print('넌 마실 수가 없어')
  elif age 18 == or age == 19:  #  18이거나 19라면?
    print('이제 시작할 나이야')  #  실행 🔔
  elif age > 20 and age < 25:  #  20보다 크거나 25보다 작으면?
    print('넌 좀 아직 어린데')
  else:  #  그외에는?
    print('맘껏 즐기세요')

age_check(19)  #  호출 🔔

🔸

days = ('Mon', 'Tue', 'Wed', 'Tur', 'Fri')  #  days 라는 변수 생성

for day in days:  #  days 를 순차적으로 반복
  if day is 'Wed':  #  반복하다가 만일 'Wed'가 나오면
    break  #  멈추고
  else:  #  그게 아니라면
    print(day)  #  전부 출력

🔸

marks = [90, 25, 67, 45, 80]
number = 0

for mark in marks:
  number = number + 1  #  0부터 시작해 1씩 증가
  if mark >= 60:  #  60보다 크거나 같다면 합격, 그게 아니라면 불합격
    print('%d번 학생은 합격입니다.' % number)  #  1번 학생은 90이니 합격이고, 그렇게 5번까지 반복
  else:
    print('%d번 학생은 불합격입니다.' % number)

🔸 구구단

a = 10

for x in range(2, a):  #  안에 있는 for문이 종료되어야 실행
  for y in range(1, 10):
    print(x * y, end= ' ')  #  곱한 값이 출력되고, end는 한 줄에 보이게 설정
  print(' ')

🔸 나무 찍기

treeHit = 0

while treeHit < 10:
  treeHit = treeHit + 1  #  0부터 1씩 증가
  print('나무를 %d번 찍었습니다.' % treeHit)
  if treeHit == 10:  #  만일 10이라면
    print('나무가 넘어갑니다.')

🔸 미세먼지 농도 등급 분류

dust = int(input())

if dust < 30:
  print('좋음')
elif dust < 80:
  print('보통')
elif dust < 150:
  print('나쁨')
else:
  if dust < 0:
    print('음수 값입니다')
  else:
    print('좋음')

🔸 조건 표현식
num = 2
if num % 2:
  (검색)

🔸 1부터 사용자가 입력한 양의 정수까지의 총합
n = 0
result = 0
user_input = int(input())

while n <= user_input:
  result += n
  n += 1

print(result)
```
