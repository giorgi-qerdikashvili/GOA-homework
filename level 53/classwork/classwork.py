# https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/python
# def remove_url_anchor(url):
#     fin = ''
#     for i in url:
#         if i != '#':
#             fin += i
#         else:
#             break
#     return fin
# https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/python
# def determine_time(arr):
#     h1 = 0
#     m1 = 0
#     s1 = 0
#     for i in arr:
#         print(i)
#         h,m,s = i.split(':')
#         h = int(h)
#         m = int(m)
#         s = int(s)
#         h1 += h
#         m1 += m
#         s1 += s
#     print(h1,m1,s1)
#     if s1 >= 60:
#         while s1 >= 60:
#             m1 += 1
#             s1 -= 60
#     if m1 >= 60:
#         while m1 >=60:
#             h1 += 1
#             m1 -= 60
#     print(h1,m1,s1)
#     if h1 > 24:
#         return False
#     elif h1 == 24 and m1 == 0 and s1 == 0:
#         return True
#     elif h1 < 24:
#         return True
#     return False
