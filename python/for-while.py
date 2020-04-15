#!/usr/bin/env python
# coding:utf-8
# 循环语句

# while
n = 100
a = 0
b = 1

# 0--100 总和
while b <= n:
    a += b
    b += 1

print "1 到 %d 的总和为：%d" % (n,a)


# 死循环 True
while False:
    num = int(input("输入一个数字为"))
    print "输入的数字为%d" % num
else: 
    print 'else'


# for 循环
lists = [ 1, 2, 3, 4 ]
for i in lists:
    if i > 1:
        print i
        break
    print i
else: print 'no for'

# range 自动生成数字数列
# for i in range(5):
#     print (i)
# for i in range(5,9):
#     print(i)
# for i in range(1,9,2):
#     print(i)


# pass
while False:
    # pass
    print('err')