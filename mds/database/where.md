# [DB] WHERE 활용

## **지난 시간에는** 💭

|     | 구문       | 예시                                                            |
| --- | ---------- | --------------------------------------------------------------- |
| C   | **INSERT** | `INSERT INTO 테이블이름 (컬럼1, 컬럼2, ...) VALUES (값1, 값2);` |
| R   | **SELECT** | `SELECT * FROM 테이블이름 WHERE 조건;`                          |
| U   | **UPDATE** | `UPDATE 테이블이름 SET 컬럼1=값1, 컬럼2=값2 WHERE 조건;`        |
| D   | **DELETE** | `DELETE FROM 테이블이름 WHERE 조건;`                            |

<br />

---

## **WHERE** 📝

```sql
-- users 테이블 생성
CREATE TABLE users(
	first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  country TEXT NOT NULL,
  phone TEXT NOT NULL,
  balance INTEGER NOT NULL
);

-- 데이터 추가
.mode csv

-- 같은 디렉토리에 있는 users.csv 파일을 users 테이블로💡
.import users.csv users

-- 30세 이상인 사람들 모두 보여줘
SELECT * FROM users WHERE age >= 30;

-- 30세 이상인 사람들의 이름을 보여줘
SELECT first_name FROM users WHERE age >= 30;

-- 30세 이상인 사람들의 이름을 3명만 보여줘
SELECT first_name FROM users WHERE age >= 30 LIMIT 3;

-- 30세 이상이면서 성이 김씨인 사람만 보여줘
SELECT age, first_name FROM users WHERE age >= 30 AND last_name='김';
```

<br />

### **WHERE문에서 사용할 수 있는 비교 연산자 💭**

- **비교 연산자**
- `=, <, <=, >, >=` 는 숫자 혹은 문자 값의 대/소, 동일 여부를 확인하는 연산자
- **논리 연산자**
  - `AND` : 앞에 있는 조건과 뒤에 오는 조건이 모두 참인 경우
  - `OR` : 앞의 조건이나 뒤의 조건이 참인 경우
  - `NOT` : 뒤에 오는 조건의 결과를 반대로
- **주의사항 🚨**
  - `우선순위`

```sql
-- 키가 175이거나, 키가 183이면서 몸무게가 80인 사람
-- -> 키가 175이면서 183일 수는 없으니 값을 찾지 못한다!
WHERE height=175 OR height=183 AND weight=80

-- (키가 175 또는 183인 사람 중에서) 몸무게가 80인 사람
WHERE (height=175 OR height=183) AND weight=80
```

<br />

### **SQL 사용할 수 있는 연산자 💭**

- `BETWEEN 값1 AND 값2`
  - **값1과 값2 사이의 비교 (값1 <= 비교값 <= 값2)**
- `IN (값1, 값2, ...)`
  - **목록 중에 값이 하나라도 일치하면 성공**
- `LIKE`
  - **비교 문자열과 형태 일치**
  - **와일드카드**
    - `%`: 0개 이상 문자
    - `_`: 1개 단일 문자
- `IS NULL / IS NOT NULL`
  - **NULL 여부를 확인할 때는 항상 = 대신에 IS를 활용**
- `부정 연산자`
  - 같지 않다 (!=, ^=, <>)
  - ~와 같지 않다 (NOT 컬럼명 =)
  - ~보다 크지 않다 (NOT 컬럼명 >)

```sql
WHERE 컬럼명1 != 비교값1
	AND 컬럼명2 ^= 비교값2
	AND 컬럼명3 <> 비교값3
	AND NOT 컬럼명4 = 비교값4
	AND NOT 컬럼명5 > 비교값5;
```

<br />

### **연산자 우선순위 💭**

1. 괄호 ()
2. NOT
3. SQL, 비교 연산자
4. AND
5. OR

<br />

---

## **SQLite Aggregate Functions** 📝

<br />

### **Aggregate function (집계 함수) 💭**

> 값 집합에 대한 계산을 수행하고 단일 값을 반환

- `COUNT` : 그룹의 항목 수를 가져옴
- `AVG` : 모든 값의 평균을 계산
- `MAX` : 그룹에 있는 모든 값의 최대값을 가져옴
- `MIN` : 그룹에 있는 모든 값의 최소값을 가져옴
- `SUM` : 모든 값의 합을 계산

<br />

```sql
-- 30세 이상인 사람들이 몇 명인지 보여줘
SELECT COUNT(*) FROM users WHERE age >= 30;

-- 전체 인원 중에 가장 작은 나이인 사람을 보여줘
SELECT MIN(age) FROM users;

-- 이씨 중에 가장 작은 나이인 사람을 보여줘
SELECT MIN(age), last_name FROM users WHERE last_name ='이';

-- 이씨 중에 가장 적은 나이를 가진 사람의 이름과 계좌잔고를 보여줘
SELECT MIN(age), first_name, balance FROM users WHERE last_name = '이';

-- 30세 이상인 사람들의 평균 나이를 보여줘
SELECT AVG(age) FROM users WHERE age>=30;

-- 게좌 잔액이 가장 높은 사람을 보여줘
SELECT MAX(blance), first_name FROM users;
```

<br />

### **LIKE** 💭

- 'query data based on pattern matching'
- 패턴 일치를 기반으로 데이터를 조회하는 방법
- SQLite는 패턴 구성을 위한 2개의 wildcards를 제공
  - `% (percent sign)` : 0개 이상의 문자
  - `_ (underscore)` : 임의의 단일 문자

<br />

```sql
SELECT * FROM 테이블이름 WHERE 컬럼 LIKE '패턴';
```

<br />

| 와일드카드패턴   | 의미                                          |
| ---------------- | --------------------------------------------- |
| 2%               | 2로 시작하는 값                               |
| %2               | 2로 끝나는 값                                 |
| %2%              | 2가 들어가는 값                               |
| \_2%             | 아무 값이 하나 있고 두 번째가 2로 시작하는 값 |
| 1\_\_\_          | 1로 시작하고, 총 4자리인 값                   |
| 2\_%\_% / 2\_\_% | 2로 시작하고 적어도 3자리인 값                |

<br />

```sql
-- 지역번호가 02인 사람을 보여줘
SELECT COUNT(*) FROM users WHERE phone LIKE '02-%';

-- 준으로 끝나는 사람이 몇 명이지 알려줘
SELECT COUNT(*) FROM users WHERE first_name LIKE '%준';

-- 중간번호가 5114로 끝나는 사람이 몇 명인지 알려줘
SELECT COUNT(*) FROM users WHERE phone LIKE '%-5114-%';
```

<br />

### **ORDER BY** 💭

- 'sort a result set of a query'
- **조회 결과 집합을 정렬**
- SELECT 문에 추가하여 사용
- **정렬 순서를 위한 2개의 keyword 제공**
  - `ASC` : 오름차순 (default)
  - `DESC` : 내림차순

```sql
-- 나이를 오름차순으로 10명만 이름과 나이를 보여줘
SELECT first_name, age FROM users ORDER BY age ASC LIMIT 10;

-- 나이, 성 순으로 오름차순으로 10명을 보여줘
SELECT * FROM users ORDER BY age, first_name LIMIT 10;

-- 계좌 잔액을 내림차순으로 이름과 계좌를 10명만 보여줘
SELECT last_name, first_name, balance FROM users ORDER BY balance DESC LIMIT 10;

-- 계좌 잔액은 내림차순, 성은 오름차순으로 이름과 계좌를 10명만 보여줘
SELECT last_name, first_name, balance FROM users ORDER BY balance DESC, last_name ASC LIMIT 10;
```
