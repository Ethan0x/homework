// 归并
// 时间复杂度：O(NlogN)     144ms      53.13%
// 空间复杂度：O(N)         49.4MB     18.75%
const sortArray: IPropsWithLimit = (nums: number[], left = 0, right = nums.length - 1) => {
    if (left >= right) return nums
    const mid = (left + right) >> 1

    sortArray(nums, left, mid)
    sortArray(nums, mid + 1, right)

    let i = left
    let j = mid + 1
    let index = 0
    const arr = new Array(right - left + 1)

    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) arr[index++] = nums[i++]
        else arr[index++] = nums[j++]
    }

    while (i <= mid) arr[index++] = nums[i++]
    while (j <= right) arr[index++] = nums[j++]
    for (let k = 0; k < arr.length; k++) {
        nums[left + k] = arr[k]
    }
    return nums
}

// 快速
// 时间复杂度：O(NlogN)     148ms      50%
// 空间复杂度：O(logN)      45.6MB     46.88%
const sortArray: IPropsWithLimit = (nums: number[], left = 0, right = nums.length - 1) => {
    if (left >= right) return nums
    let i = left
    let j = right - 1
    while (i <= j) {
        if (nums[i] > nums[right]) {
            ;[nums[i], nums[j]] = [nums[j], nums[i]]
            j--
        } else {
            i++
        }
    }
    j++;
    [nums[j], nums[right]] = [nums[right], nums[j]]
    sortArray(nums, left, j - 1)
    sortArray(nums, j + 1, right)
    return nums
}

// 堆
// 时间复杂度：O(NlogN)      148 ms     52.5%
// 空间复杂度：O(logN)       45.1 MB    45%
const sortArray: IProps = nums => {
    heapify(nums)
    for (let i = nums.length - 1; i > 0; i--) {
        swap(nums, i, 0)
        rebuildHeap(nums, 0, i - 1)
    }

    // 数组转成最大堆
    function heapify(nums: number[]) {
        for (let i = 1; i < nums.length; i++) {
            let parent = (i - 1) >> 1
            let child = i
            while (child > 0 && nums[child] > nums[parent]) {
                swap(nums, parent, child)
                child = parent
                parent = (parent - 1) >> 1
            }
        }
    }

    function rebuildHeap(nums: number[], parent: number, last: number) {
        const left = 2 * parent + 1
        const right = 2 * parent + 2
        let maxIndex = left
        if (right <= last && nums[right] > nums[left]) {
            maxIndex = right
        }

        if (maxIndex <= last && nums[maxIndex] > nums[parent]) {
            swap(nums, maxIndex, parent)
            rebuildHeap(nums, maxIndex, last)
        }
    }
    return nums
}