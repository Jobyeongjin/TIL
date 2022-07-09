# [Python] 시퀀스 타입

## **문자형**

#### > 인덱싱과 슬라이싱

```python
a = 'hello world'

a[0:4]  #  0 부터 4 번까지 출력, 결과는 hello
a[5:]  #  5 번부터 출력, 결과는 world
a[0:-2]  #  0 부터 끝에서 2 번까지 출력, 결과는 hellowor
```

#### > 주요 함수

```python
len('hello world')  #  글자 수 세기, 결과는 11
'life is short'.startswith('life')  #  life로 시작하는지 확인, 결과는 true
'life is short'.endswith('is')  #  결과는 False
'life is short'.find('is')  #  어디에 있는지 찾기, 결과는 5
'life is short'.count('i')  #  몇 번 나오는지 확인, 결과는 2
'    a    '.strip()  #  양 옆 공백 제거
```

#### > 포매팅

```python
'현재 시간은 {}시 입니다'.format(7)  #  {} 안에 7 이라는 값으로 출력
'현재 시간은 {}시 {}분 입니다'.format(7, 10)  #  순차적으로 입력, 결과는 7시 10분
'지금은 {time}시 {minute}분 입니다'.format(time = 7, minute = 30)  #  순서와 관계없이 지정 값으로 출력
```

<br />

## **순서형**

#### > **리스트**

```python
days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']  #  열거형 리스트

print('mon' in days)  #  결과는 Ture
print(days[2])  #  결과는 Web, 인덱스에서는 0 부터 시작
print(days.index('Tue'))  #  결과는 1, Tue 가 몇 번째 자식인지 확인

a = [1, 2, 3, [4, 5, 6]]  #  다중 리스트

a[3]  #  결과는 4, 5, 6  🚨 컴퓨터의 숫자 세기는 0 부터 시작
a[3][2]  #  결과는 6
a[2] = 10  #  두 번째 자식 3 을 10 으로 수정
```

#### > **튜플**

```python
days = ('Mon', 'Tue', 'Wed', 'Thu', 'Fri')  #  튜플은 리스트와 동일하지만 수정이 불가
```

#### > **딕셔너리**

```python
people = {  #  딕셔너리는 '키':밸류로 구성
  'name': '철수',
  'age': 29,  # 🚨 끝에는 반드시 쉼표로 마침
  'korean': True,
  'fav_food': ['불고기','김치찌개']
}

print(people['name'])  #  결과는 철수
people['handsome'] = Ture  #  다음 출력에서는 키와 밸류 추가
print(people)  #  여기서 추가된 핸섬을 결과로 확인
```

#### > **관련함수**

```python
리스트.append()  #  요소 추가
리스트.sort()  #  정렬
리스트.reverse()  #  순서 뒤집기
리스트.index()  #  위치 확인
del 리스트(위치)  #  삭제
```

<br />

#### 📚 참조

- 파이썬 도서관 자료가 궁금하다면 [클릭](https://docs.python.org/3/library/)
