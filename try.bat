@echo off
echo hello
netsh winhttp set advproxy setting-scope=user settings={\"Proxy\":\"127.0.0.1:8080\",\"AutoDetect\":false}
:: This is to show user how it works or remove pause to run seamlessly
pause