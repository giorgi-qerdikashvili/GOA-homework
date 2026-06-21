# https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/python
# def triangle(row):
#     while len(row)>1:
#         last = row[0]
#         l1 = []
#         for i in range(1,len(row)):
#             print(last,row[i])
#             if last == 'R':
#                 if row[i] == 'B':
#                     l1.append('G')
#                     last = 'B'
#                 elif row[i] == 'G':
#                     l1.append('B')
#                     last = 'G'
#                 elif row[i] == 'R':
#                     l1.append('R')
#             elif last == 'G':
#                 if row[i] == 'R':
#                     l1.append('B')
#                     last = 'R'
#                 elif row[i] == 'B':
#                     l1.append('R')
#                     last = 'B'
#                 elif row[i] == 'G':
#                     l1.append('G')
#             elif last == 'B':
#                 if row[i] == 'G':
#                     l1.append('R')
#                     last = 'G'
#                 elif row[i] == 'R':
#                     l1.append('G')
#                     last = 'R'
#                 elif row[i] == 'B':
#                     l1.append('B')
#         row = l1
#         print('switch',row)
#     return row[0]

# https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/python
# def to_binary(n):
#     return int(bin(n)[2:])
# https://www.codewars.com/kata/551f37452ff852b7bd000139/train/python
# def add_binary(a,b):
#     s = bin(b + a)
#     return s[2:]
# https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/python
# def row_sum_odd_numbers(n):
#     return n**3