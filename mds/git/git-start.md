# Git

> 깃(Git)은 2005년에 리누스 토르발스에 의해 개발된 `분산 버전관리 시스템`으로, 컴퓨터 파일의 변경사항을 추적하고, 여러 명의 사용자들 간에 파일에 대한 작업을 조율하는데 사용됩니다.

<br />

## 장점

- `인터넷 연결이 되지 않은 곳에서도 개발`을 진행
- 중앙 저장소가 삭제되어도 원상복구 가능
- 개발자가 branch에서 작업 후, merge를 하는 `병렬 개발`이 가능
  - 작업 속도 증가

<br />

![https://github.com/Jobyeongjin/TIL/raw/master/git-start.assets/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-06-15_%EC%98%A4%ED%9B%84_11.00.41.png](https://github.com/Jobyeongjin/TIL/raw/master/git-start.assets/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-06-15_%EC%98%A4%ED%9B%84_11.00.41.png)

## 기본 용어

- **Repository**: 저장소
- **Working Tree**: 작업자의 현재 시점
- **Staging Area**: 커밋을 준비하는 위치
- **Commit**: 변경된 작업 상태를 확인하고 저장소에 저장
- **Head**: 작업중인 Branch를 가리킴
- **Branch**: 가지 또는 분기점
- **Merge**: 다른 Branch의 내용을 현재 Branch에 합치는 작업

<br />

## 기본 명령어

### git init

새로운 repository를 생성할 때 사용

### git add

커밋 이전의 대기 상태(Staging Area)로 전송

### git commit

로컬 저장소에 저장

### git remote

repository 등록

### git push

원격 저장소(Github)에 저장

---

<br />

#### 참조👇

[나무위키](https://namu.wiki/w/Git)

[설치방법](https://steady-coding.tistory.com/275)

[Git Book](https://git-scm.com/book/ko/v2)
