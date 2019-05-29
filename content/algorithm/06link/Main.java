
/***
 * 判断一个字符串是否是回文
 * 
 * 链表 链表中是int 类型
 * 
 * 
 */
// 单链表
class SinglyLinkedList {
    // 单链表的头
    private Node header = null;

    SinglyLinkedList() {
        // insertToHead(-1);
    }

    // 通过值查找数据
    public Node findByValue(int value) {
        Node q = header;
        while (q.data != value) {
            q = q.next;
        }
        return q;
    }

    // 通过位置查找
    public Node findByIndex(int index) {
        Node q = header;
        int i = 0;
        while (q.next != null && index != i) {
            q = q.next;
            i++;
        }
        return q;
    }

    // 向头部插入数据值
    public void insertToHead(int value) {
        Node newNode = new Node(value, null);
        insertToHead(newNode);
    }

    // 向头部插入数据 节点
    public void insertToHead(Node newNode) {
        if (header == null) {
            header = newNode;
        } else {
            newNode.next = header;
            header = newNode;
        }
    }
    // 向特定的数据后插入数据

    public void insertAfter(Node p, int value) {
        Node newNode = new Node(value, null);
        insertAfter(p, newNode);
    }

    public void insertAfter(Node p, Node newNode) {
        newNode.next = p;
        p.next = newNode;

    }
    // insertBefore
    // deleteByNode
    // deleteByValue

    // 插入数据
    public void insertTail(int value) {
        Node newNode = new Node(value, null);
        if (header != null) {
            // hander 已经有数据
            Node q = header;
            while (q.next != null) {
                q = q.next;
            }
            q.next = newNode;
        } else {
            header = newNode;
        }
    }

    // 打印
    public void printAll() {
        Node p = header;
        while (p != null) {
            System.out.println("p.data is " + p.data);
            p = p.next;
        }
    }

    // 链表翻转 就地翻转 需要一个空
    // prev 是保持不变的是第一个几点 next 就是pcur
    public void inverseLinkList() {
        Node dummy = new Node(-1, null);
        dummy.next = header;
        Node prev = dummy.next;
        Node pCur = prev.next;

        while (pCur != null) {
            prev.next = pCur.next;
            pCur.next = dummy.next;
            dummy.next = pCur;
            pCur = prev.next;
        }
        header = dummy.next;
    }

    public static class Node {
        private int data;
        // 不是很懂
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

class Main {
    // 将字符串倒置 后逐一进行比较
    public static void Huiwen(String str) {
        String copyStr = new StringBuffer(str).reverse().toString();
        int count = 0;

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == copyStr.charAt(i)) {
                count++;
            }
        }
        if (count == str.length()) {
            System.out.print("回文\r\n");
        } else {
            System.out.print("不是回文\r\n");
        }
    }

    public static void main(String[] args) {
        SinglyLinkedList link = new SinglyLinkedList();
        int data[] = { 1, 2, 3 };
        link.insertToHead(8);

        for (int i = 0; i < data.length; i++) {
            link.insertTail(data[i]);
        }
        link.inverseLinkList();
        // System.out.println(link.findByValue(5));
        // System.out.println((link.findByIndex(6)));
        link.printAll();
    }
}