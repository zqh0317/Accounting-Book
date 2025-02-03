# 📒 记账本（react）

👋 你好，我是郑绮慧，一名前端开发者，专注于 React 生态，擅长构建高效、可维护的前端应用。
这个项目是我独立开发的记账本web application，提供分类记账和数据统计服务。

## 📌 项目背景 & 目标
经济低迷，物价持续上涨的大环境下，越来越多人产生了通过记账来管理财务的需求。 

本项目的核心目标：
- ✅ 细分的账目类别，满足不同用户的个性化需求  
- ✅ 提供年度账单和月度账单的汇总统计，使用户易于把握一定期间的收支情况  
- ✅ 月度账单能显示每一条详细账目，便于用户复盘  

我独立完成了需求分析，UI设计，前端开发，使用redux进行状态管理，并用json server进行数据模拟。
   
## 📈 页面截图 & 使用方法

### 新增账单
<img src="https://github.com/user-attachments/assets/9f588847-025c-4ff0-a585-dc0c42b83450">

### 月度账单
<img src="https://github.com/user-attachments/assets/9f588847-025c-4ff0-a585-dc0c42b83450">

### 年度账单
<img src="https://github.com/user-attachments/assets/924e4bec-1073-4df5-a218-11775890d4a4">

### 使用方法
1️⃣ **新增账单**：点击首页下方tab bar中间的按钮，进入新增账单页面，选择账目类别和记账时间，并输入金额，点击SAVE保存账目  
2️⃣ **查看月度账单**：打开应用，首页默认展示月度账单页面，也可点击下方tab bar左侧按钮进入月度账单页面，选择时间可查看对应月收支情况，点击日账单右侧箭头，可展开单日账目详情  
3️⃣ **查看年度账单**：点击首页下方tab bar右侧按钮进入年度账单页面，选择时间可查看对应年收支情况      

## 🛠️ 技术栈
| 技术 | 说明 |
|------|------|
| ⚛️ React 18 | 组件化前端框架，提高代码可维护性 |
| 🎨 Sass | 负责 UI 设计，提高样式复用性 |
| 🌐 React Router | 页面路由管理，实现无刷新跳转 |
| 🛜 redux | 状态管理，用于全局管理账单数据，避免props层层传递 |
| 🌃 ant design mobile | 提供日期选择、导航栏等 UI 组件，高效开发的同时提升用户体验 |
| 🚀 CRA | Create React App，快速搭建 React 项目 |
| ⌚️ dayjs | 时间处理库，支持日期格式化、计算等功能 |
| 🔧 classnames | 类名处理库，更方便地通过添加多个类名实现交互逻辑和样式控制 |
| 🔄 lodash | 数据处理库，用于高效处理账单分组和计算账单统计数据 |
| 🗄 JSON Server | 本地数据模拟，支持 RESTful API，方便前后端分离开发 |

## 💡 亮点

### 🏗️ 组件化架构 & 性能优化
- 采用 **React 组件化开发**，降低代码耦合度，提高可复用性  
- **Sass预处理**，使用 **变量和模块化**管理样式，易于统一整体UI风格，同时提高样式可维护性
- 采用 **Redux进行全局状态管理**，避免频繁 API 请求，提高性能

### 🔧 高效开发 & 扩展性强
- 📊 目前使用json server进行数据模拟，提供后端接口，适应当下前后端分离开发的趋势，未来可无缝迁移至真实数据库，如 Supabase 或 MongoDB

### ✨ UI & 交互优化
- 🎨 **使用ant design mobile**提供的时间选择器和tab bar等组件，提高开发效率，并改善移动端用户体验

## 🎬 线上demo
👉 【点击这里体验】（url之后补充）

## 📂 代码结构
```bash
┣ 📂server
   ┣ 📜 data.json                 # 数据模拟，提供后端接口
┣ 📂 src
 ┣ 📂 components                  # 可复用组件
    ┣ 📜 Icon.js                  # 存储账目类别图标           
 ┣ 📂 pages                       # 页面级组件
    ┣ 📂 Layout                   # 主界面（tab bar等）
    ┣ 📂 Month                    # 月度账单界面
      ┣ 📂 components/DailyBill   # 日账单组件
      ┣ 📜 index.js               # 月度汇总组件
      ┣ 📜 index.scss             # 月度汇总组件样式
    ┣ 📂 New                      # 新增账单界面
    ┣ 📂 Year                     # 年度账单界面
      ┣ 📂 components/MonthlyBill # 月账单组件
      ┣ 📜 index.js               # 年度汇总组件
      ┣ 📜 index.scss             # 年度汇总组件样式
 ┣ 📂 router                      # 路由配置
 ┣ 📂 store                       # redux状态管理
 ┣ 📂 typelist                    # 账目类别与名称对应数据  
 ┣ 📜 index.css                   # 字体等基础设置
 ┣ 📜 index.js                    # 路由配置  
```   

 ## 📬 联系方式
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin:



