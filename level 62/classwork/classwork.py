# https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/python
# def mygcd(a, b):
#     while b != 0:
#         a, b = b, a % b
#     return a
# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python
# def number(l):
#     if not l:
#         return l
#     l2 = []
#     for i in range(len(l)):
#         l2.append(str(i+1) + ': ' + l[i])
#     return l2
# https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/python
# def reverse_number(n):
#     l1 = list(str(n))
#     nu = ''
#     if len(str(n)) == 1:
#         return n
#     if l1[0] in '0123456789':
#         l1.reverse()
#         for i in l1:
#             if i != '0':
#                 nu += i
#         return int(nu)
#     else:
#         l1.pop(0)
#         print(l1)
#         l1.reverse()
#         for i in l1:
#             if i != '0':
#                 nu += i
#         return -int(nu)