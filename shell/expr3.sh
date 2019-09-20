#!/bin/bash
# 布尔运算符

a=10
b=20

# !
if [ $a != $b ]
then echo 'ok !'
else echo 'ok else !'
fi

# -o
if [ $a -eq $b -o $a -lt $b ]
then echo 'ok -o'
fi

# -a

if [ $a -gt 9 -a $a -ge 10 ]
then echo 'ok -a'
fi