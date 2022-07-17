# [Python] 예쁘게 출력하기

### **`pprint` 는 무엇일까?**

- 중첩된 리스트나 딕셔너리, API요청 결과, JSON 등 많은 양의 데이터를 다룰 때 편히 볼 수 있도록 정리해주는 파이썬 기본 모듈
- `Pretty Print` 의 약자

<br />

### **사용법**

```python
from pprint import pprint

pprint(데이터파일)
```

<br />

### **옵션**

```python
# 하위 수준(리스트 또는 딕셔너리) 생략
pprint(파일, depth=n)

# 들여쓰기 간격 조절
pprint(파일, indent=n)

# 한 줄에 최대 길이 제한
pprint(파일, width=n)

# 기본값인 알파벳 순으로 정렬되는 것을 방지
pprint(파일, sort_dicts=False)
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/pprint.html)
