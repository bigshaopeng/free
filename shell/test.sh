#!/bin/bash
# test 

# 比较
a=10
b=20
c=$[a+b]
d=`expr $a + $b`

if test $a -ne $b
then 
echo "ok test"
else
echo "err test"
fi


# file
# -e exist 存在
# -r read 可读
# -w write 可写
# -e 存在且可执行
# -s 存在且有字符
# -d directory 存在且为目录
# -f file 存在且为普通文件
# -c 存在且为字符型特殊文件
# -b 存在且为块特殊文件则为真

# 失败
# if test -e ./list
# then echo "ok -e"

# if ""
# then
# elif
# then
# else
# fi