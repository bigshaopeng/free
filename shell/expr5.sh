#!/bin/bash
# 字符串运算符

a="abc"
b="dbe"

# = 检测两个字符串是否相等
if [ $a = 'abc' ]
then echo 'ok ='
else echo 'error ='
fi

# != 检测两个字符串是否不相等
if [ $a != $b ]
then echo 'ok !='
fi

# -z 检测字符串长度是否 为0
if [ -z '' ]
then echo 'ok -z'
else echo 'error -z'
fi

# -n 检测字符串长度是否 不为0
if [ -n $a ]
then echo 'ok -n'
fi

# $ 检测字符串是否 不为空
if [ $a ]
then echo 'ok $'
else echo 'error $'
fi