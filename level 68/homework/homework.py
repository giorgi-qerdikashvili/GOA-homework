# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
# def reverse_words(text):
#     l1 = []
#     word = ''
#     for i in text:
#         if i != ' ':
#             word += i
#         else:
#             l1.append(word[::-1])
#             word = ''
#             l1.append(i)
#     l1.append(word[::-1])
#     return ''.join(l1)
# https://www.codewars.com/kata/5868812b15f0057e05000001/train/python
# def tail_swap(strings):
#     s1 , s2 = strings[0].split(':')
#     s3 , s4 = strings[1].split(':')
#     return [s1 +':'+ s4, s3 +':'+ s2]
# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python
# def is_pangram(st):
#     st = st.lower()
#     for i in 'abcdefghijklmnopqrstuvwxyz':
#         if i not in st:
#             return False
#     return True
# https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python
# def to_camel_case(text):
#     if text:
#         l1 = []
#         word = ''
#         for i in text:
#             if i not in '_-':
#                 word += i
#             else:
#                 l1.append(word)
#                 word = ''
#         l1.append(word)
#         new = l1[0]
#         print(l1,new)
#         for i in range(1,len(l1)):
#             new += l1[i].capitalize()
#         return new
        
#     else:
#         return text
# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python
# def DNA_strand(dna):
#     list(dna)
#     r = ''
#     for i in dna:
#         if i == 'C':
#             r += 'G'
#         elif i == 'G':
#             r += 'C'
#         elif i == 'A':
#             r += 'T'
#         elif i == 'T':
#             r += 'A'
#     return r