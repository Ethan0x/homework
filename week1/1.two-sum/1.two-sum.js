// O(n)
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (map.has(target - v)) {
            const index = map.get(target - v)
            return [i, index]
        }
        map.set(v, i)
    }
    return [null, null];
};

// O(n^2)
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [null, null];
}

// O(nlogn) 
var twoSum = function (nums, target) {
    // sort
    // BS
}


