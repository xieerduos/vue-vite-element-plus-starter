# 获取源码&启动项目

## 一、如何获取源码

源码地址：https://ffffee.com/download/vite4-vue3-app2.zip

用户名和密码在学浪答疑群公告

_购买课程后自动会加入答疑群_

## 二、启动文档

全局安装 docsify-cli

```bash
# MacOS `sudo npm install -g docsify-cli`
npm install -g docsify-cli
```

启动 docs

```bash
npm run docs
```

访问文档 http://localhost:3000

## 三、启动项目

安装依赖

```bash
# npm install --registry=https://registry.npm.taobao.org
npm install
```

开发环境

```bash
npm run dev
```

## 四、打包项目

联调环境

```bash
npm run rd
```

测试环境

```bash
npm run qa
```

生产环境

```bash
npm run prod
```

## 五、ESlint 修复代码

执行下面命令，将会自动修复代码

```bash
npm run lint
```

## 六、生成 changelog

生成 `/CHANGELOG.md`

```bash
npm run changelog
```

生成 `/docs/CHANGELOG.md`

```bash
npm run changelog-docs
```
