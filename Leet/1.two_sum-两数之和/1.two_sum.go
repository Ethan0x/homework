package main

import "fmt"

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

//func twoSum2(nums []int, target int) []int {
//	hm := map[int]int{}
//	for i := 0; i < len(nums); i++ {
//		v := nums[i]
//		if idx, ok := hm[target-v]; ok {
//			return []int{idx, i}
//		}
//		hm[v] = i
//	}
//	return nil
//}

func twoSum2(nums []int, target int) []int {
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

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9

	result := twoSum2(nums, target)
	if len(result) > 0 {
		fmt.Printf("nums[%d] = %d\n", result[1], result[0])
	} else {
		fmt.Println("Can't found target in array nums")
	}

}
