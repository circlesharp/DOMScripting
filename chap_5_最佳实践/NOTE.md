# chap_5_最佳实践

## 平稳退化 graceful degradation
1. 'javascript:' 伪协议
> `<a href="javascript:popup(url)">Example</a>`
> 没啥好处
2. 内嵌的事件处理函数
> `<a href="#" onclick="popup(url); return false;">Example</a>`
> 没啥好处
3. 平稳退化
> 有可能是搜索机器人过来访问了；仍然可以优化，因为 js 代码嵌入到标记文档中了
> 1. `<a href="url" onclick="popup(this.getAttribute('href')); return false;">Example</a>`
> 2. `<a href="url" onclick="popup(this.href; return false;">Example</a>`

## 分离 JavaScript
1. 利用 class 或 id 来标记元素，若该元素被那啥，就执行函数。
2. 当 window 对象触发 onload 事件，document 对象已经存在。

## 向后兼容
1. 对象检测
> 1. `if (method) { statement }`
> 2. `if (!method1 || !method2) return false;`
2. 浏览器嗅探技术
> 通过提取浏览器供应商提供的信息来后向兼容；但是有风险且不高效

## 性能考虑
1. 尽量少访问DOM和尽量减少标记
2. 合并和放置脚本
3. 压缩脚本
