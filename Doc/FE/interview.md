


## 前端面试算法

### 数组


#### 简单 - 删除排序数组中的重复项

给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


#### 中等 - 最大子序和

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


### 二叉树

#### 简单- 中序遍历

````
给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
````
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 中等 - 对称二叉树

给定一个二叉树，检查它是否是镜像对称的。
````
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
````

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 中等难度别的


实现一个LRU https://segmentfault.com/a/1190000017555834
https://blog.csdn.net/qq_26440803/article/details/83795122
domain反转www.baidu.com->com.baidu.www
单向链表反转 done
拓扑排序算法 done https://www.cnblogs.com/bigsai/p/11489260.html
螺旋打印数组 done
求二叉树最长路径  https://blog.csdn.net/rekeless/article/details/82663767
二叉树排序 https://www.jianshu.com/p/2db48864c314
数组算法
递归原则 https://www.cnblogs.com/kubidemanong/p/10538799.html
排序与时间复杂度 https://www.cnblogs.com/fnlingnzb-learner/p/9083552.html



## 实践

### 大纲

1. 类继承
2. 原型链
3. 基于原型链继承
4. 闭包
5. 作用域链与this
6. ES6 (锦上添花)
7. 类似箭头函数不创造作用域链等
8. Promise
9. 要解决什么问题
10. Then 的用法
11. then (success, catchError)   .catch() 的区别

### 作用域链


```
var x = 10;

function fn(){
    console.log(x);
}

function show(f){
    var x = 20;
     f() 
}

show(fn);
```

输出 10

https://www.cnblogs.com/gaosirs/p/10579059.html

### this

```
let a = {
	foo: function(){
	    console.log(this)
	},
	bar: () => {
		console.log(this)
	}
}

let foo = a.foo

a.foo()
foo()
a.bar()

```

a.foo() // a object
foo() // window
a.bar() // window

### Promise

#### then (success, catchError)   .catch() 的区别

连续 N 个 promise 调用 p1.then().then().then()，最后放一个 .catch()，这个 .catch() 能捕获任何一个链式调用的错误

而  then (success, catchError) 的 catchError 只能捕获上一个的错误


#### A+ 标准，能否手写个 Promise ?



## CSS

### 大纲

1. Flex
2. Position
3. 盒模型
4. 奇技淫巧？

### Flex

Flex

有几种属性，他们实现的效果

justify-contents:
align-items:


### Position

有几种值，分别的效果是什么？

absolute
生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

fixed
生成固定定位的元素，相对于浏览器窗口进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

relative
生成相对定位的元素，相对于其正常位置进行定位。

因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。

static	默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
sticky
粘性定位，该定位基于用户滚动的位置。

它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。

注意: Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。

inherit	规定应该从父元素继承 position 属性的值。
initial	设置该属性为默认值，详情查看 CSS initial 关键字。

## 网络

### 大纲

1. 状态码
2. 304
3. 缓存（锦上添花）
4. 跨域和同源策略

## React

### 大纲

1. 生命周期
2. 状态管理


## 安全


### 大纲


1. XSS
2. CSRF

## Evet Loop

https://segmentfault.com/a/1190000016278115?utm_source=tag-newest

Node:

Macrotask

Timer(setTimeout,setInterval) -> I/O(readFile) -> Check (setImmedia) -> close (socket.close) ->Timer ->....

(浏览器: requestAnimationFrame UI rendering) 每个阶段都会执行microtask

Microstask

nextTickQueue(process.nextTick) -> Other Queue(Promise,Object.observer, MutationObserver)

浏览器: macrotask microtask 只有两个按队列走

## 前端面试题集锦

https://juejin.im/post/5df1e312f265da33d039d06d#heading-37


## 别的


### 数据库


畅谈，了解就了解，不了解也没思路


1. 索引规则
2. 海量数据处理
3. redolog
4. undolog


### 做过的项目，最难搞定的项目


### 一个抢购的前端页面


1. 安全，不可预期
2. 时间，准确
3. 事件绑定（同1）

### 前端面试参考：
1. https://github.com/paddingme/Front-end-Web-Development-Interview-Question
2. https://github.com/lgwebdream/FE-Interview








