---
title: 【已解决】hexo安知鱼anzhiyu主题Nav栏“开往”无法正常跳转问题
date: 2025-01-05 13:58:44
tags: 
- 实用
- 前端
- 建站
categories: 莫写屎山
keywords: 博客, 开往, Hexo, anzhiyu, 问题, 已解决
description: 解决hexo安知鱼anzhiyu主题Nav栏“开往”无法正常跳转问题
ai: 解决hexo安知鱼anzhiyu主题Nav栏“开往”无法正常跳转问题
cover: https://s1.imagehub.cc/images/2025/01/05/f8fa7b963cc680dbd5873d14665c3d73.png
---

## 问题描述

hexo安知鱼anzhiyu主题Nav栏“开往”无法正常跳转，浏览器提示“已阻止弹出式窗口”，非常影响用户体验，同时也导致无法正常加入“开往”……

> *~~布什戈门，我搞这个按钮不就是为了加入开往吗？……~~*

![阻止了弹出式窗口](https://s1.imagehub.cc/images/2025/01/05/f8fa7b963cc680dbd5873d14665c3d73.png)

## 解决方法

解决方法其实非常简单，首先在博客根目录下找到/themes/anzhiyu/source/js/utils.js这个文件，下滑至1101行或搜索“跳转开往”，可以找到这段代码：

```javascript

// 跳转开往
  totraveling: function () {
    anzhiyu.snackbarShow(
      "即将跳转到「开往」项目的成员博客，不保证跳转网站的安全性和可用性",
      element => {
        element.style.opacity = 0;
        travellingsTimer && clearTimeout(travellingsTimer);
      },
      5000,
      "取消"
    );
    travellingsTimer = setTimeout(function () {
      window.open("https://www.travellings.cn/go.html", "_blank");
    }, "5000");
  },

```

然后将

```javascript

    travellingsTimer = setTimeout(function () {
      window.open("https://www.travellings.cn/go.html", "_blank");
    }, "5000");

```

改为：

```javascript

    travellingsTimer = setTimeout(function () {
      window.location.href = "https://www.travellings.cn/go.html";
    }, "0");

```

也就是把延迟跳转关闭，改为立即跳转。

当然，也可以把上面的提示弹窗部分注释掉，反正都立即跳转了，应该也不会有人看吧 ~~（应该吧？）~~ ……

## 问题原因

>近日，开往维护组在审查时发现，部分站点在一个潜在的用户体验问题：当访客点击位于该主题顶部的“开往”入口后，待倒计时结束，部分浏览器会错误地将此操作判定为弹窗行为，并因此自动进行拦截处理。
根据我们的调查，我们发现：这些站点中，有一部分使用了 hexo-theme-anzhiyu 和 halo-theme-hao 这两款主题。分析这两个主题的跳转代码，不难发现：它们的执行方式是在倒计时后、通过 window.open("link", "_blank") 新建一个空白页。但是，由于在此之前window.open() 被一些广告商滥用，严重影响了用户的使用，因此，大多数浏览器不允许在用户行为后的一段时间才执行 window.open()。
为了确保用户能够顺畅地访问目标页面，我们强烈建议相关站点的站长对主题配置进行必要的修改，以避免此类跳转被浏览器误判为弹窗，从而影响用户体验。

<small>——摘自[开往](https://www.travellings.cn/)项目组博客文章：[《2024 年 05 月更新：弹窗问题，主题曲发布》](https://www.travellings.cn/blog/202405.html)</small>

