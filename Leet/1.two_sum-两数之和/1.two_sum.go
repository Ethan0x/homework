// O(n^2)
func twoSum(nums []int, target int) []int {
	var result = make([]int, 2)
	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				result[0], result[1] = i, j
			}
		}
	}
	return result
}

// O(n)
func twoSum(nums []int, target int) []int {
	hm := map[int]int{}
	for i := 0; i < len(nums); i++ {
		v := nums[i]
		if idx, ok := hm[target-v]; ok {
			return []int{idx, i}
		}
		hm[v] = i
	}
	return nil
}