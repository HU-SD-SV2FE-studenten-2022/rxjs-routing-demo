@REM see: https://vitejs.dev/guide/static-deploy.html

@REM Build project using npm
call npm install
call npm run build

@REM Navigate to output directory
cd dist

@REM Copy index.html to 404.html
@REM to fix routing via URLs
call xcopy index.html 404.html*

@REM Bypass Jekyll processing in GitHub
echo > .nojekyll

@REM Initialize git and commit for deployment
call git init
call git checkout -B ghpages
call git add -A
call git commit -m "Deploy"

@REM Push deployment main branch 
@REM to gh-pages branch of our source repository
@REM call git push -f git@github.com:<USERNAME>/<REPO>.git main:ghpages