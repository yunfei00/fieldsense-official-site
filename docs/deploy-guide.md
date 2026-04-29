# FieldSense 场感官网部署指南

## 本地开发

前端：

```bash
cd frontend
npm install
npm run dev
```

后端：

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## 环境变量

前端：

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

后端本地开发可在 `backend` 目录自行设置环境变量；**生产 Docker 部署**时，后端相关变量统一放在 `deploy/.env`（不要提交到 Git），模板见 `deploy/.env.example`。

服务器部署时先复制模板并编辑（至少修改 `DJANGO_ALLOWED_HOSTS` 等为实际域名或 IP）：

```bash
cp deploy/.env.example deploy/.env
```

然后按需编辑 `deploy/.env` 中的 `DJANGO_SECRET_KEY`、`DJANGO_DEBUG`、`DJANGO_ALLOWED_HOSTS`、`DJANGO_CORS_ALLOWED_ORIGINS`、`DJANGO_CSRF_TRUSTED_ORIGINS` 等。

## Docker 启动

```bash
cd deploy
docker compose up -d --build
```

若构建阶段依赖下载失败（例如网络抖动），可执行以下命令后重建：

```bash
docker compose down
docker builder prune -f
docker compose up -d --build
```

默认访问：

- 前端：http://localhost:3000
- 后端 Admin：http://localhost:8000/admin
- API：http://localhost:8000/api/leads/demo-request/

## 启用 Nginx

```bash
cd deploy
docker compose --profile nginx up -d --build
```

Nginx 会将 `/api/` 和 `/admin/` 转发到后端，其余请求转发到前端。

