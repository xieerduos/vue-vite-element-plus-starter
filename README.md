> [English Version](./README_EN.md)

# vue-vite-element-plus-starter

## 一、项目介绍

[在线文档](https://xieerduos.github.io/vue-vite-element-plus-starter)

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
npm run changelog-docss
```

## 七、构建部署

```bash
docker-compose build
docker-compose up -d
```

http://localhost:8000

---

## 八、Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 九、Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## 十、Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
