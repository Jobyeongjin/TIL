# [DB] 데이터베이스란 무엇일까

## **데이터베이스 (Database, DB)**

> 구조화된 데이터의 집합

- **일상생활 대부분의 정보가 저장되고 관리**된다. 오늘 보내거나 받은 카카오톡 메세지, 인스타그램에 등록한 사진, 버스/지하철에서 찍은 교통카드, 카페에서 구매한 아메리카노 등의 정보가 모두 데이터베이스에 기록되고 있다.

- `데이터 삽입, 조회, 수정, 삭제` 를 한다.

<br />

### **데이터베이스(DB) 구성요소**

- `테이블 (table)`

  - `행(row)`

    - 한 단위의 데이터 기록(record)

  - `열(column)`

    - 데이터의 항목(field)

<br />

### **DBMS (Database Management System)**

> 데이터베이스를 관리해주는 시스템

<br />

| DBMS       | 제작사     | 운영체제                  | 기타                                                 |
| ---------- | ---------- | ------------------------- | ---------------------------------------------------- |
| MySQL      | Oracle     | Unix, Linux, windows, Mac | 오픈 소스(무료), 상용                                |
| MariaDB    | MariaDB    | Unix, Linux, windows      | 오픈 소스(무료), MySQL 초기 개발자들이 독립해서 제작 |
| PstgreSQL  | PostgreSQL | Unix, Linux, windows, Mac | 오픈 소스(무료)                                      |
| Oracle     | Oracle     | Unix, Linux, windows      | 상용 시장 점유율 1위                                 |
| SQL Server | Microsoft  | windows                   | 주로 중/대형급 시장에서 사용                         |
| DB2        | IBM        | Unix, Linux, windows      | 메인프레임 시장 점유율 1위                           |
| Access     | Microsoft  | windows                   | PC용                                                 |
| SQLite     | SQLite     | Android, IOS              | 모바일 전용, 오픈 소스(무료)                         |

<br />

---

## **SQL (Structured Query Language)**

> 데이터베이스를 관리하기 위해 사용되는 언어

<br />

### **SQL의 종류**

- `DDL (Data Definition Language)`
  - 데이터 정의 언어
- `DML (Data Manipulation Language)`
  - 데이터 조작 언어

<br />

### **SQLite 데이터 타입**

| 데이터 타입 | 설명        |
| ----------- | ----------- |
| integer     | 정수        |
| real        | 실수        |
| text        | 문자열      |
| null        | 데이터 없음 |

<br />

---

## **SQL CREATE**

<br />

### **테이블 생성 명령** 💭

- `CREATE TABLE 테이블명(컬럼명1 데이터타입, 컬럼명2 데이터타입);`

```sql
-- 게시판을 만드는데, 게시판 번호는 숫자고, 제목은 문자열, 내용도 문자열로 하겠다는 뜻💡
CREATE TABLE post(id integer, title text, content text);
```

- **제약 조건 1. `primary key`**

```sql
-- 레코드를 구분 짓는 값💡
CREATE TABLE post(id integet primary key, title text, content text);
```

- **제약 조건 2. `not null`**

```sql
-- 제목은 비어있을 수가 없다라는 뜻💡
CREATE TABLE post(id integer, primary key, title text not null, content text);
```

- **제약 조건 3. `default`**

```sql
-- 기본값, 아무것도 없으면 기본값으로 대체한다💡
CREATE TABLE post(id integer primary key, title text not null default '제목없음', content text default '내용없음');
```

- **제약 조건 4. `unique`**

```sql
-- 닉네임은 유니크하다. 같은 값을 사용하려 할 경우 조건에 걸려서 사용할 수 없다💡
CREATE TABLE user(id integer primary key autoincrement, nickname text unique);
```

<br />

### **테이블 삭제 명령** 💭

- `DROP TABLE 테이블명;`

```sql
DROP TABLE post;
```

<br />

### **테이블 수정 명령** 💭

- `ALTER TABLE 테이블명 RENAME TO 새로운 테이블명;`

```sql
ALTER TABLE post RENAME TO board;
```

<br />

### **컬럼 수정 명령** 💭

- 추가 : `ALTER TABLE 테이블명 ADD COLUMN 컬렴명 데이터타입;`
- 수정 : `ALTER TABLE 테이블명 RENAME COLUMN 컬럼명 TO 새로운컬럼명;`

```sql
-- 컬럼 추가💡
ALTER TABLE post ADD COLUMN post_date TEXT;


-- 컬럼 수정💡
ALTER TABLE post RENAME COLUMN post_date TO reg_date;
```

<br />

---

## **SQL DML (Data Manipulation Language)**

<br />

### **DML의 종류**

| 명령어 | 설명                           |
| ------ | ------------------------------ |
| INSERT | 테이블에 새로운 행을 삽입      |
| UPDATE | 테이블에 있는 행의 내용을 갱신 |
| DELETE | 테이블의 행을 삭제             |
| SELECT | 데이터 조회                    |

<br />

### **INSERT** 💭

> 테이블에 새로운 행 삽입

- `INSERT INTO 테이블명(컬럼명1, 컬럼명2) VALUES(값1, 값2);`

```sql
INSERT INTO post(title, content) VALUES('코딩', '재미있어요!');
```

<br />

### **SELECT** 💭

> 데이터 조회

- `SELECT 컬럼명1, 컬럼명2 FROM 테이블명;`

- **조건 추가하기**
  - `SELECT 컬럼명1, 컬럼명2 FROM 테이블명 WHERE 조건;`
- **정렬하기**
  - `SELECT * FROM 테이블명 ORDER BY 컬럼명 [ASC | DESC];`
    - ASC : 오름차순
    - DESC : 내림차순

```sql
-- post로부터 제목과 내용을 보여줘💡
SELECT title, content FROM post;


-- post로부터 모든 데이터를 보여줘💡
SELECT * FROM post;


-- post로부터 글번호가 3인 요소의 제목과 내용을 가져와줘💡
SELECT title, content FROM post WHERE id=3;


-- post로부터 모든 요소 중에 제목이 startcoding으로 시작되는 요소만 보여줘💡
SELECT * FROM post WHERE title like 'startcoding%';


-- post로부터 글번호가 1부터 10인 요소의 제목과 내용을 보여줘💡
SELECT title, content FROM post WHERE id BETWEEN 1 and 10;


-- user로부터 모든 요소 중에 주소가 서울, 부산, 대구인 요소만 보여줘💡
SELECT * FROM user WHERE address IN('seoul', 'busan', 'deagu');


-- post로부터 모든 요소들의 제목을 오름차순으로 정렬해줘💡
SELECT * FROM post ORDER BY title ASC
```

<br />

### **UPDATE** 💭

> 데이터 수정

- `UPDATE 테이블명 SET 컬럼명 = 값, ... WHERE 조건식;`

```sql
-- 글번호가 3인 요소의 제목과 내용을 수정💡
UPDATE post SET title='제목 수정 중', content='본문 수정 중', WHERE id=3;
```

<br />

### **DELETE** 💭

> 데이터 삭제

- DELETE FROM 테이블명 WHERE 조건식;

```sql
-- post에서 글번호가 3인 요소를 삭제💡
DELETE FROM post WHERE id=3
```

<br />

---

## **GROUP BY & JOIN**

### **그룹화해서 계산하는 명령** 💭

- `SELECT count(*) FROM 테이블명 GROUP BY 컬럼명;`

```sql
-- user에서 gender를 그룹별로 묶어서 gender가 몇 개인지(count) 알려줘💡
SELECT gender, count(*) FROM user GROUP BY gender;


-- user에서 gender를 (age가 20이 넘는 요소만) 그룹별로 묶어서 gender의 평균 나이를 알려줘💡
SELECT gender, avg(age) FROM user WHERE age > 20 GROUP BY gender;
```

<br />

### **두 테이블을 묶어서 조회할 때** 💭

- `SELECT * FROM 테이블명1 INNER JOIN 테이블명2 WHERE 조건;`

```sql
-- post와 user의 모든 요소를 (post의 author와 user의 email이 같을 경우) 묶어서 보여줘💡
SELECT * FROM post INNER JOIN user WHERE post.author = user.email;


-- INNER JOIN = 콤마(,) -> 대체 가능💡
SELECT * FROM post, user WHERE post.author = user.email;
```

<br />

---

## **파이썬에서 SQLite 사용하기**

> 파이썬에는 이미 SQLite3가 내장되어 있다

<br />

### **사용순서**

1. DataBase `파일 열기`
2. `커서(Cursor) 생성`
3. `SQL 명령 실행`
4. `커밋 또는 롤백 (승인 또는 취소)`
5. DataBase `닫기`

<br />

### **파이썬으로 실습하기 📝**

- `CREAT (생성)` 💭

```python
# 모듈 추가✅
import sqlite3


# 데이터베이스 열기✅
conn = sqlite3.connect('파일경로')


# 커서 생성✅
cur = conn.cursor()


#SQL 명령 작성✅
CREATE_SQL = '''
	CREATE TABLE IF NOT EXISTS Item(
		id integer primary key autoincrement,
		code text not null,
		name text not null,
		price integer not null
	);
'''
# 해석💡
# - CREATE TABLE IF NOT EXISTS Item -> 테이블이 존재하지 않을 경우에만 Item이라는 테이블을 만들어줘.
# - id integer -> id는 숫자이다.
# - primary key autoincrement -> 유일한 값으로 글번호가 1,2,3 이렇게 매겨진다. 여기서 autoincrement를 설정하면, 글번호 3을 삭제하고 새로운 행을 생성시 글번호 3이 되는 것이 아니라 글번호 4로 생성이 된다.
# - code text not null -> code는 문자열이고 비어있으면 안된다.
# - name text not null -> name은 문자열이고 비어있으면 안된다.
# - price integer not null -> price는 숫자이고 비어있으면 안된다.


# SQL 명령 실행✅
cur.execute(CREATE_SQL)


# 데이터베이스 닫기✅
conn.close()
```

<br />

- `INSERT (삽입)` 💭

```python
# 모듈 추가✅
import sqlite3


# 데이터베이스 열기✅
conn = sqlite3.connect('파일경로')


# 커서 생성✅
cur = conn.cursor()


#SQL 명령 작성✅
INSERT_SQL = 'iNSERT INTO item(code, name, price) VALUES(?, ?, ?);'
# 해석💡
# - 밸류 안에 (?)를 넣으면 명령을 실행할 때 들어오는 인자들이 순서에 맞게 입력이 된다.
# - 'code=A00001, name=게이밍 마우스, price=38000' 이렇게!


# SQL 명령 실행✅
cur.execute(INSERT_SQL, ('A00001', '게이밍 마우스', 38000))


# 커밋✅
# INSERT, UPDATE, DELETE는 commit을 실행해야 데이터베이스에 반영된다.💡
conn.commit()


# 데이터베이스 닫기✅
conn.close()


# 여러 개의 데이터를 입력하고싶은 경우💡
# - 실행 명령어 executemany를 사용하여 반복 가능한 객체에 담아서 넘겨준다.
INSERT_SQL = 'iNSERT INTO item(code, name, price) VALUES(?, ?, ?);'

data = (
	('A00002', '에어컨 20평형', 350000),
  ('A00003', '최신형 스마트폰', 800000),
  ('A00004', '가성비 노트북', 650000)
);

cur.executemany(INSERT_SQL, data)
```

<br />

- `SELETE (조회)` 💭

```python
# 모듈 추가 ✅
import sqlite3


# 데이터베이스 열기 ✅
conn = sqlite3.connect('파일경로')


# 커서 생성 ✅
cur = conn.cursor()


#SQL 명령 작성 ✅
SELETE_SQL = 'SELETE * FROM item;'


# SQL 명령 실행 ✅
cur.execute(SELETE_SQL)
# 중첩튜플에 있는 데이터를 전부 불러와 변수(rows)에 담고 반복문을 돌려서 하나씩 꺼내기💡
rows = cur.fetchall()
for row in rows:
  print(row)


# 데이터베이스 닫기 ✅
conn.close()

```

<br />

- `UPDATE (갱신)` 💭

```python
# 모듈 추가✅
import sqlite3


# 데이터베이스 열기✅
conn = sqlite3.connect('파일경로')


# 커서 생성✅
cur = conn.cursor()


#SQL 명령 작성✅
UPDATE_SQL = 'UPDATE Item set price = 650000 WHERE code="A00002";'


# SQL 명령 실행✅
cur.execute(UPDATE_SQL)


# 커밋✅
conn.commit()


# 데이터베이스 닫기✅
conn.close()
```

<br />

- `DELETE (삭제)` 💭

```python
# 모듈 추가✅
import sqlite3


# 데이터베이스 열기✅
conn = sqlite3.connect('파일경로')


# 커서 생성✅
cur = conn.cursor()


#SQL 명령 작성✅
DELETE_SQL = 'DELETE FROM Item WHERE code"A00002";'


# SQL 명령 실행✅
cur.execute(DELETE_SQL)


# 커밋✅
conn.commit()


# 데이터베이스 닫기✅
conn.close()
```
