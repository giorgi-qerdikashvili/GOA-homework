# https://www.codewars.com/kata/56576f82ab83ee8268000059/train/python
# def spacey(array):
#     l1 = []
#     word = ''
#     for i in array:
#         word += i
#         l1.append(word)
#     return l1
# https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/python
# def cube_odd(arr):
#     l1 = []
#     for i in arr:
#         if type(i) != int:
#             return None
#         else:
#             l1.append(i**3)
#     od = []
#     for e in l1:
#         if e % 2 == 1:
#             od.append(e)
# #     return sum(od)
# https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/python
# def solve(s):
#     return [sum(1 for n in s if n.isupper()), sum(1 for n in s if n.islower()), sum(1 for n in s if n.isdigit()), sum(1 for n in s if not n.isdigit() and not n.isupper() and not n.islower())]
# https://www.codewars.com/kata/563089b9b7be03472d00002b/train/python
# class List:
#     def remove_(self, integer_list, values_list):
#         return [n for n in integer_list if n not in values_list]
# https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/python
# def solution(value):
#     return 'Value is ' + str(100000 + value)[1:]
# 6
# 6
# 6
# 6
# https://www.codewars.com/kata/609eee71109f860006c377d1/train/python
# def last_survivor(letters, coords): 
#     letters = list(letters)
#     for i in coords:
#         letters.pop(i)
#     return ''.join(letters)
# https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/python
# def solve(s):
#     l1 = []
#     f = ''
#     for i in s:
#         if i in 'aeiou':
#             f += i
#         else:
#             l1.append(len(f))
#             f = ''
#     l1.append(len(f))
#     return max(l1)
# https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/python
# def password(st):
#     if len(st) < 8:
#         return False
#     d = 0
#     u = 0
#     l = 0
#     for i in st:
#         if i.isdigit():
#             d = True
#         elif i.isupper():
#             u = True
#         elif i.islower():
#             l = True
#     return d and u and l
# https://www.codewars.com/kata/59b844528bcb7735560000a0/train/python
# def is_nice(arr):
#     if len(arr) >= 1:
        
#         for i in arr:
#             print(i,arr)
#             if i+1 not in arr and i-1 not in arr:
#                 return False
#         return True
#     else:
#         return False