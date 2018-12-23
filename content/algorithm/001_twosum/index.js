/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 这道题给了我们一个数组，还有一个目标数target，让我们找到两个数字，
 * 使其和为target，乍一看就感觉可以用暴力搜索，但是猜到OJ肯定不会允许
 * 用暴力搜索这么简单的方法，于是去试了一下，果然是Time Limit Exceeded，
 * 这个算法的时间复杂度是O(n^2)。那么只能想个O(n)的算法来实现，由于暴力搜
 * 索的方法是遍历所有的两个数字的组合，然后算其和，这样虽然节省了空间，但是
 * 时间复杂度高。一般来说，我们为了提高时间的复杂度，需要用空间来换，这算是
 * 一个trade off吧，我们只想用线性的时间复杂度来解决问题，那么就是说只能遍
 * 历一个数字，那么另一个数字呢，我们可以事先将其存储起来，使用一个HashMap，
 * 来建立数字和其坐标位置之间的映射，我们都知道HashMap是常数级的查找效率，这
 * 样，我们在遍历数组的时候，用target减去遍历到的数字，就是另一个需要的数字了，
 * 直接在HashMap中查找其是否存在即可，注意要判断查找到的数字不是第一个数字，
 */
var twoSum = function(nums, target) {
    let exist = {};
    for (let i = 0; i < nums.length; i++) {
        if (exist[nums[i]] !== void 0) {
            return [exist[nums[i]]];
        } else {
            exist[target - nums[i]] = i;
        }
    }
};

console.log(twoSum([3, 2, 4], 6));
