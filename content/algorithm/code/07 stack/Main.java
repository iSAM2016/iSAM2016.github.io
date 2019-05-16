/***
 * 基于链表实现的栈
 * 
 */

class StackLink {
    private Node top = null;

    // 进栈
    public void push(int value) {
        Node newNode = new Node(value, null);
        // 判断是否栈空
        if (top == null) {
            top = newNode;
        } else {
            newNode.next = top;
            top = newNode;
        }
    }

    /**
     * 我用-1表示栈中没有数据。
     */
    public int pop() {
        if (top == null)
            return -1;
        int value = top.data;
        top = top.next;
        return value;
    }

    public void printAll() {
        Node p = top;
        while (p != null) {
            System.out.print(p.data + " ");
            p = p.next;
        }
        System.out.println();
    }

    private static class Node {
        private int data;
        private Node next;

        public Node(int data, Node next) {
            this.data = data;
            this.next = next;
        }

        public int getData() {
            return data;
        }
    }
}

// 基于数组实现的顺序栈
public class ArrayStack {
    private String[] items; // 数组
    private int count; // 栈中元素个数
    private int n; // 栈的大小

    // 初始化数组，申请一个大小为 n 的数组空间
    public ArrayStack(int n) {
        this.items = new String[n];
        this.n = n;
        this.count = 0;
    }

    // 入栈操作
    public boolean push(String item) {
        // 数组空间不够了，直接返回 false，入栈失败。
        if (count == n)
            return false;
        // 将 item 放到下标为 count 的位置，并且 count 加一
        items[count] = item;
        ++count;
        return true;
    }

    // 出栈操作
    public String pop() {
        // 栈为空，则直接返回 null
        if (count == 0)
            return null;
        // 返回下标为 count-1 的数组元素，并且栈中元素个数 count 减一
        String tmp = items[count - 1];
        --count;
        return tmp;
    }
}
