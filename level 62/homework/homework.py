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
# https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python
# def create_phone_number(n):
#     return '(' +str(n[0]) + str(n[1]) + str(n[2]) + ') ' + str(n[3]) + str(n[4]) + str(n[5]) +'-'+ str(n[6])+str(n[7])+str(n[8])+str(n[9])