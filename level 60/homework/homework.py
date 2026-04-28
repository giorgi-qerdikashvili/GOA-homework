# https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python
# def is_valid_walk(walk):
#     x = 0
#     y = 0
#     if len(walk) == 10:
#         for i in walk:
#             if i == 'n':
#                 y += 1
#             elif i == 's':
#                 y -= 1
#             elif i == 'e':
#                 x += 1
#             elif i == 'w':
#                 x -= 1
#         print(x,y)
#         if x == 0 and y == 0:
#             return True
#         else:
#             return False
#     else:
#         return False
# https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python
# def compute_sum(n):
# l1 = []
# for i in range(n+1):
#     l = list(str(i))
#     for e in l:
#         l1.append(int(e))
# return sum(l1)
# https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/python
# def delete_nth(order,max):
#     l1 = []
#     for i in order:
#         if l1.count(i) != max:
#             l1.append(i)
            
#     return l1
# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python
# def digital_root(n):
#     while len(str(n)) != 1:
#         l1 = []
#         for i in str(n):
#             l1.append(int(i))
#         n = sum(l1)
#     return n
# https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/python
# def clean_string(s):
#     l1 = []
#     for i in s:
#         if i == "#" and len(l1) > 0:
#             l1.pop(-1)
#         elif i !='#':
#             l1.append(i)
#     return "".join(l1)