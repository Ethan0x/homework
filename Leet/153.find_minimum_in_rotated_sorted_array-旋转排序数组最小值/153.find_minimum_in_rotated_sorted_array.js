/**
 * @param {number[]} nums
 * @return {number}
 */
// 【83-153. 寻找旋转排序数组中的最小值】
var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    while(left < right){
        let middle = left + ~~((right - left) / 2);
        if(nums[middle] > nums[right]) left = middle + 1;
        else if(nums[middle] < nums[right]) right = middle;
        else right--;
    }
    return nums[left];
};

// 暴破【不推荐】
function findMin(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < nums[0]){
            return nums[i];
        }
    }
    return nums[0];
}