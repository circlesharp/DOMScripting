# chap_8_动态创建标记

## 一些传统的方法
1. document.write: 将字符串插入到文档里
2. innerHTML: 毫无细节可言。标准化的DOM像手术刀一样精细，innerHRML就像大锤一样。(不包括标签本身)

## DOM方法
> 我们不是创建标记，而是改变 DOM 节点树；step 1 创建一个新的元素；step 2 把新元素插入节点树。
1. document.createElement(nodeName) // 创建出来之后不在节点树，而是 文档碎片(document fragment)
2. elementNode.appendChild(fragmentNode)
3. document.createTextNode(text) // 创建文本节点

## 重回图片库
1. parentEle.insertBefore(newEle, targetEle)
2. ele.parentNode, ele.nextSilbing
3. 自定义 insertAfter (秒呀)

## Ajax
> 对页面的请求以异步方式发送到服务器；服务器不必用整个页面来响应请求，而是后台处理；用户仍然可以与页面交互。
1. XMLHttpRequest 对象