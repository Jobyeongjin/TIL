# [Python] 라이브러리 시작하기

### **라이브러리란 ?**

- 표준 라이브러리는 파이썬에서 기본으로 제공하는 라이브러리이며 파이썬에 기본적을 내장되어 있음
- 코드를 작성할 필요없이 많은 동작을 수행할 수 있도록 도와주는 `함수와 메서드의 집합체`
  - `도서관에서 필요한 책을 가져온다` 라고 생각하면 편안 💡
  - 그 말은 즉, 개발자가 개발한 책이고, 다른 사람과 공유도 가능
- `라이브러리 > 패키지 > 모듈` 순으로 구성

<br />

### **모듈 가져오기**

- `import` 사용

```python
# 모듈 전체
import 모듈
또는
from 모듈 import *

# 여러 개는 콤마로 구분
import 모듈, 모듈

# 필요한 모듈만
from 모듈 import 변수 또는 함수

# 모듈에 이름 지정
import 모듈 as 바꿀이름

# 변수 또는 함수에 이름 지정
from 모듈 import 변수 또는 함수 as 바꿀이름
```

<br />

### **모듈 사용하기**

```python
# 모듈만 불러온 경우
import 모듈

a = 모듈.함수()
print(a)

# 필요한 모듈만 불러온 경우
from 모듈 import 함수

a = 함수()
print(a)

# 이름을 지정한 경우

from 모듈 import 함수 as 이름

a = 이름()
print(a)
```

<br />

#### 📚 참조

- 자세한 내용이 궁금하다면 [클릭](https://docs.python.org/ko/3/library/index.html)
- 외부 라이브러리가 필요하다면 [클릭](https://pypi.org/)
