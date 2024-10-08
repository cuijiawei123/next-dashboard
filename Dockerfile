# 使用官方 Node.js 镜像作为基础镜像
FROM node:22.6.0-alpine

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制整个项目到工作目录
COPY . .

# 构建 Next.js 项目
RUN npm run build

# 设置环境变量
ENV NODE_ENV production

# 公开端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "start"]