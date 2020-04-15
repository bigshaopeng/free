#!/usr/bin/python
# coding:utf-8
# 运算符

'''

# 逻辑运算符 and | or | not (js的 与&& 或|| 非!)
a=10
b=20
if a and b:
    print a+b
if not True:
    print "not"
elif False: 
    print "else not"
else:
    print "else"
if a or b:
    print "or"

'''




'''

# 成员运算符 in, not in
lists = [ 'aa', 'bb', 'cc', 'dd', 'ee' ]
a='aa'
if a in lists:
    a='cc'
    print 'in'
elif a not in lists: 
    print 'not in'
else:
    print 'err in'

print a

'''






'''
# python 身份运算符 is, is not 
a=20
b=20
if a is not b:
    print 'is'
elif id(a) == id(b):
    print 'id()'
else :
    print "else"
'''




print "abcdefg"[:0] + 'vv'