---
title: Tebi.io免费s3对象储存（可托管静态网站）
date: 2024-10-01 04:12:50
update: 2024-10-04 06:17:33
tags: 建站
categories: 一起白嫖
keywords: 免费, 建站, 托管, 静态网站, 对象储存, s3
description: 白嫖党申请出战！免费托管静态网站，国内速度快过GithubPage？！
ai: 白嫖党申请出战！免费托管静态网站，国内速度快过GithubPage？！
cover: https://s1.imagehub.cc/images/2024/10/04/df4569c384c50b2fc8d1dada2feed3b9.png
---

### 引子

链接先放在这里了--> [Tebi.io](https://tebi.io/)

目前市面上的免费对象储存主流由有[B2](https://www.backblaze.com/ "backclaxe")（免费*10GB*）

那么Tebi在各方面有哪些优势呢？

---

声明：笔者没有深入体验过B2的服务，主要还是用Tebi，可能有描述不准确之处，望读者谅解并烦请指出！QQ:2964774820 Email:<a href="mailto:rhopaper.top" title="点击发送邮件反馈">rhopaper.top</a>

---

# Tebi的优势

## 1.免费存储空间
相较于B2的10G来说，tebi注册就有**50G**的空间。不过tebi要求分成两个<em>[“存储桶”](#2-存储桶)</em>，也就是**每个“桶”25GB共50GB**

## 2.存储桶

tebi注册以后，可以直接新建存储桶，进行上传下载等操作，同时可以添加Key，喜欢玩的也可以挂载到VPS当作备份盘，因为tebi也是比较安全的。

## 3.建站相关
如果想把 Tebi 用于托管网站，请按照下面的步骤操作：

首先注册账号，使用邮箱即可。也可以直接使用Google或Github登录。

![注册Tebi](https://s1.imagehub.cc/images/2024/10/04/ecd9ef4e28bbec1de860b3939e1e25f5.jpg "注册Tebi")

注册完成后登录自己的账号，进入控制台。

![登录](https://s1.imagehub.cc/images/2024/10/04/51e598b6f51ccddb841ba5f6a5a3ce5c.jpg "登录Tebi")

![控制台](https://s1.imagehub.cc/images/2024/10/04/cd2aa91cff298e19c071ca4dfff99041.jpg "Tebi控制台")

>Tip：登陆时即使勾选了“使我保持登录状态”，时间一长，下次登录还是要手动点击一下“登录”按钮


### ①没有自己的域名

没有域名可以使用tebi默认的域名，即 <em>s3.tebi.io/存储桶名称</em> 。

1、新建存储桶，名称自定，方便记忆即可
![没有域名新建存储桶](https://s1.imagehub.cc/images/2024/10/04/c42611055135190e262fece97c6f7a70.jpg)

2、上传网站文件（仅限静态HTML+CSS+JS页面）

![上传文件](https://s1.imagehub.cc/images/2024/10/04/48d11137de05dd093627251814827342.jpg)

3、点击网站主页面链接，跳转到自己刚刚托管的网站

![打开网站](https://s1.imagehub.cc/images/2024/10/04/d7a91a0f7d4e076ac9cd206ce29b0d9d.jpg)

![完成！](https://s1.imagehub.cc/images/2024/10/04/031146d0129a0be963922c071fe69f5b.png)

4、记下网址，即可分享给别人😊

### ②有自己的域名

1、新建存储桶，名称使你的域名，例如： example.com

![有域名新建存储桶](https://s1.imagehub.cc/images/2024/10/04/e7d22c0684c3c67a67718387bb8b5708.jpg)

2、域名CNAME解析到 <em>s3.tebi.io/你的域名</em> 
如：s3.tebi.io/example.com

3、在桶设置->虚拟主机中先点击开启，然后访问试试，没问题再开启SSL，再试试，SSL可用之后再强制开启SSL

**强调一下，理论上同时开启也没问题，但试验后发现，居然没成功！所以上面的三个选项请依次开启！**

4、以上设置没问题之后，就可以上传网站了，按照上面没有域名的方法，直接上传即可。

>10/4修正：tebi无法使用三级域名，不可CNAME，可以GitHub托管一个html文件自动跳转


---

参考文章：[黑海洋-Wiki | tebi.io免费对象存储（可托管静态网站）](https://www.upx8.com/3402 "肥肠感谢！")

---
