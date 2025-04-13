---
title: 【已解决】Hexo anzhiyu主题底部备案信息过长被省略
date: 2025-04-12 19:34:50
update: 2025-04-13 09:41:34
tags:
- 实用
- 前端
- 建站
- 测试
categories: 莫写屎山
keywords: Hexo, 博客, anzhiyu, 备案, ICP, Bug, Hexo主题, 底部信息栏, 友链
ai: 解决Hexo anzhiyu主题底部备案信息过长被省略问题
description: 解决Hexo anzhiyu主题底部备案信息过长被省略问题
cover: https://s1.imagehub.cc/images/2025/04/13/1df6d330a5fd6a87b7abaff58c423d2c.webp
---

## ~~事故~~起因

anzhiyu安知鱼主题是一个肥肠豪康并且令人舒适的Hexo主题，之前也一直用得很愉快。但是今天我在~~魔怔地~~给网站注册民间ICP备案时发现了一个问题：放在底部socialBar的备案信息因为太长被隐藏了尾巴，变成……

![1](https://s1.imagehub.cc/images/2025/04/12/fb96778b22e4ca6c71dbb8d47be1e696.png)

![2](https://s1.imagehub.cc/images/2025/04/12/ce5fefb68d7ec91207a693e791497035.jpeg)

这就很难受了。

## 解决过程

### 1.寻找祸源

于是我们按下{% kbd F12 %}，选择出现问题的元素……

![3](https://s1.imagehub.cc/images/2025/04/12/3ce058929ae8602c1712f703a6c30b2b.png)

然后找到TA的CSS

![4](https://s1.imagehub.cc/images/2025/04/12/4836f5237d73a5c0cb71e2127f3c253a.png)

看看我们发现了什么？

![5](https://s1.imagehub.cc/images/2025/04/12/c7665d22bdc1949bc3a48d7af459c0ed.png)

这大概就是罪魁祸首了！

不过还不能定罪，让我们先检查一下，拿到确凿证据：

**寻找证据：关掉TA！**

![6](https://s1.imagehub.cc/images/2025/04/12/df8ab60844317a2bbaf57aac07c859e8.png)

哇！

![7](https://s1.imagehub.cc/images/2025/04/12/0f4d203bddd8ae9024c01fd1d7765809.jpeg)

是TA没错了！

### 2.~~全部死刑~~解决祸源

打开亲爱的VSC，搜一下

![8](https://s1.imagehub.cc/images/2025/04/12/c9f451fb1a45aa5dd848b336e5ca30b5.png)

啊哈！是你吧，footer.styl！

![9](https://s1.imagehub.cc/images/2025/04/12/0f8d30cf05df92b28fa486c14eb0618f.png)

~~顶~~点进去

![10](https://s1.imagehub.cc/images/2025/04/12/a40112b2693bf2fbb201f7bec03ed155.png)

出现了！

就是现在，改掉TA

![11](https://s1.imagehub.cc/images/2025/04/12/6c24dc0137ed3e248bd7d57cd3bfe04d.png)

当然，直接~~死刑~~也是可以的……

![12](https://s1.imagehub.cc/images/2025/04/12/a7f10eeb5dd8643dd473df930eaf0b4b.png)

然后经典三件套clean+generate+deploy，**这样就改好了！！！**

![13](https://s1.imagehub.cc/images/2025/04/12/f74b511e027e77b20ef7979bde38799d.jpeg)

---

写文不易，能不能给博主赏点饭吃捏(^人^)
