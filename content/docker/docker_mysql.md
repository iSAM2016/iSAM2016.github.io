# docker 部署 mysql 实现 热备份

> 注意： 创建了镜像不要在镜像中保存业务数据,应该放在宿主机上面,我们需要把 mysql 的数据保存到宿主机上

# 步骤

1. 下载镜像

8 版本待定，可能有点不同

```
docker pull  percona/percona-xtradb-cluster
```

<!-- ```
docker pull  mysql：5.7.23
``` -->

2. 设置数据卷

我们需要把 mysql 数据 同步到主机上,把数据卷映射到 mysql 目录里面,
数据库设置为两节点 需要俩个卷

```
docker volume create  --name NAME
eg:docker volume create  --name s1
eg:docker volume create  --name s2
```

查看 s1

```
$:docker inspect s1

[
    {
        "CreatedAt": "2018-10-18T01:54:14Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/s1/_data",
        "Name": "s1",
        "Options": {},
        "Scope": "local"
    }
]
```

3. 创建内部网络

创建的数据库不要对接 docker 以外的网络，不安全。我们可以划分一个单独的网段，外部无法访问到。我们可以开放端口，让外部访问

创建网段

```
$ docker network create --subnet=172.19.0.0/24 net2
$ docker inspect net2

[
    {
        "Name": "net2",
        "Id": "a857bab2e23feadbc52d3eae0439ffcd965324ef343070112ba10964a78938eb",
        "Created": "2018-10-18T02:08:35.154705908Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.19.0.0/24"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]
```

4. 创建数据库

主节点

```
docker run -d --rm -p  3306:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -v s1:/var/lib/mysql --privileged --name=node1 --net=net2 --ip 172.19.0.2 pxc
```

** 间隔 2 分钟 **

从节点

```
docker run --rm -d -p 3307:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456  -e CLUSTER_JOIN=node1 -v s2:/var/lib/mysql --privileged --name=node2 --net=net2 --ip 172.19.0.3 pxc
```

会自动生成 ID，

- 测试连接

<!-- 然后执行
```
$ docker run --rm  -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123qweasd  --net=net2 --ip 172.19.0.2  mysql:5.7.23
$ (ID)24fd8ac62c89331fb5c664d3c134ea7e1ac129628ad22e89b88d36a26cbd0bd6
```


 原始 docker run --rm -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123qweasd -v s1:/var/lib/mysql --privileged --name=handmysql --net=net2 --ip 172.19.0.2 mysql:5.7.23
$ docker run --rm  -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123qweasd  --net=net2 --ip 172.19.0.2  mysql

执行

```
docker start ID
```

```
``` -->

本地连接

```
mysql -h 127.0.0.1 -P 3306 -u root -p
```

5.  热备份

   冷备份：

   - 是关闭数据库时候的备份，通常做法是数据拷贝

   * 最安全的备份

   热备份

   - 在系统运行状态下进行备份
   - 采用 xtrabckup

   * xtrabckup

   - 全量备份： 备份全部数据，备份时间长

   - 增量备份： 只备份变化的数据

首先创建数据备份卷

```
docker volume create backup
```

将之前的主节点容器删掉，新创建容器

```
docker stop node1
docker rm node1
```

新节点同步到 node2 `CLUSTER_JOIN=node2`

```
docker run -d --rm -p  3306:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -v s1:/var/lib/mysql -v backup:/data --privileged -e CLUSTER_JOIN=node2 --name=node1 --net=net2 --ip 172.19.0.2 pxc
```

在容器中安装 xtrabackup

`root`进入容器

```
docker exec -it --user root  node1 bash
```

进行安装

```
$ apt-get update

$ apt-get install percona-xtrabackup-24

$ innobackupex --user=root --password=abc123456 /data/backup/full   执行备份
```

验证 backup 和/data 是否有数据

- pxc 还原
  还原只有冷还原，为了避免回复过程中的数据同步，我们采用 mysql 还原数据， 然后把之前的节点删除然后在建立 pxc 集群

  。。。。。。。。。

6. 自动创建数据库表

```

```
