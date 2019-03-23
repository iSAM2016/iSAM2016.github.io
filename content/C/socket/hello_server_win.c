/* 服务端 
 * 服务器端套接字或监听套接字
 * @Author: isam2016 
 * @Date: 2019-03-23 20:04:34 
 * @Last Modified by: isam2016
 * @Last Modified time: 2019-03-23 20:38:46
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

    // if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0)
    //     ErrorHandling("WSAStartup() error");
    int PE_INET;
    PE_INET = 20;
    //  1.调用docket 套接字
    serv_sock = socket(PE_INET, SOCK_STREAM, 0);

    if (serv_sock == -1)
    {
        error_handling('socket() error');
    }

    memset(&serv_addr, 0, sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    serv_addr.sin_port = htons(atoi(argv[1]));
    //  2. 使用bind 函数分配IP地址 和端口号

    if (bind(serv_sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) == -1)
    {
        error_handling('bind() error');
    }
    //   3 抵用listen 函数转为可接收请求转态
    if (listen(serv_sock, 5) == -1)
    {
        error_handling('acept() error');
    }

    clnt_addr_size = sizeof(clnt_addr);
    //   调用accept 函数接收请求连接
    clnt_sock = accept(serv_sock, (struct sockaddr *)&clnt_addr, &clnt_addr_size);

    if (clnt_sock == -1)
        error_handling("accept() error");

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