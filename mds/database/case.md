# [DB] CASE 📝

## **CASE** 💭

- 특정 상황에서 `데이터를 변환하여 활용`할 수 있음
- **ELSE를 생략하는 경우 NULL값이 지정됨**

```sql
CASE
	WHEN 조건식 THEN 식
	WHEN 조건식 THEN 식
	ELSE 식
END
```

```sql
SELECT id, gender
FROM healthcare
LIMIT 5;


-- 성별1(남자), 2(여자) 💡
SELECT
	id,
	CASE
		WHEN gender = 1 THEN '남자'
		WHEN gender = 2 THEN '여자'
	END AS 성별
FROM healthcare
LIMIT 5;


-- 흡연 💡
SELECT DISTINCT smoking
FROM healthcare;

SELECT
	id,
	smoking,
	CASE
		WHEN smoking = 1 THEN '비흡연자'
		WHEN smoking = 2 THEN '흡연자'
		WHEN smoking = 3 THEN '헤비스모커'
		ELSE '무응답'
	END
FROM healthcare
LIMIT 50;


-- 나이에 따라서 구분하기 💡
SELECT
	first_name,
	last_name,
	CASE
		WHEN age <= 18 THEN '청소년'
		WHEN age <= 40 THEN '청년'
		WHEN age <= 90 THEN '중장년'
		ELSE '노년'
 END
FROM users
LIMIT 10;
```

<br />

---

# [DB] 서브쿼리 📝

## **서브쿼리** 💭

- **서브 쿼리는 특정한 값을 메인 쿼리에 반환하여 활용하는 것**
- 실제 테이블에 없는 기준을 이용한 검색이 가능함
- 서브 쿼리는 `소괄호로 감싸서 사용`하며, `메인 쿼리의 칼럼을 모두 사용`할 수 있음
- 메인 쿼리는 서브 쿼리의 칼럼을 이용할 수 있음

<br />

### **단일행 서브쿼리**

- 서브쿼리의 결과가 0 또는 1개인 경우
- `단일행 비교 연산자와 함께 사용 (=, <, <=, >=, >, <>)`

```sql
-- users에서 가장 나이가 작은 사람의 수는? 💭
SELECT age, count(*) FROM users GROUP BY age ORDER BY age LIMIT 1;
-- 가장 작은 나이
SELECT min(age) FROM users;
-- 가장 작은 나이의 수
SELECT count(*) FROM users WHERE age = 15;
-- 단일행 서브쿼리 💡
SELECT count(*) FROM users WHERE age = (SELECT min(age) FROM users);


-- user에서 평균 계좌 잔고가 높은 사람의 수는? 💭
SELECT count(*) FROM users WHERE balance > (SELECT avg(balance) FROM users);


-- users에서 유은정과 같은 지역에 사는 사람의 수는? 💭
SELECT count(*) FROM users WHERE country = (SELECT country FROM users WHERE last_name = '유' AND first_name = '은정');


-- 전체 인원과 평균 연봉, 평균 나이를 출력하세요. 💭
SELECT count(*), avg(balance), avg(age) FROM users;


-- users에서 총인원과 평균연봉을 보여줘 💭
SELECT
	(SELECT count(*) FROM users) AS 총인원,
	(SELECT avg(balance) FROM users) AS 평균연봉;


-- users의 연봉을 모두 평균연봉으로 바꿔줘 💭
UPDATE users
SET balance = (SELECT avg(balance) FROM users);
```

<br />

### **다중행 서브쿼리**

- 서브쿼리 결과가 2개 이상인 경우
- `다중행 비교 연산자와 함께 사용 (IN, EXISTS 등)`

```sql
SELECT
	country
FROM users
WHERE last_name = '이' AND first_name = '은정';


-- 유은정과 같은 지역에 사는 사람의 수는? 💭
SELECT
	count(*)
FROM users
WHERE country IN (SELECT country FROM users WHERE last_name = '유' AND first_name = '은정');


-- 특정 성씨에서 가장 어린 사람들의 이름과 나이는? 💭
SELECT
	last_name,
	first_name,
	age
FROM users
WHERE (last_name, age) IN (
  SELECT
  	last_name,
  	min(age)
  FROM users
  GROUP BY last_name)
ORDER BY last_name;
```

<br />

### **다중컬럼 서브쿼리**

```sql
-- ID 조회
SELECT ArtistId
FROM artists
WHERE Name = 'AC/DC';

-- 서브쿼리
SELECT *
FROM albums
WHERE ArtistId = (
  SELECT ArtistId
  FROM artists
  WHERE Name = 'Queen');
```
