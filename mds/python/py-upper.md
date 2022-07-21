# [Python] 문자열 대소문자 변환

### **소문자를 대문자로 변환하는 함수**

- `upper()` : 모든알파벳
- `capitalize()` : 맨 첫글자만
- `title()` : 맨 첫글자만, 나눠져 있는 영단어는 모두

```python
# 모두 대문자로 변환
a = 'abcd'

print(a.apper())

# 맨 앞 글자만 변환하는 함수 비교하기 🚨
a = 'ab-cd'

print(a.capitalize()) # Ab-cd
print(a.title()) # Ab-Cd
```

<br />

### **대문자를 소문자로 변환하는 함수**

- `lower()` : 모든알파벳

```python
# 모두 소문자로 변환
A = 'ABCD'

print(A.lower())
```
