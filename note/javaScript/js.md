#javascript
##### async/await
1. 处理其中的错误
```
async function getData() {
    try{
        const url = '/index.php?m=home&c=login';
        const res = await axios.get('/index.php?m=home&c=login');
        console.log(res.data);
    } catch(err){
        console.log(err);
    }
 
}
getData();
```
2. 处理await 中的并行串行
```
const sleep = (timeout = 2000) => new Promise(resolve => {
  setTimeout(resolve, timeout);
})

async function getData() {
  await sleep(2000);
  const url = '/index.php?m=home&c=login';
  const res = await axios.get('/index.php?m=home&c=login');
  console.log(res.data);
}

const show = async() => {
  console.log('begin');
  const feweekly = await getData();
  const tool = await getData();
}
show();
```
3. promise.all 和await 的使用 
   实现多个异步操作的并行，适合多个请求的

```
const sleep = (timeout = 2000) => new Promise(resolve => {
  setTimeout(resolve, timeout);
})

async function getData() {
  const url = '/index.php?m=home&c=login';
  const res = await axios.get('/index.php?m=home&c=login');
  return res.data.message;
}
async function getDatas() {
  const url = '/index.php?m=home&c=logi';
  const res = await axios.get('/index.php?m=home&c=login');
  return res.data.message;
}

const show = async() => {
  console.log('begin');
  const [feweekly, tool] = await Promise.all([getData(), getDatas()])
  console.log(feweekly);
  console.log(tool);
}
show();

```
4. await 和 for 
```
const fetch = require('node-fetch');
const bluebird = require('bluebird');

async function getZhihuColumn(id) {
  await bluebird.delay(1000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}

const showColumnInfo = async () => {
  console.time('showColumnInfo');

  const names = ['feweekly', 'toolingtips'];
  const promises = names.map(x => getZhihuColumn(x));
  for (const promise of promises) {
    const column = await promise;
    console.log(`Name: ${column.name}`);
    console.log(`Intro: ${column.intro}`);
  }

  console.timeEnd('showColumnInfo');
};

showColumnInfo();
```