# [Python] 날짜와 시간

### **`datetime`**

- 날짜와 시간을 조작하는 클래스를 제공

<br />

### **클래스**

| 클래스    | 설명        |
| --------- | ----------- |
| data      | 날짜        |
| time      | 시간        |
| datetime  | 날짜와 시간 |
| timedelta | 기간        |
| timezone  | 시간대      |

<br />

## **data**

- 날짜를 표현하는 클래스
- 생성자는 연, 월, 일 데이터를 인자로 받음

```python
from datetime import date

# 오늘 날짜 가져오기
date.today()
# 기본적으로 연, 월, 일 데이터를 인자로 가져옴
datetime.date(2022, 7, 16)

# YYYY-MM-DD 형태의 문자열로 변환하기
todat.isoformat()

# YYYY-MM-DD 형태에서 다시 date 객체로 변환하기
date.fromisoformat(YYYY-MM-DD)
```

<br />

- `속성`을 통해 접근하기

```python
# 오늘은 2022. 7. 16
today = date.today()

today.year # 2022
today.month # 7
today.day # 16
```

<br />

## **time**

- 날짜와 관계없는 (지역)시간을 표현하는 클래스
- 생성자는 시, 분, 초, 마이크로 초, 시간대를 인자로 받음
  - 모든 인자는 필수가 아니며, 생략할 경우 0 이 기본값으로 사용 (시, 분, 초)
- 속성을 통해 접근 가능

```python
from datetime import time

datetime.time(11, 59, 20)
```

<br />

## **datetime**

- 날짜와 시간을 동시에 표현하는 클래스
- 연, 월, 일, 시, 분, 초, 마이크로 초, 시간대를 인자로 받으며 마찬가지로 시간대의 인자는 생략하면 기본갑은 0 으로 사용

```python
from datetime import datetime

# 현재 시각 가져오기
datetime.now()

# 다양한 포멧의 문자열로 변환
today.strftime('%Y/%m/%d')
'2022/07/16'
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/datetime.html)
