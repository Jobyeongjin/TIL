# [Python] 리스트란 ?

## **list**

- 열거형
  - 순서가 있음
- 수정 가능

```python
days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

#  결과는 Ture
print('mon' in days)

#  접근을 인덱스(순서)로, 인덱스에서는 0 부터 시작
print(days[2])

#  Tue가 몇 번째 자식인지
print(days.index('Tue'))


# 다중 리스트
a = [1, 2, 3, [4, 5, 6]]

a[3]  #  결과는 4, 5, 6  🚨 컴퓨터의 숫자 세기는 0 부터 시작
a[3][2]  #  결과는 6
a[2] = 10  #  두 번째 자식 3 을 10 으로 수정
```

<br />

> #### **관련함수**

```python
# 요소 추가
리스트.append()

# 요소 제거
리스트.remove()

# 요소 끄집어내기
리스트.pop(위치)

# 정렬
리스트.sort()

# 순서 뒤집기
리스트.reverse()

# 위치 확인
리스트.index()

# 리스트 확장
리스트.extend()

# 리스트 삭제
del 리스트(위치)
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/tutorial/datastructures.html)
