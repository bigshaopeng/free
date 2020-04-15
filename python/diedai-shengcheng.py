#!/usr/bin/env python
# coding:utf-8
# 迭代器与生成器
lists = [1,2,3,4,5]
it=iter(lists)
print next(it)
print next(it)
for i in it:
    print 'for'
    print i