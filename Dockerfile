# 使用官方的 node 镜像作为基础镜像
# 从 node:14.19.3 镜像创建一个名为 development 的镜像
FROM node:14.19.3 AS development

# 设置维护者信息
LABEL maintainer="1454598684@qq.com"

# 设置工作目录为 /app
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到容器中
COPY package*.json ./

# 安装所需的包
RUN npm install --registry=https://registry.npm.taobao.org

# 将项目中的所有其他文件复制到容器中
COPY . .

# 打包构建
RUN npm run rd

# 从 development 镜像创建一个名为 build 的镜像
FROM development AS build

# 从 nginx:1.21.6 镜像创建一个镜像
FROM nginx:1.21.6

# 从 build 镜像中复制 nginx 配置文件到容器中的 /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# 设置工作目录为 /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# 删除该目录中的所有内容
RUN rm -rf ./*

# 从 build 镜像中复制项目文件到容器中的 /usr/share/nginx/html 目录
COPY --from=build /app/rd .

# 设置容器的入口点，运行 nginx 命令
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# 此 Dockerfile 使用了多阶段构建，先在开发环境中构建项目，再在生产环境中运行项目。
# 这样可以保证镜像的小尺寸，同时避免了在生产环境中安装多余的工具。

