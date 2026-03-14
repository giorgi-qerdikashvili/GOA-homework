# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python
# def get_middle(s):
#     if len(s) % 2 == 0:
#         return (s[(len(s)//2) -1])+(s[len(s)//2])
#     else:
#         return (s[len(s)//2])
# https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python
# def is_anagram(test, original):
#     t = list(test.lower())
#     o = list(original.lower())
#     t.sort()
#     o.sort()
#     if t == o:
#         return True
#     else:
#         return False
# https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/python
# def maskify(cc):
#     un = ''
#     if len(cc)>=5:
#         un = cc[-4:]
#         return (len(cc)-4)*'#'+un
#     else:
#         return cc
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
# https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python
# def create_phone_number(n):
#     return '(' +str(n[0]) + str(n[1]) + str(n[2]) + ') ' + str(n[3]) + str(n[4]) + str(n[5]) +'-'+ str(n[6])+str(n[7])+str(n[8])+str(n[9])
# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python
# def get_count(sentence):
#     count = 0
#     for i in sentence:
#         if i in 'aeiou':
#             count += 1
#     return count