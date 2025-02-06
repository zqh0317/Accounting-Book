# 日本語の紹介 [English version follows after Japanese] 【中文版请拉至最后】
# 📒 家計簿（React）

👋 こんにちは、私は鄭綺慧（ジェン・チフイ）です。React エコシステムを専門とするフロントエンド開発者で、効率的で保守しやすいフロントエンドアプリの構築に注力しています。  
このプロジェクトは、**私が独自に開発した家計簿Webアプリ**であり、支出の分類記録とデータ統計機能を提供します。

## 🎬 オンラインデモ  
👉 [こちらをクリックして体験](http://bill-pearl.vercel.app)

## 📌 プロジェクトの背景 & 目標  
経済の低迷や物価の上昇が続く中、多くの人が家計簿をつけて財務管理をするニーズを持つようになりました。

このプロジェクトの主な目標:  
- ✅ **細かい支出カテゴリ** により、異なるユーザーのニーズに対応  
- ✅ **年間および月間の収支統計** を提供し、一定期間の財務状況を把握しやすくする  
- ✅ **月間レポートでは詳細な支出記録を表示** し、振り返りをしやすくする  

私は、**要件分析、UIデザイン、フロントエンド開発** を独自に行い、**Redux を使用した状態管理**、および **JSON Server によるデータシミュレーション** を実装しました。

## 📈 画面スクリーンショット & 使用方法  

### 収入・支出を追加  
<img src="https://github.com/user-attachments/assets/e2d27726-14b5-4d2f-a9cb-e41c7f1cad13" width="400">

### 月間レポート  
<img src="https://github.com/user-attachments/assets/a0198723-43f7-477b-bbc6-bab1657dcdf1" width="400">

### 年間レポート  
<img src="https://github.com/user-attachments/assets/8675a10d-9a8d-4a83-8d14-597bebb04bbc" width="400">

### 使い方  
1️⃣ **収入・支出を追加**: ホーム画面下部のタブバー中央のボタンをクリックし、収入・支出追加画面へ移動。カテゴリを選択し、日付を設定、金額を入力して **SAVE** を押して保存  
2️⃣ **月間レポートを確認**: ホーム画面ではデフォルトで **月間レポート** が表示されます。タブバーの **左ボタン** を押して月間レポート画面へ移動し、月を選択して収支状況を確認。日ごとの支出項目の **右矢印** を押すと、詳細な取引内容が展開表示されます  
3️⃣ **年間レポートを確認**: タブバーの **右ボタン** を押して **年間レポート画面** に移動し、年を選択すると該当年の収支統計を確認できます  

## 🛠️ 技術スタック  

| 技術 | 説明 |
|------|------|
| ⚛️ React 18 | コンポーネントベースのフロントエンドフレームワークで、コードの保守性を向上 |
| 🎨 Sass | UI スタイリングのためのプリプロセッサで、変数やモジュール管理が可能 |
| 🌐 React Router | ルーティング管理を行い、スムーズなページ遷移を実現 |
| 🛜 Redux | グローバル状態管理を実装し、props のネストを回避 |
| 🌃 Ant Design Mobile | UI コンポーネント（日時選択、ナビゲーションなど）を活用し、開発効率とUXを向上 |
| 🚀 CRA | Create React App により、React プロジェクトを素早く構築 |
| ⌚️ Day.js | 日付のフォーマットや計算などをサポートするライブラリ |
| 🔧 Classnames | 動的なクラス名の管理を簡単にするユーティリティ |
| 🔄 Lodash | データ処理ライブラリで、支出のグループ化や統計計算を効率化 |
| 🗄 JSON Server | ローカルデータシミュレーションにより RESTful API を提供し、フロントエンド・バックエンド分離開発をサポート |

## 💡 特徴  

### 🏗️ コンポーネントベースの設計 & パフォーマンス最適化  
- **React のコンポーネント化開発** を採用し、コードの分離と再利用性を向上  
- **Sass のプリプロセッサ** を活用し、**変数やモジュール化** によりスタイルの一貫性を確保し、保守性を向上  
- **Redux によるグローバル状態管理** で、不要な API リクエストを減らし、パフォーマンスを向上  

### 🔧 効率的な開発 & 拡張性の高さ  
- 📊 現在は **JSON Server を使用したモックデータ** により、バックエンド API をシミュレーション  
- 🚀 今後は **Supabase や MongoDB などのリアルなデータベースへ移行可能**  

### ✨ UI & インタラクションの最適化  
- 🎨 **Ant Design Mobile のコンポーネント**（日時選択、タブバーなど）を活用し、開発効率とモバイルUXを向上  

## 📂 プロジェクト構成  

```bash
┣ 📂server
   ┣ 📜 data.json                    # モックデータ（バックエンドAPI用）
┣ 📂 src
   ┣ 📂 components                   # 再利用可能なコンポーネント
      ┣ 📜 Icon.js                   # 支出カテゴリのアイコン           
   ┣ 📂 pages                        # ページ単位のコンポーネント
      ┣ 📂 Layout                    # メインレイアウト（タブバーなど）
      ┣ 📂 Month                     # 月間レポートページ
         ┣ 📂 components/DailyBill   # 日ごとの支出コンポーネント
         ┣ 📜 index.js               # 月間レポートの概要
         ┣ 📜 index.scss             # 月間レポートのスタイル
      ┣ 📂 New                       # 支出追加ページ
      ┣ 📂 Year                      # 年間レポートページ
         ┣ 📂 components/MonthlyBill # 月間サマリーコンポーネント
         ┣ 📜 index.js               # 年間レポートの概要
         ┣ 📜 index.scss             # 年間レポートのスタイル
   ┣ 📂 router                       # ルーティング設定
   ┣ 📂 store                        # Redux 状態管理
   ┣ 📂 typelist                     # 支出カテゴリのデータ  
   ┣ 📜 index.css                    # ベーススタイル（フォント設定など）
   ┣ 📜 index.js                     # アプリのエントリーポイント
```
 ## 📬 Contact
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin:  https://www.linkedin.com/in/qihui-zheng-ab2618275/


   
# English Version of Project Introduction
# 📒 Accounting Book (React)

👋 Hi, I'm Qihui Zheng, a frontend developer specializing in the React ecosystem. I focus on building efficient and maintainable frontend applications.  
This project is an **independently developed bookkeeping web application**, providing categorized expense tracking and financial statistics.

## 🎬 Online Demo  
👉 [Click here to try it out](http://bill-pearl.vercel.app)

## 📌 Project Background & Goals  
In an economic downturn with rising prices, more people seek to manage their finances through bookkeeping.

This project's core objectives:  
- ✅ **Detailed expense categories** to meet different users' personalized needs  
- ✅ **Annual and monthly summary reports** to help users grasp their financial situation over a period  
- ✅ **Detailed transaction records in monthly reports**, allowing users to review their spending habits  

I independently completed **requirement analysis, UI design, and frontend development**, using **Redux for state management** and **JSON Server for data simulation**.

## 📈 Screenshots & Usage  

### Add Transaction  
<img src="https://github.com/user-attachments/assets/e2d27726-14b5-4d2f-a9cb-e41c7f1cad13" width="400">

### Monthly Report  
<img src="https://github.com/user-attachments/assets/a0198723-43f7-477b-bbc6-bab1657dcdf1" width="400">

### Annual Report  
<img src="https://github.com/user-attachments/assets/8675a10d-9a8d-4a83-8d14-597bebb04bbc" width="400">

### How to Use  
1️⃣ **Add a Transaction**: Click the middle button on the bottom tab bar to enter the add transaction page. Select a category, set the date, enter the amount, and click **SAVE** to store the record.  
2️⃣ **View Monthly Report**: The home page displays the **monthly report** by default. You can also click the **left button** on the bottom tab bar to navigate to the monthly report page. Select a date to view income and expenses for that month. Click the right arrow next to a daily entry to expand detailed transactions.  
3️⃣ **View Annual Report**: Click the **right button** on the bottom tab bar to access the **annual report** page. Select a year to check your financial summary for that period.  

## 🛠️ Tech Stack  

| Technology | Description |
|------------|------------|
| ⚛️ React 18 | Component-based frontend framework, improving code maintainability |
| 🎨 Sass | UI styling with variables and modular design for reusability |
| 🌐 React Router | Page navigation management for seamless transitions |
| 🛜 Redux | Global state management for transaction data, avoiding prop drilling |
| 🌃 Ant Design Mobile | UI components for date selection, navigation, etc., improving development efficiency and user experience |
| 🚀 CRA | Create React App for quick project setup |
| ⌚️ Day.js | Date processing library supporting formatting, calculations, and more |
| 🔧 Classnames | Utility for managing dynamic class names in components |
| 🔄 Lodash | Data processing library for efficient transaction grouping and statistics calculations |
| 🗄 JSON Server | Local data simulation, providing RESTful API support for frontend-backend separation |

## 💡 Highlights  

### 🏗️ Component-Based Architecture & Performance Optimization  
- Developed with **React componentization**, reducing code coupling and improving reusability  
- **Sass preprocessing** with **variables and modularization**, ensuring a unified UI style and easier maintenance  
- Utilized **Redux for global state management**, reducing redundant API calls and improving performance  

### 🔧 Efficient Development & Scalability  
- 📊 Currently using **JSON Server for mock data**, simulating backend APIs and aligning with modern frontend-backend separation trends  
- 🚀 Future upgrades can seamlessly migrate to **real databases like Supabase or MongoDB**  

### ✨ UI & Interaction Optimization  
- 🎨 **Ant Design Mobile components** (date picker, tab bar, etc.) improve development efficiency and mobile user experience  

## 📂 Project Structure  

```bash
┣ 📂server
   ┣ 📜 data.json                    # Mock data for backend API
┣ 📂 src
   ┣ 📂 components                   # Reusable components
      ┣ 📜 Icon.js                   # Stores category icons           
   ┣ 📂 pages                        # Page-level components
      ┣ 📂 Layout                    # Main layout (tab bar, etc.)
      ┣ 📂 Month                     # Monthly report page
         ┣ 📂 components/DailyBill   # Daily transaction component
         ┣ 📜 index.js               # Monthly summary component
         ┣ 📜 index.scss             # Styles for monthly summary
      ┣ 📂 New                       # Add transaction page
      ┣ 📂 Year                      # Annual report page
         ┣ 📂 components/MonthlyBill # Monthly summary component
         ┣ 📜 index.js               # Annual summary component
         ┣ 📜 index.scss             # Styles for annual summary
   ┣ 📂 router                       # Routing configuration
   ┣ 📂 store                        # Redux state management
   ┣ 📂 typelist                     # Mapping of transaction categories to names  
   ┣ 📜 index.css                    # Base styles (fonts, etc.)
   ┣ 📜 index.js                     # Application entry point
```

## 📬 Contact
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin:  https://www.linkedin.com/in/qihui-zheng-ab2618275/



# 中文版项目简介
# 📒 记账本（react）

👋 你好，我是郑绮慧，一名前端开发者，专注于 React 生态，擅长构建高效、可维护的前端应用。
这个项目是我独立开发的记账本web application，提供分类记账和数据统计服务。

## 🎬 线上demo
👉 【点击这里体验】http://bill-pearl.vercel.app

## 📌 项目背景 & 目标
经济低迷，物价持续上涨的大环境下，越来越多人产生了通过记账来管理财务的需求。 

本项目的核心目标：
- ✅ 细分的账目类别，满足不同用户的个性化需求  
- ✅ 提供年度账单和月度账单的汇总统计，使用户易于把握一定期间的收支情况  
- ✅ 月度账单能显示每一条详细账目，便于用户复盘  

我独立完成了需求分析，UI设计，前端开发，使用redux进行状态管理，并用json server进行数据模拟。
   
## 📈 页面截图 & 使用方法

### 新增账单
<img src="https://github.com/user-attachments/assets/e2d27726-14b5-4d2f-a9cb-e41c7f1cad13" width="400">

### 月度账单
<img src="https://github.com/user-attachments/assets/a0198723-43f7-477b-bbc6-bab1657dcdf1" width="400">

### 年度账单
<img src="https://github.com/user-attachments/assets/8675a10d-9a8d-4a83-8d14-597bebb04bbc" width="400">

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

## 📂 代码结构
```bash
┣ 📂server
   ┣ 📜 data.json                    # 数据模拟，提供后端接口
┣ 📂 src
   ┣ 📂 components                   # 可复用组件
      ┣ 📜 Icon.js                   # 存储账目类别图标           
   ┣ 📂 pages                        # 页面级组件
      ┣ 📂 Layout                    # 主界面（tab bar等）
      ┣ 📂 Month                     # 月度账单界面
         ┣ 📂 components/DailyBill   # 日账单组件
         ┣ 📜 index.js               # 月度汇总组件
         ┣ 📜 index.scss             # 月度汇总组件样式
      ┣ 📂 New                       # 新增账单界面
      ┣ 📂 Year                      # 年度账单界面
         ┣ 📂 components/MonthlyBill # 月账单组件
         ┣ 📜 index.js               # 年度汇总组件
         ┣ 📜 index.scss             # 年度汇总组件样式
   ┣ 📂 router                       # 路由配置
   ┣ 📂 store                        # redux状态管理
   ┣ 📂 typelist                     # 账目类别与名称对应数据  
   ┣ 📜 index.css                    # 字体等基础设置
   ┣ 📜 index.js                     # 路由配置  
```   

 ## 📬 联系方式
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin:  https://www.linkedin.com/in/qihui-zheng-ab2618275/



