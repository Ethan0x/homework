func climbStairs(n int) int {
	if n <= 2 {
		return n
	}

	f1, f2, f3 := 1, 2, 3
	for i := 3; i <= n+1; i++ {
		f3 = f2 + f1
		f1 = f2
		f2 = f3
	}
	return f3
}

func climbStairs(n int) int {
	if n <= 2 {
		return n
	}

	dp := make([]int, n+1)
	dp[1] = 1
	dp[2] = 2
	for i := 3; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}

	return dp[n]
}
