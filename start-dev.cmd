@echo off
cd /d "%~dp0"
start "Ars Akasha Next" /min cmd /c "call node_modules\.bin\next.cmd dev --hostname 127.0.0.1 --port 3000 > next-dev.out.log 2> next-dev.err.log"
