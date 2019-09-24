/* 服务端 
 * 服务器端套接字或监听套接字
 * @Author: isam2016 
 * @Date: 2019-03-23 20:04:34 
 * @Last Modified by: isam2016
 * @Last Modified time: 2019-03-23 20:46:22
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
void error_handling(char *message);

int main(int argc, char *argv[])
{
    int serv_sock;
    int clnt_sock;

    struct sockaddr_in serv_addr;
    struct sockaddr_in clnt_addr;
    socklen_t clnt_addr_size;

    char message[] = "hello world";

    if (argc != 2)
    {
        printf("Usage :%s <port>\n", argv[0]);
        exit(1);
    }

    //  服务器端实现过程中先要创建套接字  但是此时的套接字尚非真正的服务器套接字
    serv_sock = socket(PF_INET, SOCK_STREAM, 0);

    if (serv_sock == -1)
    {
        error_handling('socket() error');
    }
    // 为了完成套接字 地址分配
    memset(&serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;                //指定地址族
    serv_addr.sin_addr.s_addr = htonl(INADDR_ANY); //基于字符串 的IP 地址 初始化
    serv_addr.sin_port = htons(atoi(argv[1]));     // 基于字符串的端口号初始化 htons 字节转换

    //  2. 使用bind 函数分配IP地址 和端口号
    if (bind(serv_sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) == -1)
    {
        error_handling('bind() error');
    }
    //   3 抵用listen  函数进入等待连接请求状态  此时的套接字才是服务器套接字
    if (listen(serv_sock, 5) == -1)
    {
        error_handling('acept() error');
    }

    clnt_addr_size = sizeof(clnt_addr);
    //   调用accept 函数接收请求连接， 从队头取一个请求连接与客户端建立发链接，并且返回创建的套接字文件描述符，
    clnt_sock = accept(serv_sock, (struct sockaddr *)&clnt_addr, &clnt_addr_size);

    if (clnt_sock == -1)
        error_handling("accept() error");
    // 调用write f函数向 客户端传送数据 调用close 函数关闭连接
    write(clnt_sock, message, sizeof(message));
    close(clnt_sock);
    close(serv_sock);
    return 0;
}

void error_handling(char *message)
{
    fputs(message, stderr);
    fputc('\n', stderr);
    exit(1);
}