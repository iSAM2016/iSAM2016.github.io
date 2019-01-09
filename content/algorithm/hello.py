#!/usr/bin/python
def max(list):
    if len(list) == 2:
        return list[1] if list[1] > list[0] else list[0]
    else:
        return list[0] if list[0] > max(list[1:]) else max(list[1:])


print(max([1, 2, 3, 4]))

