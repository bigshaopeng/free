#!/bin/bash
# printf 输出命令比 echo 更具有移植性

# echo "hello shell"
# printf "hello shell\n"

printf "%-10s %-8s %-4s\n" 姓名 性别 工资
printf "%-10s %-8s %-4.2f\n" 张少 男 10