@echo off
set e=%1
set e=%e:~1,-8%
echo %e%
chdir /D %e%
if EXIST realmlist.wtf ( erase realmlist.wtf )
echo set realmlist letswow.ru>>realmlist.wtf
start wow.exe