#！/bin/bash

num1=$1;
num2=$2;

sum=$(($num1 + $num2));
echo $sum;

# $@ $*
x=1;
for param in $@
    do 
        echo "this $x param is $param"
        x=$(($x+1))
     done

## $$
echo "current PID is $$";

find . -name hello.sh &
