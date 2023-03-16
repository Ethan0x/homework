/**
 * @param {number} num
 * @return {number}
 */
// 【91-670. 最大交换】
var maximumSwap = function(num) {
    let nums = (""+num).split("")
    let max = min = nums.length - 1
    let wait = -1
    if(nums.length == 1) return num
    for(let i = nums.length - 2; i >= 0; i--){
        let curMax = wait != -1 ? nums[wait] : nums[max] //当前用来比较的数字
        if(nums[i] < curMax){
            min = i 
            if(wait != -1){//min的左边存在一个比max大的值，且该值左边还有一个较小的值，可以进行移位，因此重新调整max和wait
                max = wait
                wait = -1
            }
        }
        if(nums[i] > curMax){
            wait = i
        }
    }
    if(max !== min){
        let tmp = nums[min]
        nums[min] = nums[max]
        nums[max] = tmp
    }
    return +nums.join("")
};