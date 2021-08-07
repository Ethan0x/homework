// O(n)
func maxArea(a []int) int {
	area, max, left, right := 0, 0, 0, len(a)-1
	for left < right {
		if a[left] < a[right] {
			area = (right - left) * a[left]
			left++
		} else {
			area = (right - left) * a[right]
			right--
		}

		if max < area {
			max = area
		}
	}
	return max
}