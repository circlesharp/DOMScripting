# chap_9_CSS-DOM

## 一、三位一体的网页
### 1 结构层
1. structural layer
2. 由 HTML / XHTML 之类的标记语言负责创建
3. 标签(tag)对内容的语义含义做出了描述
### 2 表示层
1. presentation layer
2. 由 css 负责完成
3. CSS描述页面内容应该如何呈现
### 3 行为层
1. behavior layer
2. 由 js 和 DOM 主宰
### 4 分离与重叠
1. CSS 利用伪类走进 DOM 的领地
2. DOM 可以给元素设定样式

## 二、元素的属性回顾
### 1 节点树的位置信息
1. parentNode
2. nextSibling
3. previousSibling
4. childNodes
5. firstChild
6. lastChild
### 2 元素本身的信息
1. nodeType
2. nodeName
### 3 style
1. style 属性包含着元素的样式
2. 会返回一个对象 CSSStyleDeclaration
3. flaw: style 只能返回内嵌样式
4. 但是，style 的优点是可读写，即可以修改样式

## 三、何时该用 DOM 脚本设置样式
1. 你认为应该的时候
> 1. 如果你只有榔头，看到啥都是钉子
> 2. 如果要改变元素的呈现效果，使用 CSS
> 3. 如果想改变元素的行为，使用 DOM
2. 事件处理函数应该用一般函数，this 指向节点

## 四、表格 table
### caption
1. caption 标签定义表格的标题
### thead + tbody + tfoot
1. tbody 元素用于对 HTML 表格中的主体内容进行分组
2. tfoot 元素用于对 HTML 表格中的表注（页脚）内容进行分组
3. tbody 元素应该与 thead 和 tfoot 元素结合起来使用
### tr
1. tr 标签定义 HTML 表格中的行
2. tr 元素包含一个或多个 th 或 td 元素
### th + td
> HTML 表格有两种单元格类型：
> 1. 表头单元格 - 包含头部信息（由 th 元素创建）
> 2. 标准单元格 - 包含数据（由 td 元素创建）

## 五、CSS的知识小点
1. `:nth-child(odd) // 奇数`
2. `:hover // 相当于 onmouseeover & onmouseout 事件`

## 六、className 属性
> 与其使用 DOM 直接改变某个元素的样式，不如通过 js 去更新这元素的 class 属性
1. `ele.setAttribute('class', newClassName)`
2. `ele.className = newClassName`
3. 如果要实现class的追加：`ele.className += ' newClassName' // 注意空格`，或者使用 addClass 自定义方法

