# [Python] 딕셔너리 정렬하기

## **key값을 기준으로 정렬**

- `sorted()` 함수 사용
- `기본값은 오름차순`이며, 내림차순으로 정렬하고 싶은 경우 매개변수로 `reverse=True` 값을 추가

```python
dic = {
    'name': '철수',
    'age': 22,
    'gender': 'male'
}

# 오름차순 (알파벳순)
print(sorted(dic))
>>> ['age', 'gender', 'name']

# 내림차순
print(sorted(dic, reverse=True))
>>> ['name', 'gender', 'age']
```

<br />

## **value값을 기준으로 정렬**

- `sorted() + lambda` 함수 사용
  - [lambda 함수란 💭](./py-lambda.md)
- `기본값은 오름차순`이며, 내림차순으로 정렬하고 싶은 경우 매개변수로 `reverse=True` 값을 추가

```python
dic = {
    '철수': 27,
    '영희': 22,
    '수애': 30
}

# (k, v) 리스트 반환
print(sorted(dic.items(), key=lambda x: x[1]))
>>> [('영희', 22), ('철수', 27), ('수애', 30)]

# 딕셔너리 반환
print(dict(sorted(dic.items(), key=lambda x: x[1])))
>>> {'영희': 22, '철수': 27, '수애': 30}

# 키값 반환
print(sorted(dic, key=lambda x: dic[x]))
>>> ['영희', '철수', '수애']
```
