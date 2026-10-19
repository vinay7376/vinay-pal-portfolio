@echo off
title Vinay Pal Full-Stack Portfolio
echo ===================================================
echo   Vinay Pal - Full-Stack MERN Portfolio Launch
echo ===================================================
echo.
echo [1/3] Checking MongoDB service...
sc query MongoDB | find "RUNNING" >nul
if %errorlevel% equ 0 (
    echo   - MongoDB is RUNNING on localhost:27017.
) else (
    echo   - Note: MongoDB service not running. Starting local service or using fallback...
    net start MongoDB >nul 2>&1
)

echo.
echo [2/3] Opening Portfolio in Browser...
start "" "http://127.0.0.1:5173/"

echo.
echo [3/3] Launching Express Server (Port 5051) and Vite Client (Port 5173)...
echo   - Backend Health: http://localhost:5051/api/health
echo   - Frontend: http://127.0.0.1:5173/
echo.
npm run dev
