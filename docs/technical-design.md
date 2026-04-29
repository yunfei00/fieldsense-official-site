# FieldSense 场感官网 MVP 技术设计

## 架构

- 前端：Next.js App Router + TypeScript + Tailwind CSS。
- 后端：Django + Django REST Framework。
- 数据库：开发阶段 SQLite，后续可切换 PostgreSQL。
- 管理后台：Django Admin。
- 部署：Docker Compose，预留 Nginx 和 PostgreSQL 服务。

## 前端设计

前端页面位于 `frontend/src/app`，组件位于 `frontend/src/components`，静态业务数据位于 `frontend/src/data`。

核心设计原则：

- 页面内容数据化，便于后续接入 CMS 或 Django API。
- 首页拆分为 Hero、适用场景、核心能力、应用场景、产品构成、优势和 CTA。
- 表单组件统一调用 `frontend/src/lib/api.ts` 中的线索提交方法。
- 每个页面设置 `metadata`，支持第一阶段 SEO。

## 后端设计

后端应用位于 `backend/apps/leads`。

Lead 模型字段覆盖：

- 基础联系信息：姓名、公司、部门、电话、邮箱。
- 需求信息：关注产品、应用场景、预计采购时间、需求描述。
- 来源信息：来源页面、来源 URL。
- 管理信息：线索类型、状态、备注、创建时间、更新时间。

API：

- `POST /api/leads/demo-request/`
- `POST /api/leads/contact/`

服务端校验：

- 姓名、公司、电话、应用场景必填。
- 线索类型必须合法。
- 邮箱填写时必须合法。

## 部署设计

`deploy/docker-compose.yml` 默认启动 frontend 和 backend，使用 SQLite volume 保存开发数据。Nginx 和 PostgreSQL 以 profile 方式预留。

