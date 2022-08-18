# [DB] 기본 함수와 연산 📝

## **기본 함수와 연산 💭**

<br />

### **문자열 함수**

- `SUBSTR(문자열, start, length)` : 문자열 자르기
  - 시작 인덱스는 1, 마지막 인덱스는 -1
- `TRIM(문자열), LTRIM(문자열), RTRIM(문자열)` : 문자열 공백 제거
- `LENGTH(문자열)` : 문자열 길이
- `REPLACE (문자열, 패턴, 변경값)` : 패텅에 일치하는 부분을 변경
- `UPPER(문자열), LOWER(문자열)` : 대소문자 변경
- `(문자열) || (문자열)` : 문자열 합치기

```sql
SELECT * FROM users LIMIT 1;

-- 문자열 합치기 / || 💡
SELECT
	last_name||first_name AS 이름,
	age,
	country,
	phone,
	balance
FROM users
LIMIT 5;


-- 문자열 길이 / LENGTH 💡
SELECT LENGTH(first_name), first_name FROM users LIMIT 5;


-- 문자열 변경 / REPLACE 💡
SELECT REPLACE(phone, '-', ''), phone FROM users LIMIT 5;
```

<br />

### **숫자 함수**

- `ABS(숫자)` : 절대값
- `SIGN(숫자)` : 부호 (양수 1, 음수 -1, 0 0)
- `MOD(숫자1, 숫자2)` : 나눈 나머지
- `CEIL(숫자), FLOOR(숫자), ROUND(숫자, 자리)` : 올림, 내림, 반올림
- `POWER(숫자1, 숫자2)` : 숫자1의 숫자2 제곱
- `SQRT(숫자)` : 제곱근

```sql
-- 나눈 나머지 💡
SELECT MOD(5, 2) FROM users LIMIT 1;


-- 올림, 내림, 반올림 💡
SELECT CEIL(3.14), FLOOR(3.14), ROUND(3.14) FROM users LIMIT 1;


-- 9의 제곱근 💡
SELECT SQRT(9) FROM users LIMIT 1;


-- 9^2 💡
SELECT POWER(9, 2) FROM users LIMIT 1;
```

<br />

### **산술 연산자**

- `+, -, *, /` 와 같은 산술 연산자와 우선 순위를 지정하는 () 기호를 연산에 활용할 수 있음

```sql
SELECT age+1 FROM users;
```

<br />

---

# [DB] GROUP BY 📝

## **짚고 넘어가기 💭**

- **Aggregate function (집계함수)**
  - **값 집합에 대한 계산을 수행하고 단일 값을 반환**
    - 여러 행으로부터 하나의 결과값을 반환하는 함수
  - **SELECT 구문에서만 사용됨**
  - 예시
    - 테이블 전체 행 수를 구하는 COUNT(\*)
    - Age 컬럼 전체 평균 값을 구하는 AVG(age)

<br />

## **ALIAS 💭**

- **칼럼명이나 테이블명이 너무 길거나 다른 명칭으로 확인하고 싶을 때는 ALIAS를 활용**
- AS를 생략하여 공백으로 표현할 수 있음
- 별칭에 공백, 특수문자 등이 있는 경우 따옴표로 묶어서 표기

```sql
SELECT last_name 성 FROM users;
SELECT last_name AS 성 FROM users;
SELECT last_name AS 성 FROM users WHERE 성='김';
```

<br />

## **GROUP BY 💭**

- 'make a set of summary rows from a set of rows'
- SELECT 문의 optional 절
- 행 집합에서 요약 행 집합을 만듦
- 선택된 행 그룹을 하나 이상의 열 값으로 요약 행으로 만듦
- 문장에 WHERE 절이 포함된 경우 반드시 WHERE 절 뒤에 작성해야 함

```sql
SELECT * FROM 테이블명 GROUP BY 컬럼1, 컬럼2;
```

- 지정된 컴럼의 값이 같은 행들로 묶음
- **집계함수와 활용하였을 때 의미가 있음**
- 그룹화된 각각의 **그룹이 하나의 집합으로 집계함수의 인수로 넘겨짐**

```sql
-- 성별 갯수💡
SELECT last_name, COUNT(*) FROM users GROUP BY last_name;


-- GROUP BY에서 활용하는 컬럼을 제외하고는 집계함수를 쓰는 게 좋다. age를 보면 첫번째 인자 값만 출력되기 때문에 아무런 의미가 없다! 🚨
SELECT last_name, age, COUNT(*) FROM users GROUP BY last_name;
>>>
SELECT last_name, AVG(age), COUNT(*) FROM users GROUP BY last_name; 👍


-- GROUP에 조건을 넣고 싶다면 💭
-- <오류 발생> Parse error : misuse of aggregate: COUNT() ... 🚨
SELECT last_name, COUNT(last_name)
FROM users
WHERE COUNT(last_name) > 100
GROUP BY last_name;

-- 조건에 따른 GROUP을 사용하려면 HAVING을 써야 한다! 💡
SELECT last_name, COUNT(last_name)
FROM users
GROUP BY last_name
HAVING COUNT(last_name) > 100;
```

<br />

## **SELECT 문장 실행 순서**

- `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY`
  - FROM : 테이블을 대상으로
  - WHERE : 제약조건에 맞춰서 뽑아서
  - GROUP BY : 그룹화한다.
  - HAVING : 그룹 중에 조건과 맞는 것만을
  - SELECT : 조회하여
  - ORDER BY : 정렬하고
  - LIMIT / OFFSET : 특정 위치의 값을 가져온다

<br />

---

# [DB] ALTER TABLE 📝

## **ALTER TABLE**

1. `테이블 이름 변경`

2. `새로운 column 추가`

3. `column 이름 수정`

4. `Column 삭제`

```sql
-- 테이블 이름 변경 💡
ALTER TABLE table_name RENAME TO new_name;


-- 새로운 컬럼 추가 💡
ALTER TABLE table_name ADD COLUMN column_definition;


-- 컬럼 이름 수정 💡
ALTER TABLE table_name RENAME TO current_name TO new_name;


-- 컬럼 삭제 💡
ALTER TABLE table_name DROP COLUMN column_name;
```
