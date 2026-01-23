#!/bin/bash

# 配置信息
REMOTE_USER="ubuntu"
REMOTE_HOST="151.145.42.108"
REMOTE_PATH="/home/ubuntu/sites/xutils.cn"
SSH_KEY="/Users/yangzc/devsoft/shells/deploy"

echo "🚀 开始部署 xutils_portal (SSG 模式)..."

# 1. 安装依赖
echo "📦 正在安装依赖..."
npm install

# 2. 构建项目
echo "🏗️ 正在构建静态文件..."
npm run build

# 3. 检查构建结果
if [ ! -d "out" ]; then
  echo "❌ 错误: 'out' 目录不存在，构建可能失败了。"
  exit 1
fi

# 4. 创建远程目录（如果不存在）
echo "📁 检查远程目录..."
ssh -i ${SSH_KEY} ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_PATH}"

# 5. 同步文件到服务器
echo "🚚 正在同步文件到远程服务器..."
# 使用 rsync 同步，--delete 会删除远程服务器上多余的文件，保持同步
rsync -avz -e "ssh -i ${SSH_KEY}" --delete out/ ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}

echo "✅ 部署完成！"
echo "🌐 请确保你的 Nginx/Apache 指向了远程路径: ${REMOTE_PATH}"
