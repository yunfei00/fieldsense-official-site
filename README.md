# FieldSense 场感 官网 MVP

FieldSense 场感是一个面向近场扫描系统与电磁云图分析平台的企业级产品官网 MVP。项目包含 Next.js 静态官网、Django 线索收集后端、Django Admin 线索管理，以及基础 Docker Compose 部署配置。

## 技术栈

- 前端：Next.js、TypeScript、Tailwind CSS、App Router
- 后端：Django、Django REST Framework、SQLite
- 管理后台：Django Admin
- 部署：Docker Compose，预留 Nginx 和 PostgreSQL

## 目录结构

```text
fieldsense-official-site/
├── frontend/
│   ├── src/app/
│   ├── src/components/
│   ├── src/data/
│   ├── src/lib/
│   └── src/types/
├── backend/
│   ├── config/
│   └── apps/leads/
├── deploy/
├── docs/
└── README.md
```

## 本地开发

### 前端

```bash
cd frontend
npm install
npm run dev
```

访问：http://localhost:3000

常用命令：

```bash
npm run build
npm run lint
```

### 后端

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

访问：

- Admin：http://localhost:8000/admin
- API：http://localhost:8000/api/leads/demo-request/

## 环境变量

前端创建 `frontend/.env.local`：

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

说明：

- 生产环境推荐 `NEXT_PUBLIC_API_BASE_URL` 留空，前端通过同域相对路径 `/api`（由 Nginx 代理到后端）。
- 本地前后端分开运行时，可在 `frontend/.env.local` 使用 `http://localhost:8000`（该文件不提交 Git）。

后端可配置：

```bash
DJANGO_DEBUG=true
DJANGO_SECRET_KEY=change-me
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
SQLITE_PATH=db.sqlite3
```

## 数据库迁移

```bash
cd backend
python manage.py migrate
```

## 创建管理员账号

```bash
cd backend
python manage.py createsuperuser
```

## Docker 启动

生产或服务器部署时，先在 `deploy` 目录从模板生成环境文件并修改（至少配置 `DJANGO_ALLOWED_HOSTS` 等）：

```bash
cp deploy/.env.example deploy/.env
```

```bash
cd deploy
docker compose up -d --build
```

如果构建阶段依赖下载失败（例如网络抖动），可先清理后重建：

```bash
docker compose down
docker builder prune -f
docker compose up -d --build
```

默认服务：

- 前端：http://localhost:3000
- 后端：http://localhost:8000

如需启用 Nginx：

```bash
cd deploy
docker compose --profile nginx up -d --build
```

## 接口说明

### 预约演示

`POST /api/leads/demo-request/`

### 联系咨询

`POST /api/leads/contact/`

请求示例：

```json
{
  "name": "张三",
  "company": "某电子科技有限公司",
  "department": "研发部",
  "phone": "13800000000",
  "email": "test@example.com",
  "product_interest": "近场扫描系统",
  "application_scene": "PCB干扰排查",
  "purchase_time": "3个月内",
  "message": "希望了解近场扫描系统",
  "source_page": "首页",
  "source_url": "/"
}
```

成功响应：

```json
{
  "success": true,
  "message": "提交成功，我们会尽快与您联系。"
}
```

失败响应：

```json
{
  "success": false,
  "message": "请检查必填字段。"
}
```

## 第一阶段功能清单

- 首页完整产品官网视觉
- 产品中心与 FieldSense NFS 产品详情
- 解决方案列表与 PCB 板级干扰排查详情
- 案例中心与技术文章列表
- 联系我们与预约演示表单
- Django Lead 模型、Admin 和 API
- CORS 开发环境配置
- SEO metadata
- Docker Compose、前后端 Dockerfile、Nginx 预留

## 后续规划

- 接入 PostgreSQL 和生产级环境变量管理
- 文章、案例、资料下载接入 CMS 或 Django API
- 增加邮件通知、CRM 对接和表单来源追踪
- 增加更多产品详情、方案详情和下载中心
- 增加站点地图、结构化数据和 SEO 专题页

