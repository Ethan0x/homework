// O(n)
func moveZeroes(nums []int) {
	if nums == nil || len(nums) == 0 {
		return
	}

	left, right, n := 0, 0, len(nums)
	for right < n {
		if nums[right] != 0 {
			nums[left], nums[right] = nums[right], nums[left]
			left++
		}
		right++
	}
}