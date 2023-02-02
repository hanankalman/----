# siblings = 1
# age = 49

# print (type(siblings))
# print (age+10)
# print (age-10)


# first_name = input("enter first name:")
# last_name = input("enter last name:")
# age = input("enter your age:")
# hight = input("enter your hight:")

# print (first_name)
# print (last_name)
# print (int(age)+10)
# print (int(age)-10)
# print (hight)

# num_input = input ("enter a number:")
# if (num_input.isdigit()):
#     print (int(num_input)**2)
# else:
#     print ("you did not enter a number")


# num_input = input ("enter a three digit number:")
# if (num_input.isdigit()):
#     n = int (num_input)
# else:
#     print ("you did not enter a number")

# num_sum = n%10
# for i in range (2):
#     n//=10
#     temp_num=n%10
#     num_sum+=temp_num
# else:
#     print ("finished")

# print (num_sum)

import random
rand_num = random.randint (1,10)
user_num = input ("guess a number between 1 to 10: ")
if rand_num == user_num:
    print ("you guessed wright")
else:
    print (int(rand_num)-int(user_num))
print ("the number was: ", rand_num)
