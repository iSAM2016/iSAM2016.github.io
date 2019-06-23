class Main {
    // 当 current 小于等于index 的时候就出现相同
    // 交换位置
    public static int[] tamp(int[] array, int index) {
        int current = array[index];
        if (current == index) {
            return tamp(array, index + 1);
        } else {
            // 交换位置
            array[index] = array[current];
            array[current] = current;
            return tamp(array, index);
            // System.out.println(current);

        }
    }

    public static void main(String[] args) {
        // int[] array = new int[] { 2, 3, 1, 0, 2, 5 };
        int[] array = new int[] { 2, 3, 1, 0, 4, 5 };
        System.out.println(tamp(array, 0));
    }
}