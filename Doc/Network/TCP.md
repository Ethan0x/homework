# 1、什么是IO多路复用
I/O多路复用的本质是使用select,poll或者epoll函数，挂起进程，当一个或者多个I/O事件发生之后，将控制返回给用户进程。以服务器编程为例，传统的多进程(多线程)并发模型，在处理用户连接时都是开启一个新的线程或者进程去处理一个新的连接，而I/O多路复用则可以在一个进程(线程)当中同时监听多个网络I/O事件，也就是多个文件描述符。select、poll 和 epoll 都是 Linux API 提供的 IO 复用方式。

# 2、epool中et和lt的区别与实现原理

LT：水平触发，效率会低于ET触发，尤其在大并发，大流量的情况下。但是LT对代码编写要求比较低，不容易出现问题。LT模式服务编写上的表现是：只要有数据没有被获取，内核就不断通知你，因此不用担心事件丢失的情况。<br>
ET：边缘触发，效率非常高，在并发，大流量的情况下，会比LT少很多epoll的系统调用，因此效率高。但是对编程要求高，需要细致的处理每个请求，否则容易发生丢失事件的情况。

# 3、tcp连接建立的时候3次握手，断开连接的4次握手的具体过程
三次握手 --- 第一次握手是客户端connect连接到server，server accept client的请求之后，向client端发送一个消息，相当于说我都准备好了，你连接上我了，这是第二次握手，第3次握手就是client向server发送的，就是对第二次握手消息的确认。之后client和server就开始通讯了。

四次握手 --- 断开连接的一端发送close请求是第一次握手，另外一端接收到断开连接的请求之后需要对close进行确认，发送一个消息，这是第二次握手，发送了确认消息之后还要向对端发送close消息，要关闭对对端的连接，这是第3次握手，而在最初发送断开连接的一端接收到消息之后，进入到一个很重要的状态time_wait状态，这个状态也是面试官经常问道的问题，最后一次握手是最初发送断开连接的一端接收到消息之后。对消息的确认。

# 4、connect方法会阻塞，请问有什么方法可以避免其长时间阻塞？
最通常的方法最有效的是加定时器；也可以采用非阻塞模式。<br>
或者考虑采用异步传输机制，同步传输与异步传输的主要区别在于同步传输中，如果调用recvfrom后会一致阻塞运行，从而导致调用线程暂停运行；异步传输机制则不然，会立即返回。

# 5、网络中，如果客户端突然掉线或者重启，服务器端怎么样才能立刻知道？
若客户端掉线或者重新启动，服务器端会收到复位信号，每一种tcp/ip得实现不一样，控制机制也不一样。

# 6、在子网210.27.48.21/30种有多少个可用地址？分别是什么？
简: 30表示的是网络号(network number)是30位，剩下2位中11是广播(broadcast)地址，00是multicast地址，只有01和10可以作为host address。<br>
详: 210.27.48.21/30代表的子网的网络号是30位，即网络号是210.27.48.21 & 255.255.255.251=210.27.48.20，此子网的地址空间是2位，即可以有4个地址：210.27.48.20, 210.27.48.21, 210.27.48.22, 210.27.48.23。第一个地址的主机号(host number/id)是0，而主机号0代表的是multicast地址。最后一个地址的最后两位是11，主机号每一位都为1代表的是广播(broadcast)地址。所以只有中间两个地址可以给host使用。其实那个问题本身不准确，广播或multicast地止也是可以使用的地址，所以回答4也应该正确，当然问的人也可能是想要你回答2。我个人觉得最好的回答是一个广播地址，一个multicast地址，2个unicast地址。

# 7、TTL是什么？有什么用处，通常那些工具会用到它？（ping? traceroute? ifconfig? netstat?）
简: TTL是Time To Live，一般是hup count，每经过一个路由就会被减去一，如果它变成0，包会被丢掉。它的主要目的是防止包在有回路的网络上死转，浪费网络资源。ping和traceroute用到它。<br>
详: TTL是Time To Live，目前是hup count，当包每经过一个路由器它就会被减去一，如果它变成0，路由器就会把包丢掉。IP网络往往带有环(loop)，比如子网A和子网B有两个路由器相连，它就是一个loop。TTL的主要目的是防止包在有回路的网络上死转，因为包的TTL最终后变成0而使得此包从网上消失(此时往往路由器会送一个ICMP包回来，traceroute就是根据这个做的)。ping会送包出去，所以里面有它，但是ping不一定非要不可它。traceroute则是完全因为有它才能成的。ifconfig是用来配置网卡的，netstat -rn 是用来列路由表的，所以都用不着它

# 8、路由表示做什么用的？在linux环境中怎么来配置一条默认路由？
简: 路由表是用来决定如何将包从一个子网传送到另一个子网的，换局话说就是用来决定从一个网卡接收到的包应该送的哪一张网卡上的。在Linux上可以用“route add default gw <默认路由器IP>”来配置一条默认路由。<br>
详: 路由表是用来决定如何将包从一个子网传送到另一个子网的，换局话说就是用来决定从一个网卡接收到的包应该送的哪一张网卡上的。路由表的每一行至少有目标网络号、netmask、到这个子网应该使用的网卡。当路由器从一个网卡接收到一个包时，它扫描路由表的每一行，用里面的netmask和包里的目标IP地址做并逻辑运算(&)找出目标网络号，如果此网络号和这一行里的网络号相同就将这条路由保留下来做为备用路由，如果已经有备用路由了就在这两条路由里将网络号最长的留下来，另一条丢掉，如此接着扫描下一行直到结束。如果扫描结束任没有找到任何路由，就用默认路由。确定路由后，直接将包送到对应的网卡上去。在具体的实现中，路由表可能包含更多的信息为选路由算法的细节所用。题外话：路由算法其实效率很差，而且不scalable，解决办法是使用IP交换机，比如MPLS。<br>
在Linux上可以用“route add default gw <默认路由器IP>”来配置一条默认路由。


# 9、在网络中有两台主机A和B，并通过路由器和其他交换设备连接起来，已经确认物理连接正确无误，怎么来测试这两台机器是否连通？如果不通，怎么来判断故障点？怎么排除故障？
测试这两台机器是否连通：从一台机器ping另一台机器，如果ping不通，用traceroute可以确定是哪个路由器不能连通，然后再找问题是在交换设备/hup/cable等。

# 10、网络编程中设计并发服务器，使用多进程 与 多线程 ，请问有什么区别？
### 答案一:
1）进程：子进程是父进程的复制品。子进程获得父进程数据空间、堆和栈的复制品。<br>
2）线程：相对与进程而言，线程是一个更加接近与执行体的概念，它可以与同进程的其他线程共享数据，但拥有自己的栈空间，拥有独立的执行序列。<br>
两者都可以提高程序的并发度，提高程序运行效率和响应时间。<br>
线程和进程在使用上各有优缺点：线程执行开销小，但不利于资源管理和保护；而进程正相反。同时，线程适合于在SMP机器上运行，而进程则可以跨机器迁移。<br>

### 答案二:
根本区别就一点：用多进程每个进程有自己的地址空间(address space)，线程则共享地址空间。所有其它区别都是由此而来的：<br>
1）速度：线程产生的速度快，线程间的通讯快、切换快等，因为他们在同一个地址空间内。<br>
2）资源利用率：线程的资源利用率比较好也是因为他们在同一个地址空间内。<br>
3）同步问题：线程使用公共变量/内存时需要使用同步机制还是因为他们在同一个地址空间内。<br>

# 11、网络编程的一般步骤
### 对于TCP连接：
1.服务器端1）创建套接字create；2）绑定端口号bind；3）监听连接listen；4）接受连接请求accept，并返回新的套接字；5）用新返回的套接字recv/send；6）关闭套接字。<br>
2.客户端1）创建套接字create; 2）发起建立连接请求connect; 3）发送/接收数据send/recv；4）关闭套接字。<br>
#### TCP总结：
Server端：create -- bind -- listen--  accept--  recv/send-- close<br>
Client端：create------- conncet------send/recv------close.<br>
 
### 对于UDP连接：
1.服务器端:1）创建套接字create；2）绑定端口号bind；3）接收/发送消息recvfrom/sendto；4）关闭套接字。<br>
2.客户端:1）创建套接字create；2）发送/接收消息sendto/recvfrom；3）关闭套接字.<br>
#### UDP总结:
Server端：create----bind ----recvfrom/sendto----close<br>
Client端：create----  sendto/recvfrom----close.<br>

# 12、TCP的重发机制是怎么实现的？
1）滑动窗口机制，确立收发的边界，能让发送方知道已经发送了多少（已确认）、尚未确认的字节数、尚待发送的字节数；让接收方知道（已经确认收到的字节数）。<br>
2）选择重传，用于对传输出错的序列进行重传。

# 13、TCP为什么不是两次连接？而是三次握手？
如果A与B两个进程通信，如果仅是两次连接。可能出现的一种情况就是：A发送完请报文以后，由于网络情况不好，出现了网络拥塞，即B延时很长时间后收到报文，即此时A将此报文认定为失效的报文。B收到报文后，会向A发起连接。此时两次握手完毕，B会认为已经建立了连接可以通信，B会一直等到A发送的连接请求，而A对失效的报文回复自然不会处理。依次会陷入B忙等的僵局，造成资源的浪费。

# 14、socket编程，如果client断电了，服务器如何快速知道？
使用定时器（适合有数据流动的情况）； 使用socket选项SO_KEEPALIVE（适合没有数据流动的情况）; 

# 15、fork()一子进程程后 父进程癿全局变量能不能使用？
fork后子进程将会拥有父进程的几乎一切资源，父子进程的都各自有自己的全局变量。不能通用，不同于线程。对于线程，各个线程共享全局变量。

# 16、4G的long型整数中找到一个最大的，如何做？
要找到最大的肯定要遍历所有的数的，而且不能将数据全部读入内存，可能不足。算法的时间复杂度肯定是O（n）<br>
感觉就是遍历，比较。。。。还能怎么改进呢？？？？<br>
可以改进的地方，就是读入内存的时候，一次多读些。。。。<br>
需要注意的就是每次从磁盘上尽量多读一些数到内存区，然后处理完之后再读入一批。减少IO次数，自然能够提高效率。而对于类快速排序方法，稍微要麻烦一些： 分批读入，假设是M个数，然后从这M个数中选出n个最大的数缓存起来，直到所有的N个数都分批处理完之后，再将各批次缓存的n个数合并起来再进行一次类快 速排序得到最终的n个最大的数就可以了。在运行过程中，如果缓存数太多，可以不断地将多个缓存合并，保留这些缓存中最大的n个数即可。由于类快速排序的时 间复杂度是O（N），这样分批处理再合并的办法，依然有极大的可能会比堆和败者树更优。当然，在空间上会占用较多的内存。 
 
此题还有个变种，就是寻找K个最大或者最小的数。有以下几种算法：<br>
容量为K的最大堆/最小堆，假设K可以装入内存；<br>
如果N个数可以装入内存，且都小于MAX，那么可以开辟一个MAX大的数组，类似计数排序。。。从数组尾部扫描K个最大的数，头部扫描K个最小的数。<br>

# 17、tcp三次握手的过程，accept发生在三次握手哪个阶段？
client 的 connect  引起3次握手<br>
server 在socket， bind， listen后，阻塞在accept，三次握手完成后，accept返回一个fd，因此accept发生在三次握手之后。

# 18、tcp流， udp的数据报，之间有什么区别，为什么TCP要叫做数据流？
TCP本身是面向连接的协议，S和C之间要使用TCP，必须先建立连接，数据就在该连接上流动，可以是双向的，没有边界。所以叫数据流 ，占系统资源多<br>
UDP不是面向连接的，不存在建立连接，释放连接，每个数据包都是独立的包，有边界，一般不会合并。<br>
TCP保证数据正确性，UDP可能丢包，TCP保证数据顺序，UDP不保证<br>

# 19、socket在什么情况下可读?
1. 接收缓冲区有数据，一定可读<br>
2. 对方正常关闭socket，也是可读<br>
3. 对于侦听socket，有新连接到达也可读<br>
4.socket有错误发生，且pending<br>

# 20、TCP通讯中，select到读事件，但是读到的数据量是0，为什么，如何解决?
select 返回0代表超时。select出错返回-1。<br>
select到读事件，但是读到的数据量为0，说明对方已经关闭了socket的读端。本端关闭读即可。<br>
当select出错时，会将接口置为可读又可写。这时就要通过判断select的返回值为-1来区分。<br>

# 21、说说IO多路复用优缺点？
### IO多路复用优点：
1.相比基于进程的模型给程序员更多的程序行为控制。<br>
2.IO多路复用只需要一个进程就可以处理多个事件，单个进程内数据共享变得容易，调试也更容易。 <br>
3.因为在单一的进程上下文当中，所以不会有多进程多线程模型的切换开销。 <br>
### IO多路复用缺点：
1.业务逻辑处理困难，编程思维不符合人类正常思维。 <br>
2.不能充分利用多核处理器。 <br>

# 22、说说select机制的缺点
每次调用select，都需要把监听的文件描述符集合fd_set从用户态拷贝到内核态，从算法角度来说就是O(n)的时间开销。<br>  
每次调用select调用返回之后都需要遍历所有文件描述符，判断哪些文件描述符有读写事件发生，这也是O(n)的时间开销。<br>     
内核对被监控的文件描述符集合大小做了限制，并且这个是通过宏控制的，大小不可改变(限制为1024)。<br>    

# 23、说一下epoll的好处
epoll解决了select和poll在文件描述符集合拷贝和遍历上的问题，能够在一个进程当中监听多个文件描述符，并且十分高效。 

# 24、epoll需要在用户态和内核态拷贝数据么？
在注册监听事件时从用户态将数据传入内核态；当返回时需要将就绪队列的内容拷贝到用户空间。 

# 25、epoll的实现知道么？在内核当中是什么样的数据结构进行存储，每个操作的时间复杂度是多少？
在内核当中是以红黑树的方式组织监听的事件，查询开销是O(logn)。采用回调的方式检测就绪事件，时间复杂的位O(1); 