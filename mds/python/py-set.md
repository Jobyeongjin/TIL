# [Python] 집합 자료형 set

## **set**

- 컬렉션 : `유일한 값` 들의 모음
- `순서가 없음`
  - 인덱싱으로 접근 불가
- `중복된 값이 없음`
- 빈 중괄호는 쓰지 않기
  - 빈 중괄호는 딕셔너리에게 양보 🚨

```python
set_a = {1, 2, 3, 1, 1}
set_b = {'hi', 1, 2}

print(set_a)  #  {1, 2, 3}
print(set_b)  #  {1, 2, 'hi'}


# 활용 예시 - 지역의 갯수 구하기

locations = ['서울', '서울', '대구', '제주', '부산', '대구', '광주', '인천', '부산']
print(set(locations)) #  {'광주', '대구', '서울', '부산', '제주', '인천'}
print(len(set(locations)))  #  6
```

<br />

## **집합 자료형**

- `교집합` : x, y 의 **중복 값**
- `합집합` : x, y 모두 **합하고 중복 값 제거**
- `차집합` : x 에서 y 를 **뺀 나머지** 혹은 y 에서 x 를 뺀 나머지

```python
x = set([1, 2, 3, 4, 5])
y = set([4, 5, 6, 7, 8])

# 교집합
print(x & y)
print(x.intersection(y))

# 합집합
print(x | y)
print(x.untion(y))

# 차집합
# 순서에 따라 결과 값이 다름
print(x - y)
print(x.difference(y))
```

<br />

> ### 관련 함수 모음

```python
s = {1, 2, 3}

# 한 개 요소 추가
s.add(4)

# 여러 요소 추가
s.update({'a', 'b', 'c'})
s.update([4, 5, 6])

# 특정 요소 제거
s.remove(1)

# 모든 요소 제거
s.clear()
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://wikidocs.net/1015)
