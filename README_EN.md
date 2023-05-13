> [中文版本](./README.md)

# vue-vite-element-plus-starter

## I. Project Introduction

[document](./docs/README.md)

## II. Startup Documentation

Globally install docsify-cli

```bash

# MacOS `sudo npm install -g docsify-cli`

npm install -g docsify-cli
```

Launch docs

```bash
npm run docs
```

Access the documentation at http://localhost:3000

## III. Startup Project

Install dependencies

```bash

# npm install --registry=https://registry.npm.taobao.org

npm install
```

Development environment

```bash
npm run dev
```

## IV. Project Packaging

Joint debugging environment

```bash
npm run rd
```

Testing environment

```bash
npm run qa
```

Production environment

```bash
npm run prod
```

## V. ESLint Code Repair

Running the following command will automatically fix the code

```bash
npm run lint
```

## VI. Generate changelog

Generate `/CHANGELOG.md`

```bash
npm run changelog
```

Generate `/docs/CHANGELOG.md`

```bash
npm run changelog-docs
```

## VII. Build and Deploy

```bash
cd docker-compose build
docker-compose up -d
```

http://localhost:8000

---

## VIII. Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## IX. Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## X. Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
