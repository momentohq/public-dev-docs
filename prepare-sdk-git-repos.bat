@echo off
SETLOCAL ENABLEEXTENSIONS
SETLOCAL ENABLEDELAYEDEXPANSION

REM Navigate to the plugins/example-code-snippets directory
pushd plugins\example-code-snippets

REM Run the npm command
npm run prepare-git-repos

REM Return to the original directory
popd
