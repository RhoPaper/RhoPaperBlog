---
title: 手把手教你使用DeepSeek API
date: 2025-02-16 05:38:55
tags:
- 实用
- 前端
- UP主
categories: 好用爱用
description: 手把手教会你使用DeepSeek API服务！AI快人一步！
ai: 手把手教会你使用DeepSeek API服务！AI快人一步！
cover: https://s1.imagehub.cc/images/2025/02/16/7f33bf078ff2da46cd53e5051005a553.webp
---

## 关于DeepSeek

> DeepSeek-V3 在推理速度上相较历史模型有了大幅提升。在目前大模型主流榜单中，DeepSeek-V3 在开源模型中位列榜首，与世界上最先进的闭源模型不分伯仲。
> 
> {% folding 查看主流模型对比表 %}
> 
> |         | Benchmark (Metric)         | DeepSeek V3 | DeepSeek V2.5 | Qwen2.5  | Llama3.1  | Claude-3.5  | GPT-4o |
> |:-------:|:--------------------------:|:-----------:|:-------------:|:--------:|:---------:|:-----------:|:------:|
> |         |                            | -           | 905           | 72B-Inst | 405B-Inst | Sonnet-1022 | 513    |
> |         | Architecture               | MoE         | MoE           | Dense    | Dense     | -           | -      |
> |         | # Activated Params         | 37B         | 21B           | 72B      | 405B      | -           | -      |
> |         | # Total Params             | 671B        | 236B          | 72B      | 405B      | -           | -      |
> |         |                            |             |               |          |           |             |        |
> | English | MMLU (EM)                  | 88.5        | 80.6          | 85.3     | 88.6      | 88.3        | 87.2   |
> |         | MMLU-Redux (EM)            | 89.1        | 80.3          | 85.6     | 86.2      | 88.9        | 88     |
> |         | MMLU-Pro (EM)              | 75.9        | 66.2          | 71.6     | 73.3      | 78          | 72.6   |
> |         | DROP (3-shot F1)           | 91.6        | 87.8          | 76.7     | 88.7      | 88.3        | 83.7   |
> |         | IF-Eval (Prompt Strict)    | 86.1        | 80.6          | 84.1     | 86        | 86.5        | 84.3   |
> |         | GPQA-Diamond (Pass@1)      | 59.1        | 41.3          | 49       | 51.1      | 65          | 49.9   |
> |         | SimpleQA (Correct)         | 24.9        | 10.2          | 9.1      | 17.1      | 28.4        | 38.2   |
> |         | FRAMES (Acc.)              | 73.3        | 65.4          | 69.8     | 70        | 72.5        | 80.5   |
> |         | LongBench v2 (Acc.)        | 48.7        | 35.4          | 39.4     | 36.1      | 41          | 48.1   |
> |         |                            |             |               |          |           |             |        |
> | Code    | HumanEval-Mul (Pass@1)     | 82.6        | 77.4          | 77.3     | 77.2      | 81.7        | 80.5   |
> |         | LiveCodeBench (Pass@1-COT) | 40.5        | 29.2          | 31.1     | 28.4      | 36.3        | 33.4   |
> |         | LiveCodeBench (Pass@1)     | 37.6        | 28.4          | 28.7     | 30.1      | 32.8        | 34.2   |
> |         | Codeforces (Percentile)    | 51.6        | 35.6          | 24.8     | 25.3      | 20.3        | 23.6   |
> |         | SWE Verified (Resolved)    | 42          | 22.6          | 23.8     | 24.5      | 50.8        | 38.8   |
> |         | Aider-Edit (Acc.)          | 79.7        | 71.6          | 65.4     | 63.9      | 84.2        | 72.9   |
> |         | Aider-Polyglot (Acc.)      | 49.6        | 18.2          | 7.6      | 5.8       | 45.3        | 16     |
> |         |                            |             |               |          |           |             |        |
> | Math    | AIME 2024 (Pass@1)         | 39.2        | 16.7          | 23.3     | 23.3      | 16          | 9.3    |
> |         | MATH-500 (EM)              | 90.2        | 74.7          | 80       | 73.8      | 78.3        | 74.6   |
> |         | CNMO 2024 (Pass@1)         | 43.2        | 10.8          | 15.9     | 6.8       | 13.1        | 10.8   |
> |         |                            |             |               |          |           |             |        |
> | Chinese | CLUEWSC (EM)               | 90.9        | 90.4          | 91.4     | 84.7      | 85.4        | 87.9   |
> |         | C-Eval (EM)                | 86.5        | 79.5          | 86.1     | 61.5      | 76.7        | 76     |
> |         | C-SimpleQA (Correct)       | 64.1        | 54.1          | 48.4     | 50.4      | 51.3        | 59.3   |
> 
> {% endfolding %}

> DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能比肩 OpenAI o1 正式版。

2025春节之际，DeepSeek-R1火遍全网，其能力不亚于ChatGPT-o1模型，且性能更佳，在普通个人电脑 ~~（不需要RTX5090）~~ 上也能够较为流畅地运行。API价格更是吊打OpenAI，普通用户在网页/APP中使用任何模型甚至完全免费！

如此强劲的~~价格和~~性能，怎么能不用起来呢？本文就将带你手把手注册&使用DeepSeek API ！

---

## 准备工作

- 一台能上网且具有可视化桌面&浏览器的电子设备

- 一张能收到短信的SIM卡

- 一根针

- 你的钱包 ~~（如果有的话）~~ 

---

## 正片

### 可选步骤

1. 将针插入插槽边小孔内，张开SIM插槽

2. 放入SIM卡

3. 启动设备，查看并记住号码

### 必备步骤

#### 第一部分：注册

1. 开机

2. 连接Internet
   
   <img src="https://s1.imagehub.cc/images/2025/02/16/5dc6a3c0466a985bdac2b1227f0c9870.webp" title="" alt="" width="269">

3. 打开任意浏览器
   
   <img src="https://s1.imagehub.cc/images/2025/02/16/0ab624a2c7c5312b496438550065eb7f.webp" title="" alt="" width="488">

4. 在地址栏输入：[platform.deepseek.com](https://platform.deepseek.com/)，然后按下回车
   
   <img src="https://s1.imagehub.cc/images/2025/02/16/4f170671a1de561815ab9934dedfb161.png" title="" alt="2" width="290">

5. 等待页面加载完成，显示如图界面
   
   <img src="https://s1.imagehub.cc/images/2025/02/16/6051879881857ba3347482587e17ff48.webp" title="" alt="" width="419">

6. 在“请输入手机号”一栏填入刚刚准备的SIM卡号码，点击下方“发送验证码按钮。
   
   <img src="https://s1.imagehub.cc/images/2025/02/16/4248b186699a08954f686ea41215fb2c.webp" title="" alt="" width="534">

7. 此时，你可能会遇到一个弹窗，按照下方提示操作即可
   
   <img src="https://s1.imagehub.cc/images/2025/02/16/f8da35ee78e6ef1cfc0ea1af1e254d76.webp" title="" alt="" width="314">

8. 完成操作后，一条包含验证码的短信应该发送到你的设备上了
   
   ![6](https://s1.imagehub.cc/images/2025/02/16/9a90e2356413015bfad59a23bc2a3f17.webp)

9. 在此期间，可以点击一下”我已阅读并同意……将自动注册“左侧的复选框按钮
   
   ![](https://s1.imagehub.cc/images/2025/02/16/4b1fe162c33fc2980364426733359f13.webp)

10. 接下来，将收到的验证码填入”请输入验证码“栏中
    
    ![](https://s1.imagehub.cc/images/2025/02/16/7cb8b7d0accac08ab2faca82ab8cae1e.webp)

11. 点击登录，如果出现下面这样的界面，那么恭喜你大功告成！
    
    ![](https://s1.imagehub.cc/images/2025/02/16/bc43a5d0e6242e0001e4f54f76bff6a8.webp)

{% tip warning %}如果没有成功，请检查是否遗漏了某些步骤，并跟着教程重新做一遍。{% endtip %}

#### 第二部分：添加API

1. 点击左侧侧边栏的”API keys“按钮，跳转到如下页面
   
   ![](https://s1.imagehub.cc/images/2025/02/16/195183cc792de1b5e110eb58365d3b43.webp)

2. 点击”创建API key“按钮，弹出一个弹窗
   
   ![](https://s1.imagehub.cc/images/2025/02/16/325aba8b61841070cc1de1978bd00ce0.webp)

3. 此处API key名称不影响实际功能，随意即可
   
   ![](https://s1.imagehub.cc/images/2025/02/16/2210f748c2b31af0d6fcbebfc65efdd8.webp)

4. 点击”创建“按钮，弹窗内容切换为：
   
   ![](https://s1.imagehub.cc/images/2025/02/16/c7544911b6cf158db23d807f12f95876.webp)

5. 现在，点击一下“复制”，然后点击“关闭”或右上角“ × ”关闭弹窗

#### 第三部分：开始对话

{% tabs choose-language, -1 %}

<!-- tab -->

**Python**

> 注意！运行前需运行
> ```shell
> pip3 install openai
> ```
> 以安装openai包

```python
from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)
```

<!-- endtab -->

<!-- tab -->

**Node.js**

> 注意！运行前需运行
> ```shell
> npm install openai
> ```
> 以安装openai包

```javascript
import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: '<DeepSeek API Key>'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();
```

<!-- endtab -->

<!-- tab -->

**curl**

> ~~迷之curl使我大脑旋转~~

```shell
curl https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <DeepSeek API Key>" \
  -d '{
        "model": "deepseek-chat",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello!"}
        ],
        "stream": false
      }'
```

<!-- endtab -->

{% endtabs %}

### **You did it! 你做到了！**

~~恭喜你，被我恭喜到了~~

恭喜你成功使用API与DeepSeek对话了！

---

**以上就是本文全部内容，如果你觉得对你有帮助，能不能请作者喝瓶 *农夫山贼* 嘞，非常感谢各位读者的支持！如有不足指出还请不吝在评论区指出，谢谢！**

---

参考资料：

1. [DeepSeek官方API文档](https://api-docs.deepseek.com/zh-cn/)

2. [DeepSeek开放平台](https://platform.deepseek.com/)

3. [DeepSeek官网首页](https://www.deepseek.com/)