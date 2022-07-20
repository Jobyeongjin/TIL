# [Python] 반올림 함수

- 인자가 숫자 타입인 경우 정수 혹은 실수 반환하고 그게 아니라면 None
- 올림, 내림 수 `차이가 동일한 경우 짝수` 값을 선택
  - 예시 : `2.5 => 2` , `3.5 => 4`

```python
# 반올림을 소숫점 2번째까지 표시
round(0.123, 2)

# 짝수 값을 선택
print(round(2.5)) # 2
print(round(3.5)) # 4
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/functions.html#round)
