     #profile
username = input("enter username: ")
password = input("Enter password: ")
Balance_gel = 100
Balance_eur = 100
Balance_usd = 100
# 1 usd = 2.69 gel
# 1 usd = 0.86 eur
# 1 gel = 0.32 eur
#password და username
if password == "1234" and username == "dachi":
    print("Password and username is correct")
    question = 4
    while True :
          question = input("What do you want to do? ")
          if question == "log off":
              break
         #log off
                                               # deposit
         
          if question == "deposit":
                    valute = input("in witch valute are u depositing in (usd, gel, eur)? ")
                    money = int(input("How much money do you want to deposit in gel(TYPE NUMBERS ONLY)? "))
                    if valute == " gel":
                         Balance_gel = Balance_gel + money
                         print("Deposit successful! Your balance is:", Balance_gel)
                    elif valute == "usd":
                         money = money * 2.69
                         Balance_gel = Balance_gel + money
                         print("Deposit successful! Your balance is:", Balance_gel)

                    elif valute == "eur":
                         money = money * 3.15
                         Balance_gel = Balance_gel + money
                         print("Deposit successful! Your balance is:", Balance_gel)

                    elif valute not in ["gel", "usd", "eur"]:     
                         print("Please input (usd, gel or eur)")
          if question == "pay":
              where = input("Which value do you want to pay (usd, gel, eur)? ")
              payment = int(input("How much money do you want to pay? "))
              if where == "gel":
                   if payment <= Balance_gel:
                        Balance_gel = Balance_gel - payment
                        print("Payment successful! Your balance is:", Balance_gel)
                   else:
                        print("Payment failed, not enough GEL")
              elif where == "usd":
                   payment = payment * 2.69
                   if payment <= Balance_gel:
                        Balance_gel = Balance_gel - payment
                        print("Payment successful! Your balance is:", Balance_gel)
                   else:
                        print("Payment failed, not enough GEL")

              elif where == "eur":
                   payment = payment * 3.15
                   if payment <= Balance_gel:
                        Balance_gel = Balance_gel - payment
                        print("Payment successful! Your balance is:", Balance_gel)
                   else:
                         print("Payment failed, not enough GEL")
              elif where not in ["gel", "usd", "eur"]:
                   print("Please input (usd, gel or eur)")
                        
                             #conversion

          if question == "conversion":
              what = input("what do you want to convert? ")
              where = input("where do you want to convert? (usd, gel, eur)")
              money = int(input("how much money do you want to convert ?"))

              if what == "gel":
                   if Balance_gel >= money:
                        if where == "gel":
                              print(Balance_gel)
                        if where == "usd":
                              Balance_gel = Balance_gel - money
                              money = money * 0.37
                              Balance_usd = Balance_usd + money
                              print("conversion succsesful your usd is ", Balance_usd ,)
                              print("your gel balance is ", Balance_gel)
                        if where == "eur":
                              Balance_gel = Balance_gel - money
                              money = money * 0.32
                              Balance_eur = Balance_eur + money
                              print("conversion succsesful your eur is ", Balance_eur ,)
                              print("your gel balance is ", Balance_gel)
                        elif where not in ["gel", "usd", "eur"]:     
                              print("Please input (usd, gel or eur)")
                   else: print("not enough gel!")

              if what == "usd":
                    if Balance_usd >= money:
                        if where == "usd":
                              print(Balance_usd)
                        if where == "gel":
                              Balance_usd = Balance_usd - money
                              money = money * 2.69
                              Balance_gel = Balance_gel + money
                              print("conversion succsesful your gel is ", Balance_gel ,)
                              print("your usd balance is ", Balance_usd)
                        if where == "eur":
                              Balance_usd = Balance_usd - money
                              money = money * 1.17
                              Balance_eur = Balance_eur + money
                              print("conversion succsesful your eur is ", Balance_eur ,)
                              print("your usd balance is ", Balance_usd)
                        elif where not in ["gel", "usd", "eur"]:     
                              print("Please input (usd, gel or eur)")

                    else: print("not enough usd!")

              if what == "eur":
                        if Balance_eur >= money:
                              if where == "eur":
                                   print(Balance_eur)
                              if where == "gel":
                                   Balance_eur = Balance_eur - money
                                   money = money * 0.32
                                   Balance_gel = Balance_gel + money
                                   print("conversion succsesful your gel is", Balance_gel ,)
                                   print("your eur balance is ", Balance_eur)
                              if where == "usd":
                                   Balance_usd = Balance_usd - money
                                   money = money * 0.86
                                   Balance_eur = Balance_eur + money
                                   print("conversion succsesful your usd is ", Balance_usd ,)
                                   print("your eur balance is ", Balance_eur) 
                              elif where not in ["gel", "usd", "eur"]:     
                                   print("Please input (usd, gel or eur)")     
                        else: print("not enough eur!")
              elif what not in ["gel", "usd", "eur"]:     
                         print("Please input (usd, gel or eur)")
          elif question not in ["deposit", "pay", "conversion", "log off"]:     
                              print("Please input (Deposit, pay, conversion or log off)")
else :
     print("Password or username is incorrect, Try again!")