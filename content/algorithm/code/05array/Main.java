
class Array {
    // 1) 数组的插入、删除、按照下标随机访问操作；
    // 2）数组中的数据是int类型的；
    public int data[];
    // 定义数组长度
    public int n;

    // 定义数组的实际个数
    public int count;

    Array(int capacity) {
        // 初始化数组
        this.data = new int[capacity];
        // 数组长度
        this.n = capacity;
        // 元素个数
        this.count = 0;
    }

    public int find() {
        return 0;

    }

    public boolean insert(int x, int value) {
        if (n == count) {
            System.out.println("没有位置可以插入的数据");
            return false;
        }
        // 如果count还没满，那么就可以插入数据到数组中
        // 位置不合法
        if (x < 0 || x > count) {
            System.out.println("位置不合法");
            return false;
        }
        // 位置合法 其他元素后移
        for (int i = count; i > x; i--) {
            data[i] = data[i - 1];
        }
        data[x] = value;
        ++count;
        return true;
    }

    public boolean delete() {
        return false;
    }

    public void printAll() {
        for (int i = 0; i < count; ++i) {
            System.out.print(data[i] + " ");
        }
        System.out.println();
    }

}

public class Main {
    public static void main(String[] args) {
        Array array = new Array(5);
        array.printAll();
        array.insert(0, 3);
        array.insert(0, 4);
        array.insert(1, 5);
        array.insert(3, 9);
        array.insert(3, 10);
        array.insert(3, 11);
        array.printAll();
    }
}