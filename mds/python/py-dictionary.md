# [Python] 딕셔너리란 ?

## **dictionary**

- `순서가 없는` 컬렉션으로 사전형 데이터를 의미
- `key` 와 `value` 로 구성
  - 키값은 변경할 수 없고, 밸류만 수정 가능

```python
people = {
    # 'key': value
  'name': '철수',
  'age': 29,  # 끝에 반드시 쉼표 확인 🚨
  'korean': True,
  'fav_food': ['불고기','김치찌개']
}

#  '키' 로 접근
print(people['name'])
```

<br />

> ### 관련 함수 모음

```python
a = {
  'name': '철수',
  'age': 29,
  'korean': True,
}

# 키만 출력
print(a.keys())

# 밸류만 출력
print(a.values())

# 키, 밸류 출력
print(a.items())

# 요소 지우기
del a['키']

# 요소 추가
a['키'] = 밸류
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://wikidocs.net/16)
