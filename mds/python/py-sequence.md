# [Python] 데이터 구조

## 데이터 구조란 ?

> 데이터를 효율적으로 나타내기 위한 특정 데이터 타입 !

<br />

## **문자형 💡**

- 타입은 str (string)
- 따옴표 ' ' 또는 " " 사용
- 문자열은 불변의 immutable 🚨

<br />

> #### **인덱싱과 슬라이싱**

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

> #### **주요 함수**

```python
len('hello world')  #  글자 수 세기
'life is short'.startswith('life')  #  life로 시작하는지 확인, 결과는 true
'life is short'.endswith('is')  #  is 로 끝나는지
'life is short'.find('is')  #  is 가 어디에 있는지
'life is short'.count('i')  #  i 는 몇 번 나오는지
'    a    '.strip()  #  양 옆 공백 제거
```

<br />

> #### **포매팅**

```python
'현재 시간은 {}시 입니다'.format(7)  #  {} 안에 7 이라는 값으로 출력
'현재 시간은 {}시 {}분 입니다'.format(7, 10)  #  순차적으로 입력, 결과는 7시 10분
'지금은 {time}시 {minute}분 입니다'.format(time = 7, minute = 30)  #  순서와 관계없이 지정 값으로 출력
```

<br />

> #### **이스케이프 시퀀스**

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

## **순서형 💡**

- 또는 컨테이너
- 리스트는 변경 가능한 mutable 🚨

<br />

> ### **list**

- 열거형 리스트로 순서가 있음
- 수정 가능
- 자세한 내용은 [클릭](./py-list.md)

<br />

> ### **tuple**

- 리스트와 동일하지만 값을 수정이 불가

```python
days = ('Mon', 'Tue', 'Wed', 'Thu', 'Fri')
```

<br />

> ### **dictionary**

- `키` 와 `밸류` 로 구성된 `순서가 없는` 컬렉션
- 자세한 내용은 [클릭](./py-dictionary.md)

<br />

> ### **set**

- `집합` 자료형
- 자세한 내용은 [클릭](./py-set.md)

<br />

> ### **range**

- 숫자의 시퀀스를 나타내기 위해 사용하는 함수

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

#### 📚 참조

- 파이썬 도서관 자료가 궁금하다면 [클릭](https://docs.python.org/3/library/)
