@echo off
title Air Powervision India - Frontend (Port 3000)
cd /d "%~dp0"

echo ========================================================
echo   Air Powervision India - Frontend Website
echo   Port: http://localhost:3000
echo ========================================================
echo.
if exist ".next\cache" (
    rmdir /s /q ".next\cache" 2>nul
)

where pnpm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    if not exist "node_modules" (
        echo Installing dependencies with pnpm...
        pnpm install
    )
    pnpm dev
) else (
    if not exist "node_modules" (
        echo Installing dependencies with npm...
        npm install
    )
    npm run dev
)
pause
