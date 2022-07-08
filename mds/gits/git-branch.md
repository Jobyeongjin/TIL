# [Git] 나뭇가지 역할 - branch

## `branch` 에 관한 모든 것 💭

- **협업을 위해서는 필수사항**
  - 병렬적으로 업무를 진행하기 때문

<br />

> ### 📚 명령어 모음

```
✅
git branch  🔸  현재 레파지토리 안에 브런치 목록 확인
git branch --all  🔸  서버에 있는 모든 브런치 목록 확인
git branch -v 🔸  최신 브런치 확인
git switch(또는 checkout) 브런치이름  🔸  브런치 이동
git checkout -b 브런치이름  🔸  브런치 생성 후 해당 브런치로 이동

📒
git branch -d 브런치이름  🔸  브런치 삭제
git push origin --delete 브런치이름  🔸  서버에 있는 브런치 삭제
git branch 브런치이름  🔸  브런치 생성
git branch --move 브런치이름 새로운이름  🔸  브런치 이름 변경
git push --set-upstream origin  브런치이름  🔸  이름을 바꾼 브런치를 서버로 업데이트

📕
git merge 브런치이름  🔸  브런치 병합
git merge --no-ff 브런치이름  🔸  병합하면서 해당 브런치는 기록을 남기고 싶을 때 사용
git merge --abort  🔸  머지 취소
git branch --merged  🔸  현재 브런치에 머지가 된 브런치 확인
git branch --no-merged  🔸  마스터 브런치에서 파생된 브런치 학인

```
