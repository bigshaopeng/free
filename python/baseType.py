#!/usr/bin/env python
#coding:utf-8
# 基本数据类型

# basetype
# a = 1
# b = 1.2
# c = "cc"
# a, b, c = 1, 2, 3
# a = b = c = 2

# print( a )
# print( b )
# print( c )


"""
# base data type 6/unit
Number    （数字）  -----不可变数据   ---- int float bool complex
String    （字符串） -----不可变数据
List      （列表）  -----可变数据
Tuple     （元组）  -----不可变数据
Set       （集合）  -----可变数据
Dictionary（字典）  -----可变数据

"""


'''
# number --------------bool大写
a, b, c, d = 1, 1.2, True, 1+2j
# print ( type(a), type(b), type(c), type(d) )
# print isinstance (a, bool), type(a)
'''
'''
# boo True = 1, False = 0
e = True + True
# print e
'''
# 删除变量
# del e
# del a, b, c, d



'''
# 数值运算 加+ 减- 乘* 除/ 模% 除法// 乘方**
print 5 / 4 # 除法得到一个浮点型数
print 5 // 4 # 除法得到一个整数 1
print 2 ** 5  # 乘方 32
'''


'''
# -----------  String 字符串  
# 字符串运算符 + * [] [:] in (not in) r/R %

strs = 'abcde' 
# strs = 'ab\ncde' 
# strs = r'ab\ncde' 

print strs # abcde
print strs[0:] # abcde
print strs[0:-1] # abcd
print strs[1:3] # bc
print strs * 2 # abcdeadcde
print strs + 'zsp' # abcdezsp

# \ 或 ... 续行符 a b
print strs[0], \
      strs[1]

'''




'''
# strs = 'ab%sdefg%d'
# print strs % ('c',3)

strs = "abc"\
"def"\
"gh"
strs2 = """zsp\
dsdsds\
%d
"""
print strs
print strs2 % 3

'''

'''
print len("das") 
print "DAs".lower()
print "DAs".upper()
print max("das")
print min("das")
print "strss".replace("s","a")
print "strss".replace("s","a",2) # 最多替换2处或n处
# print find("r", beg=0, end=len("strs"))
'''





'''

# List -----------------列表 列表是python中使用最频繁的数据类型
lists = [ 'aa', 'bb', 'cc', 'dd', 'ee' ]
# lists[0] = '00'
list2 = [ 'ff', 'gg' ]

print lists # [ 'aa', 'bb', 'cc', 'dd', 'ee']
print lists[0:] # [ 'aa', 'bb', 'cc', 'dd', 'ee']
print lists[0:-1] # [ 'aa', 'bb', 'cc', 'dd']
print lists[1:3] # [ 'bb', 'cc']
print lists[0] # 'aa'
print lists * 2 # [ 'aa', 'bb', 'cc', 'dd', 'ee', 'aa', 'bb', 'cc', 'dd', 'ee' ]
print lists + list2  # [ 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg' ]
print lists[0:4:2] # [ 'aa', 'cc', ]  第三个参数设置 步长

# del list2[1]
print list2 # [ 'ff' ]
print len(list2)
print 'ff' in list2
# for x in [1,2,3]: print x
print max(list2) # 返回列表最大值
print list(( 2, 3, 5 )) # 将元组转为列表


print list
'''






'''

# Tuple --------------元组 元组与列表相似，不同之处在于 1.元组里边的元素不能被修改 2.元组写在 () 小括号里(不加小括号也行)，元素之间用逗号隔开
tuples = ( 'aa', 'bb', 'cc', 'dd', 'ee' )
tuple2 = ( 'ff', 'gg' )

tuple3 = () # 空元组
tuple4 = ( 'hh', ) # 一个元素的元组需要最后放逗号

# 元组输出和数组相同
print tuples
print tuples[0]
print tuples[0:]
print tuples[0:-1]
print tuples[1:4]
print tuples * 2
print tuples + tuple2


tuplea = 1,2,3
print tuplea
print len(tuplea)
print 3 in tuplea
print tuplea[-2]
print tuplea[2]
print tuple([2,4,5]) # 将列表转为元组

'''






# Set 集合 基本功能是进行成员关系检测和删除重复元素
# 创建呢集合使用 {} 或 set(), 创建一个空集合必须使用 set()
# set() 元素间用空格隔开，不能用逗号隔开

sets = { 'aa', 'bb', 'cc', 'dd', 'ee' }
insets = set( 'aa' 'bb' 'cc' 'dd' 'ee' )
# print insets
# print sets

set1 = set( 'abcde' )
set2 = set( 'acdfg' )
'''

print set1 - set2 # 差集 ['b', 'e']
print sets - insets # 差集 ['aa', 'cc', 'dd', 'ee', 'bb']
print set1 | set2 # 并集 ['a', 'c', 'b', 'e', 'd', 'g', 'f']
print set1 & set2 # 交集 ['a', 'c', 'd']
print set1 ^ set2 # 交集取反 ['b', 'e', 'g', 'f']
 
'''

# 添加元素
sets.add('ff')
sets.update({1,2}) # 参数是字典，列表，元组

# 删除元素
sets.remove(1)
sets.discard(3) # 参数错误不会报错
sets.pop() # 定义是---随机删除  但实际好像是按a-b-c类似顺序删除
# sets.clear()

print sets
print len(sets)
print 2 in sets
print sets.copy()






'''

# dictionary --------------------(字典) 是python中非常有用的内置数据类型
# 列表是有序的对象集合，字典是无序的对象集合
# 把字典当成 JS Object 使用就行了 吼吼吼

dicts = {}
dicts['a'] = 'aa'
dicts[1] = 11

print dicts
print dicts[1]
print dicts.keys()
print dicts.values()


# del dicts[1]
# dicts.clear()
# del dicts
print dicts
print len(dicts)
print len(dicts.keys())
print type(dicts)

aaa=dicts.copy()
# val=dicts.fromkeys()
print aaa
print 1 in dicts
print dicts.pop(1)
print dicts
'''
