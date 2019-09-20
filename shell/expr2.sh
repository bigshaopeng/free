#!/bin/bash
#关系运算符

 a=10
 b=20
  
# -eq 判断两个值 是否 相等
if [ $a -eq 10 ]
then echo '-eq'
fi

# -ne 检测两个值 是否 不相等
if [ $a -ne $b ]
then echo '-ne'
fi

# -gt 检测两个值 左边的是否大于右边的
if [ $a -gt 9 ]
then echo '-gt'
fi

# -lt 检测两个值 左边的是否小于右边的
if [ $a -lt $b ]
then echo '-lt'
fi

# -ge 检测两个值 左边的是否大于等于右边的
if [ $a -ge 10 ]
then echo '-ge'
fi

# -le 检测两个值 左边的是否小于等于右边的
if [ $a -le 10 ]
then echo '-le'
fi