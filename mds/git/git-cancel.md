# [Git] 깃 취소하기

<br />

> ## **add**

- 파일이 Staging Area 에 있는 경우

```sh
# 상태 확인을 먼저 하는 습관을 🚨
git status

# 특정 파일만
git reset HEAD 파일명

# 모든 파일을 취소하고 싶다면
git reset HEAD
```

<br />

> ## **commit**

- 완료한 커밋을 취소할 때

```sh
# 커밋 목록 확인
git log

# 최근 커밋 취소
git reset HEAD^

# 마지막 n개의 커밋 취소
git reset HEAD~n

# 최근 커밋을 취소하고 파일을 워킹 디렉토리에서 삭제
git reset --hard HEAD^

# 원격 저장소의 마지막 커밋 상태로 돌리기
git reset --haed HEAD
```

<br />

> ### **커밋 메세지를 변경하고 싶다면 💭**

```sh
git commit --amend
```

<br />

> ## **push**

- 자신의 로컬의 내용을 `강제로 덮어쓰는` 것이기 때문에 사용시 주의 🚨
  - 되돌린 커밋 이후 모든 커밋이 사라짐 주의
  - 협업시 동기화 문제가 발생할 수 있으므로 `팀원과 상의 후 진행`할 것

```sh
# 가장 최근 커밋 취소하고
git reset HEAD^

# 원하는 시점으로 워킹 디렉토리를 되돌린 다음
git reset HEAD@n
또는
git reset 커밋아이디

# 다시 커밋
git commit -m '메세지 입력'

# 원격 저장소에 강제로 푸시 🚨
git push origin 브런치이름 -f
또는
git push origin +브런치이름

# 마무리는 파일 삭제
```

- 파일 삭제가 궁금하다면 [클릭](./git-delete.md)
