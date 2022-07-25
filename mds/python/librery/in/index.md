# [Python] 인덱스 위치 찾기

## **index**

> 특정 원소의 인덱스를 찾아주는 함수

<br />

### **index(value, start, end)**

- `찾을 문자가 없는 경우` 에러 발생 (ValueError) 🚨
- 문자열, 리스트, 튜플 자료형 에서 **사용 가능**
  - 딕셔너리는 사용 불가 (AttributeError) 🚨

```python
# 리스트
n = [1, 3, 5, 10, 15, 10, 11, 3]

# 10이 위치한 자리
print(n.index(10))
>>> 3

# 4번째부터 7번째까지의 10 찾기
print(n.index(10, 4, 7))
>>> 5


# 문자열
char = 'hello'

print(char.index('o'))
>>> 4
```

---

<br />

## **find**

> 문자나 문자열의 인덱스를 찾아주는 함수

- 찾을 문자가 없는 경우 `-1` 을 반환
- 리스트, 튜플, 딕셔너리 자료형에서는 **사용 불가**
  - 사용시 에러 발생 (AttributeError) 🚨

```python
# 문자열
char = 'hello'

print(char.find('o'))
>>> 4
```

---

<br />

#### 📚 참조

- 공식 문서가 궁금하다면 [클릭 (find)](https://docs.python.org/ko/3/library/stdtypes.html?highlight=find#str.find)
- 공식 문서가 궁금하다면 [클릭 (index)](https://docs.python.org/ko/3/library/stdtypes.html?highlight=find#str.index)
