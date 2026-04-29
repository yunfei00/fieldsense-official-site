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

后端：

```bash
DJANGO_DEBUG=true
DJANGO_SECRET_KEY=change-me
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
```

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

