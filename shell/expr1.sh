#!/bin/bash
# 算术运算符

a=10
b=20

# 30   +
vala=`expr $a + $b`
echo $vala

# -10   -
valb=`expr $a - $b`
echo ${valb}

# 200   *
valc=`expr $a \* ${b}`
echo $valc

# 2    /
vald=`expr $b / $a`
echo $vald

# 0   /
vale=`expr $a / $b`
echo $vale

# 10   %
valf=`expr $a % $b`
echo $valf

# 0   %
valg=`expr $b % $a`
echo $valg

if [ $a != $b ]
then  echo 'ok' 
fi

if [ $a != $b ] 
then $a=$b echo $a
fi