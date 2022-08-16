# [DB] 데이터베이스란 ?

## **데이터베이스 (Database)** 💭

- **체계화된 데이터의 모임**
- 여러 사람이 공유하고 사용할 목적으로 **통합 관리되는 정보의 집합**
- 논리적으로 연관된 자료의 모음으로 그 내용을 고도로 구조화 함으로써 **검색과 갱신의 효율화를 꾀한 것**
- 즉, **몇 개의 자료 파일을 조직적으로 통합**하여 **자료 항목의 중복을 없애고 자료를 구조화하여 기억시켜 놓은 자료의 집합체**

<br />

## **데이터베이스로 얻는 장점들** 💭

- **중복 최소화**
- **무결성 (장확한 정보를 보장)**
- **일관성**
- **독립성 (물리적 / 논리적)**
- **표준화**
- **보안 유지**

<br />

## **스키마 (schema)** 💭

- 데이터베이스에서 자료의 구조, 표현방법, 관계 등 전반적인 명세를 기술한 것

<br />

### **테이블 (table)**

- **열(컬럼/필드)**과 **행(레코드/값)**의 모델을 사용해 조직된 데이터 요소들의 집합
- `열 (column)` : 각 열에 고유한 데이터 형식 지정
- `행 (row)` : 실제 데이터가 저장되는 형태
- `기본키 (Primary Key)` : 각 행(레코드)의 고유 값
  - 반드시 설정해야 하며, 데이터베이스 관리 및 관계 설정 시 주요하게 활용됨

<br />

| id  | name   | address | age |
| --- | ------ | ------- | --- |
| 1   | 홍길동 | 제주    | 20  |
| 2   | 김길동 | 서울    | 30  |
| 3   | 박길동 | 독도    | 40  |

<br />

---

## **RDBMS** 📝

> **관계형 데이터베이스 관리 시스템 (RDBMS)**
>
> - 관계형 모델을 기반으로 하는 데이터베이스 관리시스템을 의미

<br />

### **SQLite**

- **서버 형태가 아닌 파일 형식**으로 응용 프로그램에 넣어서 사용하는 **비교적 가벼운 데이터베이스**
- 구글 안드로이드 운영체제에 기본적으로 탑재된 데이터베이스이며, 임베디드 소프트웨어에도 많이 사용됨
- 로컬에서 간단한 DB 구성을 할 수 있으며, 오픈소스 프로젝트이기 때문에 자유롭게 사용가능

<br />

#### **SQLite 데이터 타입**

| 타입    | 설명                                                        |
| ------- | ----------------------------------------------------------- |
| INTEGER | 정수                                                        |
| TEXT    | 문자열                                                      |
| BLOB    | 이진 데이터 (대용량의 바이너리 데이터를 저장하기 위한 타입) |
| REAL    | 실수                                                        |
| NUMERIC | 정수 또는 실수                                              |

<br />

---

## **SQL**📝

> 관계형 데이터베이스 관리시스템의 데이터 관리를 위해 설계된 특수 목적으로 프로그래밍 언어

- **스키마 생성 및 수정**
- **자료의 검색 및 관리**
- **데이터베이스 객체 접근 조정 관리**

<br />

| 분류                                                            | 개념                                                      |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| **DDL** (Data **Definition** Language) - **데이터 정의 언어**   | 관계형 데이터베이스 `구조를 정의` 하기 위한 명령어        |
| **DML** (Data **Maripulation** Language) - **데이터 조작 언어** | `데이터를 저장, 조회, 수정, 삭제` 들을 하기 위한 명령어   |
| **DCL** (Data **Control** Language) - **데이터 제어 언어**      | 데이터베이스 `사용자의 권한 제어` 를 위해 사용하는 명령어 |

<br />

### **필드 제약 조건** 💭

- `NOT NULL` : null 값 입력 금지
- `UNIQUE` : 중복 값 입력 금지
- `PRIMARY KEY` : 유일한 값
- `FOREIGN KEY` : 외래키
- `CHECK` : 조건으로 설정된 값만 입력 허용
- `DEFAULT` : 기본 설정 값

<br />

```sql
-- classmates라는 이름의 테이블 생성💡
CREATE TABLE classmates(
	id INTEGER PRIMARY KEY,
  name TEXT
);


-- 테이블 목록 조회💡
.tables


-- 특정 테이블 스키마 조회💡
.schema classmates


-- 값 추가💡
INSERT INTO calssmates VALUES (1, '조세호');


-- 테이블 조회💡
SELECT * FROM classmates;


-- 테이블 삭제💡
DROP TABLE classmates;


-- 해석💡
-- students라는 테이블을 생성할건데,
-- id는 정수고 유일한 값이야.
-- name은 문자이고 비어있어서는 안돼.
-- age는 정수고 기본값은 1이면서, 0보다는 큰지 확인해줘.
CREATE TABLE students(
	id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER DEFAULT 1 CHECK (0 < age)
)
```

<br />

---

## **CREATE** 📝

<br />

### **INSERT** 💭

> Insert a single row into a table

- 테이블에 단일 `행 삽입`
- 테이블에 정의된 모든 컬럼에 맞춰 순서대로 입력

```sql
-- CREATE💡


-- Parse error: table classmates has 3 column but 2 values were supplied -> 테이블에 열이 3개인데 2개만 넣었어. 어디에 넣을려고 하는거야?
INSERT INTO classmates VALUES ('홍길동', 23); 🚨


-- 테이블에 데이터를 삽입하고 조회하기💡
INSERT INTO classmates (name, age) VALUES ('홍길동', 23);
SELECT * FROM classmates;


INSERT INTO classmates (name, age, address) VALUES ('홍길동', 23, '서울');
INSERT INTO classmates VALUES ('김철수', 23, '서울');


-- 한번에 삽입하고 싶다면💡
INSERT INTO classmates VALUES
	('홍길동', 30, '서울'),
  ('김철수', 30, '제주'),
  ('이호영', 26, '인천'),
  ('박민희', 29, '대구'),
  ('최혜영', 28, '전주');
```

<br />

---

## **READ** 📝

<br />

### **SELECT** 💭

> Query data from a table

- 테이블에서 `데이터를 조회`

  - SELECT 문은 SQLite에서 가장 기본이 되는 문이며, 다양한 절(clause)과 함께 사용

    ORDER BY, DISTINCT, WHERE, LIMIT, GROUP BY ...

```sql
SELECT 컬럼1, 컬럼2, ... FROM 테이블명;
```

<br />

### **LIMIT** 💭

> 'constrain the number of rows retrurned by a qeury'

- 퀴리에서 `반환되는 행 수를 제한`
- 특정 행부터 시작해서 조회하기 위해 OFFSET 키워드와 함께 사용하기도 함
  - `OFFSET` : 처음부터 주어진 요소나 지점까지의 차이를 나타내는 정수형

```sql
SELECT 컬럼1, 컬럼2, ... FROM 테이블명 LIMIT 숫자;

SELECT 컬럼1, 컬럼2, ... FROM 테이블명 LIMIT 숫자 OFFSET 숫자;
```

<br />

### **WHERE** 💭

> 'specify the search condition for rows returned by the query'

- 쿼리에서 반환된 행에 대한 `특정 검색 조건` 을 지정

```sql
SELECT 컬럼1, 컬럼2, ... FROM 테이블명 WHERE 조건;
```

<br />

### **SELECT DISTINCT** 💭

> 'remove duplicate rows in the result set'

- 조회 결과에서 `중복 행을 제거`
- DISTINCT 절은 SELECT 키워드 바로 뒤에 작성해야 함

```sql
SELECT DISTINCT 컬럼 FROM 테이블명;
```
