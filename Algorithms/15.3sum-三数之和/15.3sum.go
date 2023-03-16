func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	res := [][]int{}

	if len(nums) <= 2 || nums == nil {
		return res
	}

	for i := 0; i < len(nums)-2; i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		left, right := i+1, len(nums)-1

		for left < right {
			n1, n2, n3 := nums[i], nums[left], nums[right]

			if nums[i]+nums[left]+nums[right] == 0 {
				res = append(res, []int{n1, n2, n3})

				// 判断 l < r 且 nums[l] 于 n2 是否相等，如果相等 l++ 向右移动
				for left < right && nums[left] == n2 {
					left++
				}

				// 判断 l < r 且 nums[r] 于 n3 是否相等，如果相等 r-- 向左移动
				for left < right && nums[right] == n3 {
					right--
				}

			} else if n1+n2+n3 < 0 {
				left++
			} else {
				right--
			}
		}
	}
	return res
}