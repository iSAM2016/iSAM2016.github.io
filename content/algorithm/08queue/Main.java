class ArreyQueue {
    // 需要连个指针 一个head 指针 一个tail 指针
    private Strig[] items;
    private int n = 0; // 数组的长度划分
    private int tail = 0; // 入队指针
    private int haad = 0; // 出队指针

    public ArreyQueue(int capacity) {
        items = new String(capacity);
        n = capacity;
    }

    // 入队
    public boolean enqueue(String item) {
        if (tail == n) {
            return false;
        }
        items[tail] = item;
        ++tail;
        return true;
    }

    // 出队
    public boolean dequeue(String item) {
        if (head == tail) {
            return false;
        }
        String ret = items[haad];
        ++haad;
        return ret;
    }

}