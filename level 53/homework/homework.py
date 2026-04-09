# https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python
# def maskify(cc):
#     un = ''
#     if len(cc)>=5:
#         un = cc[-4:]
#         return (len(cc)-4)*'#'+un
#     else:
#         return cc
# https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/python
# def no_boring_zeros(n):
#     if n != 0:
#         return int(str(n).rstrip('0'))
#     else:
#         return n
# https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/python
# def warn_the_sheep(queue):
#     queue.reverse()
#     nu = 0
#     for i in queue:
#         if nu == 0 and i == "wolf":
#             return 'Pls go away and stop eating my sheep'
#         elif i == 'sheep':
#             nu += 1
#         elif i == "wolf":
#             return 'Oi! Sheep number ' + str(nu) + '! You are about to be eaten by a wolf!'
# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python
# def number(l):
#     if not l:
#         return l
#     l2 = []
#     for i in range(len(l)):
#         l2.append(str(i+1) + ': ' + l[i])
#     return l2
# https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/python
# def distinct(seq):
#     l1 = []
#     for i in seq:
#         if i not in l1:
#             l1.append(i)
#     return l1
# https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/python
# def human_years_cat_years_dog_years(h):
#     c = 0
#     d = 0
#     for i in range(1,h+1):
#         if i == 1:
#             c += 15
#             d += 15
#         elif i == 2:
#             c += 9
#             d += 9
#         else:
#             c += 4
#             d += 5
#     return [h,c,d]
# https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/python
# def pig_it(text):
#     l1 =[]
#     word=''
#     for i in text:
#         if i != ' ':
#             word += i
#         else:
#             l1.append(word)
#             word = ''
#     if word:
#         l1.append(word)
#     l2 = []
#     for i in l1:
#         if i not in '!?':
#             l2.append(i[1:] + i[0] + 'ay')
#         else:
#             l2.append(i)
#     fin = ''
#     for i in l2:
#         fin += i + " "
#     return fin[:-1]