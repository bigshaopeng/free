#!/bin/bash
#echo

# read name
# echo "$name is a name"

echo "ok! \n" # 换行
echo "enter"

echo "ok! \c" # 不换行
echo "enter"

# 将结果定向到文件
echo "is a testss" > a.txt

echo "ok"

# `` 现实命令执行结果
echo `date` > b.txt