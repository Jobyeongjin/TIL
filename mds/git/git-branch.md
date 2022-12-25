# Branch

> 병렬적으로 업무를 진행하기 위해서는 필수사항

<br>

## 명령어

```bash
git branch
- 현재 레포 안에 브런치 목록 확인

git branch --all
- 서버에 있는 모든 브런치 목록 확인

git branch -v
- 최신 브런치 확인

git switch(or checkout) 브런치이름
- 브런치 이동

git checkout -b 브런치이름
- 브런치 생성 후 해당 브런치로 이동

git branch -d 브런치이름
- 브런치 삭제

git push origin --delete 브런치이름
- 서버에 있는 브런치 삭제

git branch 브런치 이름
- 브런치 생성

git branch --move 브런치이름 새로운이름
- 브런치 이름 변경

git push --set-upstream origin 브런치이름
- 이름을 바꾼 브런치를 서버로 업데이트

git merge 브런치이름
- 브런치 병합

git merge --no-ff 브런치이름
- 병합하면서 해당 브런치 기록 남기기

git merge --abort
- 머지 취소

git branch --merged
- 현재 브런치에 머지가 된 브런치 확인

git branch --no-merged
- 마스터 브런치에서 파생된 브런치 확인
```

---

<br>

#### 참조👇

[브랜치란 무엇인가](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
