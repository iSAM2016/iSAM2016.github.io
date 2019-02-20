#！/bin/bash

num1=1;
num2=2;

sum=($num1 + $num2);
echo $sum;


# # $@ $*
# x=1;
# for param in $@
#     do 
#         echo "this $x param is $param"
#         x=$(($x+1))
#      done

# ## $$
echo "current PID is $$";

# find . -name hello.sh &

# 从命令输出中提取信息，并输出文件
 
# 命令替换会创建一个子shell来运行对应的命令。
# 子shell(subshell)是由运行该脚本的shell 
# 所创建出来的一个独立的子shell(child shell)。
# 正因如此，由该子shell所执行命令是无法 使用脚本
# 中所创建的变量的。 在命令行提示符下使用路径./运行命令的话，
# 也会创建出子shell;要是运行命令的时候 不加入路径，就不会创
# 建子shell。如果你使用的是内建的shell命令，并不会涉及子shell。
# 在命令行提示符下运行脚本时一定要留心!
testing=$(date +%y%m%d)
# ls $pwd  > log.$testing


# 结构化命令
testuser=Chirstine

if grep $testuser /etc/passwd
then 
        echo "it work"
        
fi
echo "ou side"
