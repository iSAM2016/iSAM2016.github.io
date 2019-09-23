/*
 * tree
 * 今天我讲了二叉树高度的理论分析方法，给出了粗略的数量级。如何...

极客时间版权所有: https://time.geekbang.org/column/article/68334
 */

class Main {
    private Node tree;

    public Node find(int data) {
        Node p = tree;
        while (p != null) {
            if (data < p.data)
                p = p.left;
            else if (data > p.data)
                p = p.right;
            else
                return p;
        }
        return null;
    }

    // 增加树的节点（）
    public void insert(int data) {
        if (tree == null) {
            Node tree = new Node(data);
        }
        Node p = tree;
        while (p != null) {
            // 左边
            if (data < p.data) {
                if (p.right == null) {
                    p.right = new Node(data);
                    return;
                }
                p = p.right;
            } else {
                // 右边
                if (p.left == null) {
                    p.left = new Node(data);
                    return;
                }
                p = p.left;
            }
        }
    }

    public void delete(int data) {
        Node p = tree; // 初始化根节点
        Node pp = null; // 记录父节点

        while (p.data != data && p != null) {
            pp = p;
            if (data > p.data) {
                p = p.right;
            } else {
                p = p.left;
            }
        }
        if (p == null) {
            return;
        }
        // 如果要删除的节点 带两个节点
        // 第三种情况是，如果要删除的节点有两个子节点，
        // 这就比较复杂了。我们需要找到这个节点的右子树中的最小节点，
        // 把它替换到要删除的节点上。然后再删除掉这个最小节点，因为
        // 最小节点肯定没有左子节点（如果有左子结点，那就不是最小节点了），
        // 所以，我们可以应用上面两条规则来删除这个最小节点。比如图中的删除节点 18
        if (p.left != null && p.right != null) {
            Node minP = p.right;
            Node minPP = p; // minPP表示minP的父节点
            while (minP.left != null) {
                minPP = minP;
                minP = minP.left;
            }
            p.data = minP.data; // 将minP的数据替换到p中
            p = minP; // 下面就变成了删除minP了
            pp = minPP;// 下面是更新 PP 了
        }
        // 删除节点是叶子节点或者仅有一个子节点
        Node child; // p 的子节点
        if (p.left != null) {
            child = p.left;
        } else if (p.right != null) {
            child = p.right;
        } else {
            // 叶子节点
            child = null;
        }
        // 删除的是根节点
        if (pp == null) {
            tree = child;
        } else if (pp.left == p) {
            pp.left = child;
        } else {
            pp.right = child;
        }

    }

    // 查找最小值
    public Node findMin() {
        Node p = tree;
        while (p.left != null) {
            p = p.left;
        }
        return p;
    }

    // 查找最大值
    public Node findMax() {
        Node p = tree;
        while (p.right != null) {
            p = p.right;
        }
        return p;
    }

    // 创造节点
    public static class Node {
        private int data;
        private Node left;
        private Node right;

        public Node(int data) {
            this.data = data;
        }
    }

    public static void main(String[] args) {

    }
}