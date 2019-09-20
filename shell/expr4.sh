#!/bin/bash
# 逻辑运算符

a=10
b=20

# &&
if [[ $a -lt $b && $a -le 10 ]]
then echo 'ok &&'
fi

# ||
if [[ $a -le 10 || $a -ge 9  ]]
then echo 'ok ||'
else echo 'ok else'
fi
