#!/usr/bin/env python
# coding:utf-8
# 输入输出

a = 'hello word'
print str (a) # hello word
print repr (a) # 'hello word'

# rjust() ----右对齐，左边填充空格
# ljust() ----左对齐，右边填充空格
# center()----居中对齐
print '22'.rjust(5)

print "22".zfill(5)
print "22.9".zfill(5)