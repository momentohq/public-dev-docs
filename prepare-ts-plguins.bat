@echo off
SETLOCAL ENABLEEXTENSIONS
SETLOCAL ENABLEDELAYEDEXPANSION

REM Navigate to the plugins/example-code-snippets directory
pushd plugins\example-code-snippets

REM Install npm packages and build
npm ci
npm run build

REM Return to the original directory
popd
