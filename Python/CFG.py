my_numbers = [3,5,-4,8,11,3,2,6]
target_sum = 10
def my_func(my_array,my_target):
    for number in my_array:
        for second_number in my_array:
            if(my_array.index(second_number) != my_array.index(number)):
                if(number + second_number == my_target):
                    return [number,second_number]
    return []


print(my_func(my_numbers,10))
print(my_func(my_numbers,5))