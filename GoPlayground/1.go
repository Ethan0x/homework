package main

import (
	"fmt"
	"math"
	"os"
	"strconv"
)

func main1() {
	var (
		firstName, lastName, age = "John", "Tim", 32
	)
	fmt.Println(firstName, lastName, age)

	const (
		a = iota + 1
		_
		// comments

		b
		c
		d
	)
	fmt.Println(a, b, c, d)

	var integer8 int8 = 127
	var integer16 int16 = 32767
	var integer32 int32 = 2147483647
	var integer64 int64 = 9223372036854775807
	fmt.Println(integer8, integer16, integer32, integer64)

}

func main2() {
	var integer32 int = 2147483648
	//var fushu uint = -10 //cannot use -10 (untyped int constant) as uint value in variable declaration (overflows)
	fmt.Println(integer32)

	var maxInteger int64 = math.MaxInt64
	var maxFloat float64 = math.MaxFloat64
	fmt.Println(maxInteger, maxFloat)
}

func main3() {
	i, _ := strconv.Atoi("-42")
	j := strconv.Itoa(384)
	fmt.Println(i, j)
}

func main4() {
	fmt.Println("Sum is :", sum(os.Args[1], os.Args[2]))
}

func sum(number1 string, number2 string) int {
	int1, _ := strconv.Atoi(number1)
	int2, _ := strconv.Atoi(number2)
	return int1 + int2
}

func main() {
	firstName := "John"
	updateNameValue(firstName)
	fmt.Println("fistName value:", firstName)
	updateNamePoint(&firstName)
	fmt.Println("fistName point:", firstName)

}

func updateNameValue(name string) {
	name = "son"
}

func updateNamePoint(name *string) {
	*name = "dad"
}
