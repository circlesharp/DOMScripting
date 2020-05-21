# chap_4_案例研究：JavaScript 图片库

## setAttribute 是 **DOM Lever 1** 的组成部分
1. element.value = 'the new value' 与 element.setAttribute('value', 'the new value') 等价

## 写在标签内 onclick = "showPic(this); return false"
1. this 指这个元素节点
2. return false: onlick 执行后默认返回 true

## element.childNodes 属性
1. 获取一个元素的所有子元素
2. childNodes[0] 等价与 firstChild
3. element.childNodes[element.childNodes.length-1] 等价于 element.lastChild

## node.nodeType 属性
1. 获取节点的 nodeTpye
2. 元素节点 -> nodeType === 1
3. 属性节点 -> nodeType === 2
4. 文本节点 -> nodeType === 3

## node.nodeValue 属性
1. 元素节点为空
2. 得找它的 firstChild (文本节点)

## 导入 css
1. `<style type="text/css">@import url();</style>`
2. `<link rel="stylesheet" href="">`