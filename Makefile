# Định nghĩa biến
NODE_ENV=development
PORT=3000

# Chạy server
run:
	@echo "🚀 Starting server on port $(PORT)..."
	@NODE_ENV=$(NODE_ENV) node server.js

# Chạy test
test:
	@echo "🧪 Running tests..."
	@npm test

# Cài đặt dependencies
install:
	@echo "📦 Installing dependencies..."
	@npm install

# Xóa thư mục node_modules và package-lock.json
clean:
	@echo "🧹 Cleaning up..."
	@rm -rf node_modules package-lock.json

# Chạy lại từ đầu (clean + install + run)
reset: clean install run

# 🛠 Biến để chứa thông tin commit
MSG="🚀 Update code"

# 🏗 Push code lên Git
push:
	@echo "📤 Staging changes..."
	@git add .
	@echo "📝 Committing changes..."
	@git commit -m $(MSG)
	@echo "🚀 Pushing to remote repository..."
	@git push origin main
	@echo "✅ Push completed!"

# 🏗 Pull code mới nhất từ remote
pull:
	@echo "📥 Pulling latest changes..."
	@git pull origin main
	@echo "✅ Pull completed!"

# 🏗 Tạo branch mới
branch:
	@echo "🌿 Creating new branch: $(BRANCH)"
	@git checkout -b $(BRANCH)
	@git push --set-upstream origin $(BRANCH)
	@echo "✅ Branch created!"

# 🏗 Kiểm tra trạng thái Git
status:
	@git status

# 🏗 Đổi branch
checkout:
	@git checkout $(BRANCH)

