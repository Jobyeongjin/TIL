# [Python] 시퀀스 타입

## **문자형**

- 타입은 str (string)
- 따옴표 ' ' 또는 " " 사용

<br />

#### > **인덱싱과 슬라이싱**

```python
a = 'hello world'

a[0:4]  #  0부터 4번까지
a[:5]  #  시작부터 5번까지
a[5:]  #  5번부터 끝까지
a[0:-2]  #  0부터 끝에서 2번까지
a[2:10:2]  #  2부터 10까지 2칸씩
a[::]  #  처음부터 끝까지
a[::-1]  #  끝에서 처음으로
```

<br />

#### > **주요 함수**

```python
len('hello world')  #  글자 수 세기
'life is short'.startswith('life')  #  life로 시작하는지 확인, 결과는 true
'life is short'.endswith('is')  #  is 로 끝나는지
'life is short'.find('is')  #  is 가 어디에 있는지
'life is short'.count('i')  #  i 는 몇 번 나오는지
'    a    '.strip()  #  양 옆 공백 제거
```

<br />

#### > **포매팅**

```python
'현재 시간은 {}시 입니다'.format(7)  #  {} 안에 7 이라는 값으로 출력
'현재 시간은 {}시 {}분 입니다'.format(7, 10)  #  순차적으로 입력, 결과는 7시 10분
'지금은 {time}시 {minute}분 입니다'.format(time = 7, minute = 30)  #  순서와 관계없이 지정 값으로 출력
```

<br />

#### > **이스케이프 시퀀스**

| 문자 | 설명                         |
| ---- | ---------------------------- |
| `\\` | 백슬래시                     |
| `\'` | 작은따옴표                   |
| `\"` | 쌍따옴표                     |
| /a   | 경보 문자                    |
| `/b` | 한 글자 삭제                 |
| /f   | 폼 피드                      |
| `/n` | 줄바꿈                       |
| `/r` | 캐리지 커서를 맨 앞으로 이동 |
| /v   | 수직 탭                      |
| `/t` | 수평 탭                      |

<br />

## **순서형**

- 또는 컨테이너

<br />

#### > **리스트**

```python
days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']  #  열거형 리스트

print('mon' in days)  #  결과는 Ture
print(days[2])  #  접근을 인덱스(순서)로, 인덱스에서는 0 부터 시작
print(days.index('Tue'))  #  결과는 1, Tue 가 몇 번째 자식인지 확인

🔸

a = [1, 2, 3, [4, 5, 6]]  #  다중 리스트

a[3]  #  결과는 4, 5, 6  🚨 컴퓨터의 숫자 세기는 0 부터 시작
a[3][2]  #  결과는 6
a[2] = 10  #  두 번째 자식 3 을 10 으로 수정
```

<br />

#### > **튜플**

```python
days = ('Mon', 'Tue', 'Wed', 'Thu', 'Fri')  #  튜플은 리스트와 동일하지만 수정이 불가
```

<br />

#### > **딕셔너리**

- `순서가 없는` 컬렉션

```python
people = {  #  딕셔너리는 '키':밸류로 구성
  'name': '철수',
  'age': 29,  # 🚨 끝에는 반드시 쉼표로 마침
  'korean': True,
  'fav_food': ['불고기','김치찌개']
}

print(people['name'])  #  접근을 '키' 로
people['handsome'] = Ture  #  다음 출력에서는 키와 밸류 추가
print(people)  #  여기서 추가된 핸섬을 결과로 확인
```

<br />

#### > **레인지**

- 숫자의 시퀀스를 나타내기 위해 사용

```python
numbers = range(5)

print(list(numbers))  #  [0, 1, 2, 3, 4, 5]

list(range(6, 1, -1))  #  6부터 1까지, -1씩
list(range(6, 1, 1))  #  6부터 1까지, 1씩 증가니까 결과는 비어있음

range(n)  #  ~n 까지
range(n, m)  #  n 이상 m 미만
range(n, m, s)  #  n 이상 m 미만 일정 간격으로
```

<br />

#### > **세트**

- `컬렉션` : 유일한 값들의 모음
- `순서가 없음`
- `중복된 값이 없음`
- 빈 중괄호는 쓰지 않기
  - 빈 중괄호는 딕셔너리에게 양보 🚨

```python
set_a = {1, 2, 3, 1, 1}
set_b = {'hi', 1, 2}

print(set_a)  #  {1, 2, 3}
print(set_b)  #  {1, 2, 'hi'}

🔸 활용 예시
# 지역의 갯수 구하기

locations = ['서울', '서울', '대구', '제주', '부산', '대구', '광주', '인천', '부산']
print(set(locations)) #  {'광주', '대구', '서울', '부산', '제주', '인천'}
print(len(set(locations)))  #  6
```

<br />

#### > **관련함수**

```python
리스트.append()  #  요소 추가
리스트.pop(위치)  #  요소 제거
리스트.sort()  #  정렬
리스트.reverse()  #  순서 뒤집기
리스트.index()  #  위치 확인
del 리스트(위치)  #  삭제
```

<br />

#### 📚 참조

- 파이썬 도서관 자료가 궁금하다면 [클릭](https://docs.python.org/3/library/)
