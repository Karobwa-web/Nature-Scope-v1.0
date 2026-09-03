@echo off
title Nature Scope Development Server Launcher
echo ========================================================
echo   Starting Nature Scope Platform
echo   - Backend API on http://localhost:5000
echo   - Frontend App on http://localhost:3000
echo ========================================================

:: Start Backend in separate window
start "Nature Scope - Backend API (:5000)" cmd /k "cd /d %~dp0backend && node src/server.js"

:: Start Frontend in separate window
start "Nature Scope - Frontend (:3000)" cmd /k "cd /d %~dp0frontend && npx vite --port 3000"

:: Wait 3 seconds and launch browser
timeout /t 3 /nobreak >nul
start http://localhost:3000

echo.
echo Nature Scope is running!
echo You can close this launcher window (the server windows will stay open).
timeout /t 5 >nul
