#!/usr/bin/env python
# coding:utf-8
# def 函数

def def1 (): print 1 

def def2 (w,h): return w + h
r2 = def2(1,2)
print r2


# *以元组输出参数 **以字典输出参数
def def3 (v, **a):
    print v
    print a
def3(2, a=4, b=5)

def def4 (v, *a):
    print v
    print a
def4(2, 4, 5)



# 匿名函数lambda

num = lambda a, b: a + b
aa = num(1,4)
print(aa)