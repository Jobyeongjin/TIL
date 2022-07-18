# [Python] 요소의 총 개수

## **count**

- `문자열에서` 주어진 요소의 총 개수를 반환
  - 시작과 끝을 지정할 수도 있음 (선택사항)
- `정수 값`을 반환
- 대소문자 구분

```python
.count(찾을 문자, 시작점, 끝점)
```

```python
a = 'python tutor'

# 'o'의 개수
print(a.count('o'))

# 특정 범위(인덱스) 안의 'o'의 개수
print(a.count('o', 0, 5))
```
