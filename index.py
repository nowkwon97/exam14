# 파이썬에서는 typeof 대신 isinstance() 함수를 사용하여
# 변수의 유형 확인 가능
# 예외를 발생시키기 위해 throw 대신 raise 사용
# 파이썬에서는 Math.floor() 대신 init()함수를 사용하여
# 소수점 이하 제거 가능

# 파이썬에서는 function 대신 def 사용
def example_one(a):
    if not isinstance(a, int):
        raise ValueError('정수를 입력해야 합니다.')

    return a

print(example_one(4))

# 맥북은 파이썬 설치 후 python --version 이 아닌
# python3 --version으로 확인 가능
# 터미널에 실행 할 때도 python3으로 실행하자.