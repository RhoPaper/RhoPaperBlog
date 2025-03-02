---
title: KylinOS一招快速释放内存
date: 2025-02-22 21:49:36
tags: 实用
categories: 好用爱用
description: 【结尾有彩蛋】清理缓存、关闭程序、优化内存，快速释放麒麟OS内存占用。
ai: 【结尾有彩蛋】清理缓存、关闭程序、优化内存，快速释放麒麟OS内存占用。
cover: https://s1.imagehub.cc/images/2025/03/02/5cb7482af39f7ed08ac645787bde1e6f.webp
---

{% folding sorry   ≦(._.)≧ %}
上周有一些意外情况，没更新。
先在来补辣(●ˇ∀ˇ●)
{% endfolding %}

## 正常人的办法

### 1.清理系统缓存
- **打开终端**：使用快捷键 {% kbd Ctrl %} + {% kbd Alt %} + {% kbd T %} 打开终端。
- **切换到root用户**：输入`sudo`命令并输入root密码，切换到root用户。
- **执行清理命令**：在终端中输入`sync && echo 1 >/proc/sys/vm/drop_caches`并回车。这条命令会同步数据到硬盘并清理缓存。
- **验证效果**（可选）：使用`free -m`命令查看内存使用情况，确认可用内存是否增加。

### 2.关闭不必要的后台程序
- **打开任务管理器**：通过快捷键{% kbd Ctrl %} + {% kbd Shift %} + {% kbd Esc %}`打开任务管理器。
- **结束进程**：在任务管理器中，查看正在运行的程序，选择占用内存较大的程序，点击“结束任务”按钮关闭它们。

### 3.优化内存使用
- **合理分配内存资源**：通过系统监控工具（如System Monitor）查看当前内存使用状况，关闭后台占用内存过高的应用程序，释放内存空间提升系统整体响应速度。
- **升级内存硬件**：如果电脑使用较大内存的应用如虚拟机或大型图形设计软件，建议将内存条升级为更高容量，以保障系统流畅运行。

### 4.清理应用缓存
- **使用麒麟助手**：打开麒麟助手，选择“系统清理”按钮再选择“系统缓存”选项，然后勾选“清理软件中心缓存”并确认。
- **手动清理**：对于一些应用程序，可以手动删除其缓存文件。例如，浏览器的缓存通常位于用户目录下的`.cache`文件夹中，可以手动删除其中的浏览器缓存文件。

### 5.清理存储数据
- **清理HDFS和HBASE数据**：对于使用HDFS和HBASE的应用程序，可以通过执行特定命令来清理无用数据。例如，执行`$YLIN_HOME/bin/metastore.sh clean --deletetrue`和`$KYLIN_HOME/bin/kylin.sh org.apache.kylin.storage.hbase.util.storagecleanupJob --delete=true`等命令。

## *神金&奇妙&逆天方法*

打开终端，输入`python`或`python3`打开一个Python，然后依次输入
```python
a=range(0xffffff)
b=range(0xffffff)
c=range(0xffffff)
d=range(0xffffff)
…………
```
以此类推，直到出现明显卡顿，关闭终端窗口，10秒后电脑恢复流畅，你会发现内存占用大幅降低（但交换空间会变高）！

> 但是吧……这方法……就挺神金的……
