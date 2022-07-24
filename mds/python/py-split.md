# [Python] 문자열 합치기 / 나누기

## **문자열 합치기**

> 리스트 안에 문자열끼리 연결

- `구분자.join(리스트)`
- 문자열 사이에 `특정 문자열` 을 넣을 수도 있음

```python
# 기본값
a = ['a', 'b', 'c', 'd']
a_str = ''.join(a)

print(a_str) # abcd


# 구분자를 공백으로 사용
b = ['hi', 'my', 'name', 'is', '철수']
b_str = ' '.join(b)

print(b_str) # hi my name is 철수
```

<br />

## **문자열 나누기**

> 문자열을 나눠서 리스트를 만들 때 사용

- `문자열.split(sep='구분자', maxsplit=분할횟수)`
  - sep 의 **기본값은 공백**
  - maxsplit 의 **기본값은 -1 (제한없음)**

```python
# 기본값
a = 'a b c d'
a_list = a.split()

print(a_list) # ['a', 'b', 'c', 'd']


# 구분자 (-) 기준으로 나누기
b = 'hi-my-name-is-철수'

print(b.split('-')) # ['hi', 'my', 'name', 'is', '철수']


# 구분자 (공백) 1번 나누기
c = 'a b c d'

print(c.split(' ', 1)) # ['a', 'b c d']
```

<br />

#### 📚 참조

- 문자열 메소드가 더 궁금하다면 [클릭](https://docs.python.org/ko/3/library/stdtypes.html#str)
