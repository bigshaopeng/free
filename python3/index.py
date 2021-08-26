# m = 0
# while m < 4:
#     print(m)
#     m += 1
# else:
#     print(m)
from maxss import maxss

# a = dict()
# a[0] = 1
# a['0'] = '0'
# print(a)

# s = set()
# s.add(0)
# print(s)

# l = [0]
# l.insert(2, 2)
# l[0] = 0
# print(l, l[0], l[1])

l = [{'a': 'aa', 'b': 'bb'}, {'c': 'cc'}]
k_set = set(l[0].keys())  # 转集合--set {a, b}
k_tuple = tuple(l[0].keys())  # 转元组--tuple (a, b)
k_list = list(l[0].keys())  # 转列表--list [a, b]
print(k_set)
print(k_tuple)
print(k_list)
# for i in range(len(l)):
# print(l[i].keys())

# a, b = 4, 3
# c = maxss(a, b)
# print(c)
