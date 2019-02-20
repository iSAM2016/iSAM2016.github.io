# docker cloud

[](https://www.cnblogs.com/kangoroo/p/7994801.html)

[部署私有 Docker Registry](https://www.cnblogs.com/xcloudbiz/articles/5526262.html)
[docker registry push 错误“server gave HTTP response to HTTPS client”](http://www.cnblogs.com/hobinly/p/6110624.html)
[](https://blog.csdn.net/jiaolongdy/article/details/75389167)

[远程连接](https://www.jianshu.com/p/8a67950d4879)

```
docker -H 101.200.123.5(IP):2375(port) ps
```

如果你不想每次都输入-H 参数，那么你可以在客户端机器加上下面的环境变量
`export DOCKER_HOST="tcp://101.200.123.5:2376"`

如果你想连接本地那么改回环境变量即可

`export DOCKER_HOST=""`
