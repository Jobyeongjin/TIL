# [Python] 문자열 변경하기

<br />

## **replace()**

> 문자열을 변경하는 함수

- 문자열 안에서 **특정 문자를 새로운 문자로 변경**
- `replace(old, new, count)`

<br />

```python
# 문자열 변경
a = 'hello world'
a.replace('hello', 'hi')
>>> hi world

# ox 예시
'oxoxox'.replace('ox', '*')
>>> ***

# 카운트 사용 예시
'oxoxox'.replace('ox', '*', 1)
>>> *oxox
```
