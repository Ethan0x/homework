# Go map

## Usage
1. 定义map
```go
/* 使用 make 函数 */
map_variable := make(map[KeyType]ValueType, initialCapacity)
```
> initialCapacity 是可选的参数，用于指定 Map 的初始容量。Map 的容量是指 Map 中可以保存的键值对的数量。 
> 当 Map 中的键值对数量达到容量时，Map 会自动扩容。
> 如果不指定 initialCapacity，Go 语言会根据实际情况选择一个合适的值。

2. map常用方法
```go
// 创建一个空的 Map
m := make(map[string]int)

// 创建一个初始容量为 10 的 Map
m := make(map[string]int, 10)

// 使用字面量创建 Map
m := map[string]int{
    "apple": 1,
    "banana": 2,
    "orange": 3,
}

// 获取键值对
v1 := m["apple"]
v2, ok := m["pear"]  // 如果键不存在，ok 的值为 false，v2 的值为该类型的零值

// 修改键值对
m["apple"] = 5

// 获取 Map 的长度
len := len(m)

// 遍历 Map
for k, v := range m {
    fmt.Printf("key=%s, value=%d\n", k, v)
}

// 删除键值对
delete(m, "banana")
```

