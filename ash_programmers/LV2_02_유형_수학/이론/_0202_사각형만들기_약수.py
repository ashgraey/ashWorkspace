"""
[문제]
    사각형의 넓이만 알고있다고 할때, 가로와 세로의 수를 모두 구하시오. 단 길이는 0보다큰 양의 정수이다. 
[설명]
    예) 넓이 4 라고하면 1 4 , 2 2 , 4 1 
    이와 같이 3가지이다.
    이는 넓이의 약수와 같다. 
"""
num = 4

a = 1
while a <= num:
    if num % a == 0:
        print("가로 : " , a , ", 세로 : " , num // a)
    a += 1





