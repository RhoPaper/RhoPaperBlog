---
title: Midscene.js：AI自动化测试界的"卷王"，让996的前端也能快乐摸鱼 🐟
date: 2025-03-30 10:23:12
tags:
- 实用
- 前端
- 测试
categories: 好用爱用
keywords: Midscene.js, AI自动化测试, UI自动化工具, 自然语言编程, 前端测试框架, 字节跳动开源, Web Infra, Playwright集成, 测试脚本可视化, 数据隐私保护
description: 字节跳动Web Infra团队开源的Midscene.js，用AI重新定义UI自动化测试！无需编写复杂选择器，直接用人话控制浏览器操作、提取数据和智能断言。支持Chrome插件零代码体验、可视化调试回放、GPT-4o/开源模型自由切换，更提供Playwright/Puppeteer无缝集成。告别996式脚本维护，让你的测试代码自己学会写代码！
ai: 字节跳动Web Infra团队开源的Midscene.js，用AI重新定义UI自动化测试！无需编写复杂选择器，直接用人话控制浏览器操作、提取数据和智能断言。支持Chrome插件零代码体验、可视化调试回放、GPT-4o/开源模型自由切换，更提供Playwright/Puppeteer无缝集成。告别996式脚本维护，让你的测试代码自己学会写代码！
cover: https://s1.imagehub.cc/images/2025/04/06/31b7101be3e197013a3ab46272fa9095.webp
---

## 当UI自动化遇上AI：键盘侠的末日来了？

各位前端er/QA攻城狮们，举起你们的双手让我看看！是不是还在为UI自动化测试脚本的维护而头秃？是不是每次需求变更都恨不得把测试脚本扔进回收站？是不是看着满屏的`querySelector`和`XPath`感觉自己在玩"大家来找茬"？

别慌！字节跳动Web Infra团队带着Midscene.js来拯救你的发际线了！这个AI驱动的UI自动化工具，堪称测试界的"真香定律"——用过之后只想说：早该用用这个了！

## 三招吃遍天：AI交互、数据提取、智能断言

### 1. 让AI当你的"赛博打工人" 👾
再也不用对着DOM树写八股文了！Midscene.js的`.ai()`方法直接把自然语言翻译成操作指令：

```javascript
// 老司机写法
await page.type('#search-box', 'Headphones');
await page.keyboard.press('Enter');

// Midscene躺平写法 🛋️
await ai('在搜索框输入"Headphones"，敲回车');
```

这波操作简直比老板画饼还丝滑！AI会自动识别元素位置，管它是class名改叫"search-box-996"还是被产品经理改成了"福报输入框"，统统自动适配。

### 2. 数据抓取？直接开盒！ 📦
用`.aiQuery`提取数据时，你会感受到什么叫做"甲方快乐器"——想要什么数据结构直接说！

```javascript
const items = await aiQuery(`
  {
    itemTitle: string,
    price: Number,
    促销活动?: string
  }[], 
  找出所有价格低于1000的降噪耳机
`);

console.log(items); // 输出结构清晰的JSON
```

这波操作比产品经理的需求文档还规范，妈妈再也不用担心我写正则表达式写到眼花了！

### 3. 智能断言：专治各种"我觉得" 🤔
`.aiAssert`简直是开发测试的"防杠神器"，把玄学验证变成科学断言：

```javascript
await aiAssert('搜索结果至少包含3个Bose品牌的耳机');
```

从此告别和产品经理的"这个算不算加载成功"的灵魂辩论，让AI当裁判！

## 黑科技全家桶：总有一款让你直呼内行

### 🚀 Chrome插件：即刻体验"开挂人生"
安装插件后，在任何网页按F12打开控制台，输入：
```javascript
await ai('把当前页面的可爱萝莉图片都下载了');
```
（危险动作请勿模仿！🤣）即刻感受什么叫"所见即所得"的自动化体验。

### 📊 可视化报告：回放比吃播还下饭
每次运行自动生成带动画回放的可视化报告，支持：
- 逐帧回看AI的操作路径
- 在Playground实时调试Prompt
- 查看每个步骤的AI"心路历程"

这可比看测试日志爽多了，堪称程序员版的"楚门的世界"！

### 🤖 模型任选：要隐私还是要方便？
既支持GPT-4o这样的"六边形战士"，也能部署开源的UI-TARS模型。想要本地化部署？安排！担心数据安全？直接上私有化部署！这波操作比海底捞的服务还周到。

## 为什么说Midscene.js是"人间清醒"？

对比其他自动化工具，Midscene.js简直是把用户体验拿捏得死死的：

|               | 传统工具       | 某些AI测试工具   | Midscene.js         |
|---------------|--------------|--------------|--------------------|
| 学习成本       | 需要考证级教程 | 要学DSL       | **会说人话就行**    |
| 调试体验       | 看日志到眼瞎   | 云端黑盒      | **可视化回放+Playground** |
| 部署方式       | SaaS绑定      | 按API收费     | **开源免费+私有部署** |
| 数据安全       | 上传云端       | 未知         | **直连模型端**      |

## 程序员の正确打开方式

1. **摸鱼党**：先装[Chrome插件](https://chromewebstore.google.com/detail/midscene/gbldofcpkknbggpkmbdaefngejllnief)，5分钟体验AI自动化魔法（没法科学上网？给你准备好[>>>国内镜像<<<](https://s3.tebi.io/paperpan/Midscence-ext.crx)了！）
2. **集成狂魔**：支持Playwright/Puppeteer/YAML等多种姿势接入
3. **二次 ~~元~~ 开发者**：GitHub仓库[web-infra-dev/midscene](https://github.com/web-infra-dev/midscene)直接开搞！
4. **吃瓜群众**：加入[飞书交流群](https://applink.larkoffice.com/client/chat/chatter/add_by_link?link_token=291q2b25-e913-411a-8c51-191e59aab14d)围观字节大佬在线飙车

## 写在最后

在这个AI都要抢人类工作的时代，Midscene.js可能是你最后的倔强——与其被AI取代，不如先让AI给你打工！毕竟，能用Prompt解决的问题，为什么要写代码呢？（手动狗头）

现在就去GitHub点个Star，说不定哪天你的测试脚本就自己学会写测试脚本了！✨
