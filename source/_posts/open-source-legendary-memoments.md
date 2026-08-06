---
title: 开源编年史：那些不得不品的“赛博琥珀”
date: 2026-08-06 10:09:00
tags:
- AI
- 实用
categories: 杂谈谈杂
keywords: 开源, Linux, Git, Linus Torvalds, Nvidia, DeepSeek, 梁文峰, 梁白开, LLM, Google, Android, KeepAndroidOpen, Firefox, Mozilla, 微软, 开源编年史, 赛博琥珀
description: 盘点开源史上不得不品的传世经典：Linus的中指、RMS的GNU、两周写出的Git、Google的“黑化”、Meta靠Llama翻身，以及被P成“梁白开”的DeepSeek。
ai: 盘点开源史上不得不品的传世经典：Linus的中指、RMS的GNU、两周写出的Git、Google的“黑化”、Meta靠Llama翻身，以及被P成“梁白开”的DeepSeek。
cover: https://s1.imagehub.cc/images/2026/08/06/7eb0c67a261e30b3348b10e9ada989e3.webp
---

> 前排提示：本文含大量烂梗、不客观的暴论。请不要放心食用（doge）

## 一、GNU：RMS的“电子共产主义宣言”

1983年，Richard Stallman在MIT的AI实验室里看着打印机驱动代码被厂商藏起来，怒从心头起，恶向胆边生——他写下了GNU宣言。

翻译成人话就是：“软件应该是自由的，你们这帮资本家别想关起门来数钱”

然后计划搓个操作系统

当时所有人都觉得这哥们疯了——你写一个操作系统出来对抗Unix？还免费？你是不是实验室的空调开太低把脑子吹坏了？

然后他就真的写了。

GCC、Emacs、GDB……一个个工具像不要钱一样往外扔（emmm好像本来就不要钱的说）。虽然哥（GNU Hurd）到今天还是个“永远在开发中”的传说，但RMS埋下的这颗种子，后来长出了Linux、Android、以及半个互联网的基石。

琥珀列表：

- “GNU = GNU‘s Not Unix”（经典递归缩写，程序员特有冷笑话）

- “Free as in freedom, not free as in beer.”（这句话被印在无数T恤上，也把无数新人绕晕了——“到底是免费还是自由啊？！”）

## 二、Linux的诞生：“你好，我是Linus，我想做个免费的系统”

1991年，一个芬兰大学生在comp.os.minix新闻组里发了条帖子：

“我正在做一个免费的操作系统（只是爱好，不像GNU那么宏大和专业），想问问大家有什么建议。”

这个人的名字叫Linus Torvalds，他当时可能以为自己只是写个课堂作业。

后来的事情大家都知道了：这个“课堂作业”吞噬了服务器、超级计算机、移动设备（Android）、以及全世界的云计算基础设施。Windows在服务器市场哭晕在厕所，macOS在嵌入式领域查无此人。

琥珀列表：

- “Talk is cheap. Show me the code.”（Linus的经典暴论，后来成了开源界的座右铭）

- “I‘m a bastard. I have no feelings.”（Linus在邮件列表里骂人时的经典开场白）

## 三、Netscape开源：大公司第一次“迷途知返”

1998年，Netscape被微软的IE打得满地找牙，市场份额从80%跌到个位数。眼看就要凉透了，他们做了一个震惊世界的决定：把浏览器源代码开源，项目取名Mozilla

当时所有人都觉得这是“临终前的挣扎”——都快死了还开源？代码给了别人，你靠什么赚钱？

结果呢？Mozilla Firefox后来成了唯一一个没被Chromium吞掉的浏览器（虽然现在份额也不高，但它还活着，本身就是奇迹）。而Netscape这具“尸体”，长出了整个现代Web的根基

琥珀列表：

- Mozilla最初的吉祥物是绿色蜥蜴，后来变成了恐龙——因为代码太老（bushi）

- “IE = Internet Explorer，也是‘安装其他浏览器的工具’”（可惜现在没了）（可惜在哪）（“现在没了”前面）

## 四、Android的开放承诺：Google曾经也是个好少年

2005年，Google收购了一个小公司叫Android Inc.，当时没人知道这是干什么的

2007年，iPhone发布了。所有人都以为Google要慌了——结果他们做了个更骚的操作：宣布Android开源，成立OHA（开放手持设备联盟），并且喊出了那句后来被打脸无数次的承诺：

> “Android是一个开放的平台，任何开发者都可以自由使用和分发。”

当年的Google，是真的有理想主义的。AOSP至今仍是开源世界的基石之一，养活了无数国内手机厂商、开发者、以及第三方ROM社区（CM/LOS的棺材板还在发热）

[后来的事情](https://keepandroidopen.org/)……不提也罢。。。

至少它曾经是个好少年

琥珀列表：

- “Don‘t be evil”：Google当年的座右铭，现在看到只想笑

- “Android is open”（现在的Google：开放？我来定义开放！）

- - “Do the right thing”：Google现在的座右铭，依旧“我来定义”

## 五、Git的诞生：Linus又被逼疯了

2005年，Linus和他的Linux内核开发团队用着一个叫BitKeeper的分布式版本控制系统，挺好用的，但是商业软件，不自由也不免费

然后BitKeeper的母公司把免费授权收回了。Linus再次怒从心头起，恶向胆边生：

“好好好，这么玩是吧，行，那我自己写一个！”（Linus：我没说过）

于是他花了两周时间写出了Git的第一个版本。又寸，两周。

今天，世界上几乎所有的开源项目——Linux、Android、Chromium、Python、Go、Rust、以及你所有在GitHub/GitLab仓库——都依赖这个“两周写的玩意儿”

而且Git的设计之优雅、性能之强悍，让当年的CVS和SVN用户当场跪了下来。Linus这个人实在太神秘了，写操作系统两周，写版本控制两周——他到底还藏着多少两周能搞定的东西？

琥珀列表：

- “Git = God‘s Instrument of Torture”

- “git push --force”（团队友尽快捷键）

## 六、唯一真神，传世赛博琥珀：“So，Nvidia，Fuck you！”

2012年，Linus在芬兰的一个技术会议上被问到“你对Nvidia在Linux上的支持怎么看”，他看了镜头一眼，说出了那句载入史册的话：

“So，Nvidia，Fuck you！”

然后竖起中指，全场掌声雷动，欢呼声此起彼伏（

B站上这个视频已经累计几百万播放，YouTube上可能已经千万了。更讽刺的是，这句话居然真的起了作用…… 英伟达后来确实加强了对Linux的驱动支持，虽然过程曲折得像国产电视剧，但至少现在能用Linux跑CUDA、玩Steam游戏（配合Proton），这在十年前是完全不敢想的

琥珀列表：

- “So，Nvidia，Fuck you！”（伟大无需多言）

- “Linus did nothing wrong”（防御+100%）

## 七、微软“黑化”又“洗白”：从“开源是癌症”到“GitHub是我家”

2001年，微软时任CEO Steve Ballmer接受采访时，说出了那句后来被反复鞭尸的名言：

“Linux是知识产权领域的癌症。”

当时的微软，把开源当敌人，把Linux当毒瘤，恨不得亲手掐死所有开源代码

后来的事情各位也都看到了：

- 微软收购了GitHub（真香）

- Windows 10内置了WSL（真香x2）

- 微软成了GitHub上开源贡献最多的公司（真香x3，真香定律永不过时）

- Satya Nadella在台上喊出“Microsoft loves Linux”（那我问你，你叫Ballmer的脸往哪儿搁？）

琥珀列表：

- “Microsoft ❤️ Linux”（Ballmer：你够了）

- “Satya的微软是洗白版，Ballmer的微软是典藏版”

## 八、Meta的“赛博赎罪券”：炒概念不如做善事

前情提要：Meta（当时的Facebook）因为隐私泄露、操纵选举、青少年心理健康等一堆破事，形象跌到谷底。扎克伯格急了，改公司名、砸元宇宙、搞VR眼镜、天天喊“下一个互联网”，结果越搞越像笑话

然后OpenAI带起了AI热潮，所有人都在抢GPU、囤数据、闭源搞付费（OpenAI变成了CloseAI😭😭😭）结果Meta反手一个Llama开源，放出了模型权重……

效果真是立竿见影：

- 学术界：感谢Meta爸爸，论文有救了

- 开发者：感谢Meta爸爸，微调不用从头训了

- 吃瓜群众：诶，Meta好像也没那么坏？

不需要公关团队、不需要去投Super Bowl广告、也不需要扎克伯格在元宇宙里尬笑（但这真的很好笑hhh），只是开源一个好模型，企业形象从地下十八层直接弹射到近地轨道（什）

琥珀列表：

- “Llama = Let‘s Let Anyone Make AI”（网友硬编的缩写）

- “Meta’s best PR move was open-sourcing AI”（精辟总结）

## 九、“国民AI”DeepSeek：“梁白开”的赛博牌面

如果说Llama是国际舞台上的“赎罪券”，那DeepSeek就是中国社区里养出来的“亲儿子”。

你去看任何中文技术社区——Linux Do、V2EX、知乎、B站——DeepSeek的讨论热度永远在线，而且聊的方式特别活（神）人（入）：

- V4 Flash GA发布时：L站直接被挤炸，始皇喜极而泣（？何意味）

- 模型跳票时：“降格为梁子”“赏饮料梁白开”

- 正式版能力/性价比薄纱外国AI时：“梁圣！梁圣！梁圣！”

总之，骂归骂，玩归玩，国模之光不是瞎说的；虽然全是神秘至极的梗图，但像是路边一条的印度AI，谁理你？谁会闲到为你专门P一张梗图？玩梗正是喜爱的表现

琥珀列表：

- “梁圣”、“小梁”、“梁子”、“梁白开”……（DeepSeek发布周期的n种状态）

十、尾声：星星之火，正在燎原

讲了这么多“赛博琥珀”，不知各位发现没有？

开源史上所有的“传世经典”，背后都是活生生的人和事：

- RMS是个偏执狂，但他让“自由”这个词有了代码层面的含义

- Linus就是个喷子，但他喷出了Linux、喷出了Git、还喷醒了Nvidia

- Netscape的工程师在绝望中开源了浏览器，留下了Firefox这根独苗

- Google曾经也是好少年，只是后来……

- Meta在走投无路时选择了开源，结果意外地救了品牌形象

- DeepSeek的梁文峰被用户P成“梁白开”——这种“羞辱”本身就是爱的证明

开源从来不是只“免费的午餐”，它是一张由无数活人织成的网。 这张网里有骂战、有烂梗、有跳票、有吵架，但也正因为它是“人的网络”，它才有商业闭源所不具备的，独特的生命力

“星星之火，可以燎原”——你看，这火不是已经燎起来了吗？

Linux的桌面端份额悄悄涨到了4%以上，V社的Proton让Steam Deck成了第一款能玩的Linux游戏机，微软哭着喊着“Microsoft loves Linux”，Meta靠Llama翻身，DeepSeek成了国民AI/世界大模型斩杀线，Android虽然……呃……安卓的事还是不说了……

这把火还在烧，而且越来越旺

就让它继续烧着吧！🔥

“Talk is cheap. Show me the code.” —— Linus Torvalds

“So，Nvidia，Fuck you！” —— 也是他

“星星之火，可以燎原。” —— 你猜
