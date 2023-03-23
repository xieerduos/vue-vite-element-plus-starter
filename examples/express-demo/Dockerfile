#  使用 Node.js 14.19.3 作为基础镜像
FROM node:14.19.3

# 在容器中创建一个工作目录
WORKDIR /usr/src/app

# 将当前目录下的所有文件复制到容器中的工作目录
COPY . /usr/src/app

# 安装项目所需的依赖
RUN npm install

# 将容器的 4567 端口暴露出来
EXPOSE 4567

# 运行容器时执行的命令，这里为空，表示不执行任何命令
CMD []
