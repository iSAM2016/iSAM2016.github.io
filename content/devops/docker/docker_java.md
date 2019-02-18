# 后端项目

> nohup java -jar shareniu.jar &

## 后台打包形成 java 包

java 包的端口是 8080

## 配置

配置 j1 的数据卷

```
docker volume create j1
```

建立 java 容器

```
docker run -it -d --name ji -v j1:/home/soft --net=host java
```

项目 docker 包应该是配置主机的网络，--net=host

进入 java 容器

```
docker exec -it --user root  ji bash
```

执行 java 包

```
java -jar demo-0.0.1-SNAPSHOT.jar
```

## 冗余节点

创建冗余节点，当一个容器挂掉之后其他的能继续运行，我们要创建更多的 java 容器,穿件两个

1. j2

```
# docker volume create j2
# 创建 jar 包，端口为 8081，上传到 j2
# docker run -it -d --name j2 -v j2:/home/soft --net=host java
# docker exec -it --user root  j2 bash
# java -jar demo-0.0.1-SNAPSHOT.jar
```

2. j3

```
# docker volume create j3
# 创建 jar 包，端口为 8082，上传到 j3
# docker run -it -d --name j3 -v j3:/home/soft --net=host java
# docker exec -it --user root  j3 bash
# java -jar demo-0.0.1-SNAPSHOT.jar
```

## 后台程序的负载均衡

使用 nginx 反向代理服务器

```
# docker pull nginx
```

修改配置文件

```
vi /usr/local/nginx/conf/nginx.conf
```

配置负载均衡

```
#将 docker.ibs-bj.com.cn 分发给主机的服务
upstream docker.ibs-bj.com.cn{
    server 127.0.0.1:8080;
    server 127.0.0.1:8081;
    server 127.0.0.1:8082;
    keepalive 64;
}

server {
    listen 80;
    server_name 127.0.0.1;
    location / {
     # 外网地址
        proxy_pass http://docker.ibs-bj.com.cn;
        index index.html index.htm
    }
}
```

## 启动 nginx 容器

```
docker run -it -d --name n1 -v /home/n1/nginx.conf:/ect/nginx/nginx.conf --net=host --privileged nginx
```

/usr/lib/jvm/java-8-openjdk-amd64
/var/jenkins_home/maven
