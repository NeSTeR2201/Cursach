REPO_URL=https://github.com/NeSTeR2201/Cursach.git
BRANCH="main"
COMMIT_MESSAGE="Auto-commit: $(date + '%Y-%m-%d %H')"

git add .

git commit -m "$COMMIT_MESSAGE"

git push origin $BRANCH

if [ $? -eq 0 ]; then
    echo "Изменения внесены в репозиторий!"
else 
    echo "Ошибка при изменении!"
f1