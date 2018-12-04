# jenkins

什么是 CI：Continuous Integration，也就是持续集成

什么是 CD：Continuous Delivery 和 Continuous Deployment，也就是持续交付、持续部署

持续集成：就是开发提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，测试过程可以确定新代码和原有代码能否正确地集成在一起，如果测试过程有问题，那么将返回代码给开发部门

持续交付：在持续集成的基础上，将集成后的代码部署到更贴近于真实的生产环境中。在贴近真实的生成环境中，可以提高数据支撑，且进一步做测试，如果进一步测试没有问题，那么可以部署到线上的生成环境中

持续部署：是在持续交付的基础上，把部署到生产环境的过程自动化，实现部署无需人工参与，如何在部署的过程中出现问题，将立即回滚代码

- 基本步骤

  - [实战笔记：Jenkins 打造强大的前端自动化工作流](https://juejin.im/post/5ad1980e6fb9a028c42ea1be)

  - [使用 Generic Webhook Trigger 插件实现 Jenkins+WebHooks（码云）持续集成--指定具体项目和分支进行集成](https://blog.csdn.net/xlgen157387/article/details/76216351)

  - [Jenkins 自动构建教程二 ---私有 Git 仓库帐号配置](https://www.jianshu.com/p/22cc65462e8b)

* 版本回滚

  - [使用 jenkins 进行项目的自动构建部署](https://www.jianshu.com/p/dceaa1c7bb49)
  - [Jenkins 版本回滚](https://www.longs.cc/743.html)

* 节点控制
  - [Jenkins 的分布式构建及部署——节点](https://my.oschina.net/lienson/blog/1548903)
  - [Jenkins 节点配置](https://blog.csdn.net/ouyanggengcheng/article/details/76093861)
  - [Jenkins 创建 slave 节点----Linux 平台](https://blog.csdn.net/jiang1986829/article/details/51141731)
  - []()

脚本备份

```
case $deploy_env in
    deploy)
        echo "deploy:$deploy_env"
        npm config set registry http://registry.npm.taobao.org/
        cd dist
        pwd && ls
        tar -zcvf dist.tar.gz *
        ;;
    rollback)
        echo "rollback:$deploy_env"
        echo "version:$version"
        cd dist
        pwd && ls
        rm -rf *
        cp -R ${JENKINS_HOME}/jobs/testTask/builds/${version}/archive/dist/* .
        pwd && ls
        ;;
     *)
     exit
        ;;
esac
```

```
java -jar agent.jar -jnlpUrl http://build.ibs-bj.com.cn/computer/isam2016_server_node/slave-agent.jnlp -secret bcb046e5efe8b237d53619dc4d0b5817a0eac29ab009955b13af2a68149c3828 -workDir "/home/wwwroot/test.isam2016.top"
```
