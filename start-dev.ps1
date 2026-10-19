Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Vinay Pal - Full-Stack MERN Portfolio Launch" -ForegroundColor White
Write-Host "===================================================" -ForegroundColor Cyan

# 1. Check MongoDB
$mongoService = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue
if ($mongoService -and $mongoService.Status -eq "Running") {
    Write-Host "[✓] MongoDB service is RUNNING on localhost:27017" -ForegroundColor Green
} else {
    Write-Host "[!] MongoDB service is not currently running. Attempting start..." -ForegroundColor Yellow
    Start-Service -Name "MongoDB" -ErrorAction SilentlyContinue
}

# 2. Open Browser
Write-Host "[*] Opening browser at http://127.0.0.1:5173/..." -ForegroundColor Gray
Start-Process "http://127.0.0.1:5173/"

# 3. Launch concurrently
Write-Host "[*] Starting Express API (Port 5051) & Vite Client (Port 5173)..." -ForegroundColor Cyan
npm run dev
