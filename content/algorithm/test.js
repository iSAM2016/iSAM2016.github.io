// 广度优先算法
const graph = {}

const personIsSeller = name => name[name.length - 1] === 'm'

graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name) => {
    let serarchQuery = [];
    serarchQuery = serarchQuery.concat(graph[name]);
    const searched = []
    while (serarchQuery.length) {
        const person = serarchQuery.shift();
        if (searched.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                console.log(`${person}is a seller`)
                return false
            }
            serarchQuery = serarchQuery.concat(graph[person])
            searched.push(person)
        }
    }
    return fslse
}
// search('you')

// 内层循环不变式
function insert(array, i, item) {
    let p = i - 1;
    // 换指针进行比较，  
    while (p >= 0 && array[p] > item) {
        array[p + 1] = array[p]
        p--;
    }
    array[p + 1] = item
}
// 插入排序
function insertion_sort(array) {
    // 按顺序取值进行比较
    for (let i = 1; i < array.length; i++) {
        insert(array, i, array[i])
    }
    return array
}
console.log(insertion_sort([7, 8, 0]))

// 冒泡排序 n2
// 他 重复比较相邻的两个元素知道整个数据都没有数字可以在进行比较

function swap(array, i, j) {
    const t = array[j];
    array[i] = array[j];
    array[j] = t;
}

function bubble_sort(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            array[j - 1] > array[j] && swap(array, j - 1, j)
        }
    }
    return array
}
console.log(bubble_sort([7, 8, 0]))

// n log n
// 合并排序(简化： 合并两个有序的数组)
// [](https://www.cnblogs.com/chengxiao/p/6194356.html)
function merge(array, p, q, r) {
    let array1 = array.slice(p, q);
    let array2 = array.slice(q, r);
    array1.push(Number.MAX_SAFE_INTEGER)
    array2.push(Number.MAX_SAFE_INTEGER)
    for (let k = p, i = 0, j = 0; k < r; k++) {
        array[k] = array1[i] < array2[j] ? array1[i++] : array2[j++]
    }
}

function merge_sort(array, p, r) {
    if (r - p < 2) {
        return
    }
    const q = Math.ceil((p + r) / 2);
    merge_sort(array, p, q)
    merge_sort(array, q, r)
    merge(array, p, q, r)
    return array
}
const A = [38, 23, 5, 7, 3, 9, 82, 10]

console.log(merge_sort(A, 0, A.length))