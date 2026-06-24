# FieldSense 文档入口

本目录用于记录 FieldSense 官网项目的产品背景、当前进展、架构设计、部署方式和后续开发计划。

AI 或新成员接手时，建议按下面顺序阅读：

1. `project-handoff.md`：当前进展、背景需求、架构总览、下一步开发需求、AI 接手指引。
2. `product-requirements.md`：官网 MVP 的产品定位、目标用户和转化路径。
3. `technical-design.md`：第一阶段技术设计和模块边界。
4. `deploy-guide.md`：本地开发、Docker 部署、Nginx、飞书通知和线索管理配置。

维护原则：

- 功能实现有明显变化时，优先更新 `project-handoff.md` 的“当前进展”和“下一步开发需求”。
- 架构或部署方式变化时，同步更新 `technical-design.md` 或 `deploy-guide.md`。
- 不要在文档中提交真实密钥、Webhook、管理密码或客户线索数据。
