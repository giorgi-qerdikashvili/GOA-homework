# https://www.codewars.com/kata/514b92a657cdc65150000006/train/python
# def solution(n):
#     if n < 0:
#         return 0
#     else:
#         all = 0
#         for i in range(n):
#             if i % 3 == 0:
#                 print (i)
#                 all += i
#             elif i % 5 == 0:
#                 print(i)
#                 all +=i
#         return all
# https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/python
# def check_exam(arr1,arr2):
#     score = 0
#     for i in range(4):
#         if arr2[i]:
#             if arr1[i] == arr2[i]:
#                 score += 4
#             else:
#                 score -= 1
#     if score < 0:
#         score = 0
#     return score
# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python
# def high_and_low(n):
#     l1 = []
#     num = ''
#     for i in n:
#         if i != ' ':
#             num += i
#         else:
#             l1.append(int(num))
#             num = ''
#     if num:
#         l1.append(int(num))
#     return str(max(l1)) + ' ' + str(min(l1))
# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python
# def find_short(s):
#     word = s.split()
#     nu = []
#     for i in word:
#         nu.append(len(i))
#     return min(nu)
# https://www.codewars.com/kata/57faefc42b531482d5000123/train/python
# def remove(s):
#     a = list(s)
#     a.reverse()
#     b = ''
#     c = 0
#     for i in a:
#         if i == '!':
#             c += 1
#         else:
#             break
#     b += '!'* c
#     for i in range(c):
#         a.remove('!')
#     print(a)
#     for i in a:
#         if i != '!':
#             b += i
#     return b[::-1]
# https://www.codewars.com/kata/5bb904724c47249b10000131
# def points(games):
#     total = 0
#     for i in games:
#         x, y = i.split(':')
#         print(x,y)
#         x = int(x)
#         y = int(y)
#         if x > y:
#             total += 3
#         elif x == y:
#             total += 1
#     return total
# https://www.codewars.com/kata/6071ef9cbe6ec400228d9531
# def calculator(txt):
#     a = txt.split()
#     if a[1] == '+':
#          return '.' * (len(a[0]) + len(a[2]))
#     elif a[1] == '-':
#          return '.' * (len(a[0]) - len(a[2]))
#     elif a[1] == '//':
#          return '.' * (len(a[0]) // len(a[2]))
#     elif a[1] == '*':
#          return '.' * (len(a[0]) * len(a[2]))