# [DB] ORM 📝

> 파이썬으로 데이터베이스를 조작하는 일

## **ORM(Object Relational Mapping) 💭**

- 객체 지향 프로그래밍 언어를 사용하여. 호환되지 않는 유형의 시스템 간의 데이터를 변환하는 프로그래밍 기술
- 파이썬에서는 SQLAlchemy, peewee 등 라이브러리가 있으며, Django 프레임워크에서는 내장 Django ORM을 활용

<br />

### **"객체(Object)로 DB를 조작한다"**

```python
Genre.objects.all()
```

- SQL💡

```sql
SELECT * FROM Genre;
```

<br />

### **모델 설계**

- 모델 설계 및 반영 : 클래스를 생성하여 내가 원하는 DB 구조를 만든다.

```python
# 미리 만들어진 기능을 활용💡
from django.db import models

class Genre(models.Model):
  name = models.CharField(max_length=30)


class Artist(models.Model):
  name = models.CharField(max_length=30)
  debut = models.DateField()
```

<br />

### **마이그레이션(Migration)**

> Model에 생긴 변화를 DB에 반영하기 위한 방법

- 마이그레이션 파일을 만들어 DB 스키마를 반영한다.
  - 클래스의 내용으로 데이터베이스에 반영하기 위한 마이그레이션 파일을 생성한다.
- 명령어
  - `Makemigrations` : 마이그레이션 파일 생성
  - `Migrate` : 마이그레이션을 DB에 반영

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

```sql
-- migrate이 실행되면💡
BEGIN;
--
-- Create model Genre
--
CREATE TABLE "db_genre"(
	"id" interger NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name" varchar(30) NOT NULL
);
COMMIT;
```

- 트랜잭션과 롤백이 궁금하다면 [클릭](./transaction.md)

<br />

---

## **ORM 기본 조작** 💭

<br />

### **Create**

```python
# 방법 1.
Genre.objects.create(name='트로트')

# 방법 2.
genre = Genre()
genre.name = '락'
genre.save()
```

<br />

| id  | name     |
| --- | -------- |
| 1   | 인디밴드 |
| 2   | 트로트   |
| 3   | 락       |

<br />

### **Read**

```python
Genre.objects.all()[0]
>>> <Genre: Genre object (1)>

Genre.objects.all()[0].name
>>> '인디밴드'

for genre in genres:
  print(genre.name)
>>>
인디밴드
트로트
락

# 반드시 하나! 없거나, 많으면 오류
# PK(유일한 값)를 바탕으로 꺼낼 때 사용
Genre.objects.get(id=1)

# 무조건 결과가 QuerySet, 일종의 리스트
# 나머지는 필터를 사용
Genre.objects.filter(name='락')
```

<br />

### **Update**

```python
# 1. Genre의 id가 1인 값을 변수에 저장
genre = Genre.objects.get(id=1)

# 2. genre의 name은 인디밴드
genre.name
>>> '인디밴드'

# 3. genre의 name을 인디음악으로 변경하고 저장
genre.name = '인디음악'
genre.save()
```

<br />

### **Delete**

```python
# 1. Genre의 id가 2인 값을 변수에 저장
genre = Genre.objects.get(id=2)

# 2. genre 객체 삭제
genre.delete()
```

<br />

### **Artist 생성**

```python
# 방법 1.
import datetime
artist = Artist()
artist.name = '아이브'
artist.debut = datetime.date(2021, 12, 1)
artist.save()
>>> datetime.date(2021, 12, 1)

# 방법 2. 문자열
artist = Artist()
artist.name = '아이유'
artist.debut = '2019-12-26'
artist.save()
>>> datetime.date(2019, 12, 26)
```
