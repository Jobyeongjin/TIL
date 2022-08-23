# [DB] PK (Primary Key), FK (Foreign Key)

## **PRIMARY KEY**

```sql
CREATE TABLE 테이블 (
...
CONSTRAINT 제약_조건_이름 PRIMARY KEY 컬럼
);
```

- 테이블을 생성할 때 정의한다.
- `각 행을 고유하게 식별하는 역할`을 담당한다.
- `테이블당 하나만` 정의가 가능하다.
- 저정된 컬럼에는 `중복된 값이나 NULL값이 입력될 수 없다. `
- 고유 인덱스가 자동으로 생성된다.

<br />

## **FOREIGN KEY**

```sql
CREATE TABLE 테이블(
...
CONSTRAINT 제약_조건_이름 FOREIGN KEY 컬럼
REFERENCES 참조할테이블(컬럼)
[ON DELETE CASCADE | ON DELETE SET NULL]
);
```

- 테이블을 생성할 때 정의한다.
- `FK가 정의된 테이블이 자식 테이블`이다.
- 참조되는 테이블을 부모 테이블이라고 한다.
  - 부모 테이블은 미리 생성되어 있어야 한다.
  - 부모 테이블의 참조되는 컬럼에 존재하는 값만을 입력할 수 있다.
  - 부모 테이블은 FK로 인해 삭제가 불가능하다.
- 데이터 타입이 반드시 일치해야 한다.
