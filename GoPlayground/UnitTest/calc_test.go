package main

import (
	"fmt"
	"testing"
)

/*
1. 测试用例名称一般命名为 Test 加上待测试的方法名。
2. 测试用的参数有且只有一个，在这里是 t *testing.T。
3. 基准测试(benchmark)的参数是 *testing.B，TestMain 的参数是 *testing.M 类型。
4. t.Error/t.Errorf，与t.Fatal/t.Fatalf的区别，前者遇错不停，还会继续执行其他的测试用例，后者遇错即停
*/

func setup() {
	fmt.Println("Before all tests")
}

func teardown() {
	fmt.Println("After all tests")
}
func TestAdd(t *testing.T) {
	if ans := Add(1, 2); ans != 3 {
		t.Errorf("Add func test err, expect 3 but got %d ", ans)
	}
}

func TestMul(t *testing.T) {
	cases := []struct {
		Name         string
		A, B, Expect int
	}{{"pos", 2, 3, 6},
		{"neg", 2, -3, -6},
		{"zero", 2, 0, 0},
	}

	for _, c := range cases {
		t.Run(c.Name, func(t *testing.T) {
			if ans := Mul(c.A, c.B); ans != c.Expect {
				t.Fatalf("%d * %d expected %d, but %d got", c.A, c.B, c.Expect, ans)
			}
		})
	}
}

func TestAll(t *testing.T) {
	setup()
	TestAdd(t)
	TestMul(t)
	teardown()
}
