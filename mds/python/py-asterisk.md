# [Python] Asterisk \* 사용하기

## Asterisk \*

- 파이썬에서 `asterisk *` 를 사용하는 경우
  - 곱셈 및 거듭제곱 연산
  - 리스트형 컨테이너 타입의 데이터를 반복 확장
  - 가변인자 사용
  - 컨테이너 타입의 데이터를 `Unpacking`

<br />

1. **곱셈 및 거듭제곱 연산**

```python
# 정수 또는 실수

2 * 3
>>> 6

2 ** 3
>>> 8
```

2. **리스트형 컨테이너 타입의 데이터 반복 확장**

```python
list_ = [0] * 100

tuple_ = (0,) * 100
```

3. **가변인자 사용**
   - `*arg` => 함수를 호출할 때 **필요한 인자** 를 넣어서 사용할 수 있음
   - `**kwargs` => 함수를 호출할 때 **key 값** 을 주어야 함

```python
# *arg 💡
def print_info(*args):
    print(args)
    print(type(args))

print_info('word', 10,)
>>> ('word', 10,)
>>> <class 'tuple'>


# **kwargs 💡
def print_info(**kwargs):
    print(kwargs)
	print(type(kwargs))
	print(kwargs["name"])

print_info(name = '철수', age = 25, gender = 'Male')

>>> {'name': '철수', 'age': 25, 'gender' = 'Male'}
>>> <class : 'dict'>
>>> 철수

```

4. **컨테이너 타입의 데이터 `Unpacking`**

```python
list_ = [1, 2, 3, 4, 5]

print(list_)
>>> [1, 2, 3, 4, 5]

print(*list_)
>>> 1 2 3 4 5
```
