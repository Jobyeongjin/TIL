# [Git] 버전 목록 확인하기 - log

---

- git에서 커밋 기록을 보고자 하는 경우 사용

```shell
git log
```



## Git log 명령어들

``` shell
git log -n  ➡️  전체 커밋 중 가장 최근 n개의 파일 확인
git log -p  ➡️  수정된 내용까지 확인
git log --oneline  ➡️  한 줄로 요약
git log --oneline --reverse  ➡️  한 줄로, 오래된 커밋부터 확인
git log --oneline -3  ➡️  한 줄로, 최근 커밋 중 3개만 확인
git log --oneline --graph --all  ➡️ 한 줄로, 그래프 형식으로, 모두 확인
git log HEAD~n  ➡️  HEAD에서 n번째 떨어진 아이부터 확인

```

```shell
git log --author="이름"  ➡️  해당 이름을 가진 작성자의 커밋 확인
git log --before="날짜"  ➡️  지정 날짜 이전의 커밋 확인, 날짜 입력은 "2022-07-10" 이렇게 사용
git log --grep="제목"  ➡️  해당 제목의 단어만으로 확인
git log -S"내용"  ➡️  해당 내용의 단어로 확인
```

