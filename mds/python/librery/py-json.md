# [Python] JSON 은 무엇일까?

## **JSON**

- `JavaScript Object Notation` 의 약자
- 인터넷 자료를 교환하는데 표현하는 방법으로 널리 알려짐

<br />

#### **JSON 구조 형식**

```python
{
    '이름': '철수', # 문자
    '나이': 29, # 숫자
    '특기': ['당구', '프로그래밍', '음악'], # 리스트
    '좋아하는가수': {                    # 딕셔너리
        'K-POP': '아이유',
        'POP': '제이슨 므라즈'
    },
    '결혼 여부': False # 참 혹은 거짓
}
```

<br />

## **인코딩과 디코딩**

- 파일 읽기와 쓰기
  - `loads()` json 파일 => 파이썬 객체 (dict 형태)로 저장
  - `dumps()` 파이썬 객체 => json 파일로 저장

#### **예시**

```python
import json

# 파일을 읽기 형태로 불러와 f라는 이름으로 지정
with open('a.json', 'r', encoding='utf-8') as f:

# json 파일을 읽고 변수(파이썬 객체)로 저장
data = json.loads(f)
```

```python
import json

data = {
    '사람': {
        '이름': '철수',
        '나이': 29
    },
    '친구': {
        '이름': '영희',
        '나이': 25
    }
}

# 파이썬 객체인 data를 json 파일로 저장
f = json.dumps(data)
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/json.html)
