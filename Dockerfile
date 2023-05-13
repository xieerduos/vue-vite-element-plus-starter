# Use the official node image as the base image (使用官方的 node 镜像作为基础镜像)
# Create an image named development from the node:14.19.3 image (从 node:14.19.3 镜像创建一个名为 development 的镜像)
FROM node:14.19.3 AS development

# Set the maintainer information (设置维护者信息)
LABEL maintainer="coder.zhongyi.li@gmail.com"

# Set the working directory to /app (设置工作目录为 /app)
WORKDIR /app

# Copy package.json and package-lock.json into the container (将 package.json 和 package-lock.json 复制到容器中)
COPY package*.json ./

# Install the required packages (安装所需的包)
RUN npm install --registry=https://registry.npm.taobao.org

# Copy all other files from the project into the container (将项目中的所有其他文件复制到容器中)
COPY . .

# Build the package (打包构建)
RUN npm run rd

# Create an image named build from the development image (从 development 镜像创建一个名为 build 的镜像)
FROM development AS build

# Create an image from the nginx:1.21.6 image (从 nginx:1.21.6 镜像创建一个镜像)
FROM nginx:1.21.6

# Copy the nginx configuration file from the build image to /etc/nginx/conf.d/default.conf in the container (从 build 镜像中复制 nginx 配置文件到容器中的 /etc/nginx/conf.d/default.conf)
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Set the working directory to /usr/share/nginx/html (设置工作目录为 /usr/share/nginx/html)
WORKDIR /usr/share/nginx/html

# Delete all content in this directory (删除该目录中的所有内容)
RUN rm -rf ./*

# Copy project files from the build image to the /usr/share/nginx/html directory in the container (从 build 镜像中复制项目文件到容器中的 /usr/share/nginx/html 目录)
COPY --from=build /app/rd .

# Set the entry point of the container to run the nginx command (设置容器的入口点，运行 nginx 命令)
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# This Dockerfile uses multi-stage builds, first building the project in the development environment and then running the project in the production environment.
# This ensures a small image size, while avoiding the installation of unnecessary tools in the production environment.
# (此 Dockerfile 使用了多阶段构建，先在开发环境中构建项目，再在生产环境中运行项目。这样可以保证镜像的小尺寸，同时避免了在生产环境中安装多余的工具。)
