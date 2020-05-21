# chap_3_DOM

## 什么是 DOM

### D -> document
> DOM 就是把网页文档转换为一个**文档对象**

### O -> object
1. JS的对象可以分为3种类型
>1. user-defined object
>2. native object
>3. host object
2. 最基础的宿主对象——window
>1. window 对象是浏览器窗口本身
>2. window 的属性和方法称为 BOM
3. document
>1. 更多关注的是网页内容(document)，而不是窗口(window)
>2. document对象的主要那个功能就是处理网页内容
>3. 后续更多关注的是 document 对象

### M -> model
1. 可翻译成模型，或者 map，含义是**某种事物的表现形式**
2. 家谱树模型
>1. 用 parent, child, sibling 等记号来表明成员关系
>2. 用节点树来称呼更加恰当

### node -> 节点
1. 文档是由节点构成的集合
2. DOM的节点
>1. 元素节点 element node
>>1. 根元素的 html
>>2. 标签的名字就是元素的名字
>2. 文本节点 text node
>>1. 就是文本
>>2. 文本节点总是被包含在元素节点的内部
>3. 属性节点 attribute node
>>1. 属性节点对元素做出更具体的描述
>>2. 如 title, id, class
>4. 获取元素
>>1. elementNode.getElementById(id)
>>2. elementNode.getElementsByTagName(tag)
>>3. elementNode.getElementsByClassName(class) // 类名的顺序和数量不重要
>5. 获取属性、设置属性
>> 1. elementNode.getAttribute(attribute)
>> 2. elementNode.setAttribute(attribute, value)  // 书中提到 setArrtibute 做出的修改不会反映在源代码, 实际上，chrome、firefox 反映了