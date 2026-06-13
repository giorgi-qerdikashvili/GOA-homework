# https://www.codewars.com/kata/5663f5305102699bad000056/train/python
# def mxdiflg(a1, a2):
#     if a1 == [] or a2 == []:
#         return -1
#     l1 = []
#     for i in a1:
#         for e in a2:
#             l1.append(abs(len(i) - len(e)))
#     return max(l1)
# https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/python
# # i cant do this one so i wont waste time on it#############
# https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd
# def mygcd(a, b):
#     while b != 0:
#         a, b = b, a % b
#     return a
# https://www.codewars.com/kata/58daa7617332e59593000006/train/python
# def find_longest(arr):
#     mx = arr[0]
#     for i in arr:
#         if len(str(i)) > len(str(mx)):
#             mx = i
#     return mx