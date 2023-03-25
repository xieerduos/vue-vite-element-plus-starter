# 课程介绍

## 一、课程大纲

前端 Vite4 + Vue3 项目搭建打包和部署流程图

```mermaid
graph LR

A(Vite4.0) --> Markdown(Docsify文档搭建)

A --> cli(Vite Vue3 搭建项目)
A --> Prettier(Prettier + ESlint)
A --> GitCommit(Git commit规范和生成CHANGELOG.md)
A --> G(ElementPlus按需引入)
A --> H(viteCompression gzip)
A --> I(visualizer 可视化报告)
A --> J(Chunks 代码分块)
A --> K(反向代理)
A --> M(配置别名)
A --> CDN(Content Delivery Network)
A --> L(多环境配置)
A --> B(Vue3)

GitCommit --> husky
GitCommit --> commitlint
GitCommit --> commitizen
GitCommit --> conventional-changelog-cli


B --> C(Pinia)
B --> D(ElementPlus)
B --> E(TypeScript)
B --> F(VueRouter)
B --> Axios(Axios)
B --> Normalize(Normalize.css)


D  --> theme(切换主题亮色/暗黑色)
D  --> 自定义组件主题颜色

F --> hash
F --> history
F --> abstract

Axios --> 请求拦截
Axios --> 响应拦截
Axios --> token


L --> .env.development(.env.development)
L --> .env.qa(.env.qa)
L --> .env.rd(.env.rd)
L --> .env.production(.env.prod)
```

```mermaid
graph LR

A(Vite4.0) --> L(多环境配置)

L --> .env.development(.env.development)
L --> .env.qa(.env.qa)
L --> .env.rd(.env.rd)
L --> .env.production(.env.prod)

docker(docker) -->node环境--> A
docker --> nginx(nginx)
.env.qa --打包-->build(静态html)--> nginx
.env.rd --打包-->build--> nginx
.env.production --打包-->build--> nginx

nginx --> Nodejs后端项目
Nodejs后端项目 -.-> nginx

nginx -.-> 用户看到页面
用户看到页面 --浏览器访问--> nginx

```

## 二、如何答疑

1. 直播答疑（[抖音号：前端讲全栈](https://www.douyin.com/user/MS4wLjABAAAAkiur2fK3qQYKHtdnwzT2_ysUpdIbGRMJ_2l3cA_l_3A)）

2. 班级群答疑

## 三、讲师介绍

![](assets/10-teacher.png)

<!-- ## 四、效果展示

### **最终脚手架效果-暗黑模式**

![](assets/13-dark-theme.png)

### **最终脚手架效果-亮色模式**

![](assets/14-light-theme.png)

### **代码目录**

![](assets/11-code-dir.png)

### **HomeView.vue 代码**

![](assets/15-HomeView-examples.png)

### **课程文档**

![](assets/12-docsify.png) -->
