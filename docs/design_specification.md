# XUtils 官网设计与开发规范 (v1.0)

本规范旨在统一 XUtils 旗下所有官网产品的视觉风格、技术架构和开发流程，确保品牌一致性并提升开发效率。

---

## 1. 核心技术栈 (Technology Stack)

所有官网项目均应遵循以下技术标准：

*   **框架**: [Next.js](https://nextjs.org/) (App Router 模式)。
*   **部署模式**: 静态网站导出 (SSG)，配置 `output: 'export'`。
*   **样式**: 原生 CSS + 自定义 Utility Classes (参考 `shared-design-system.css`)。
*   **图标**: [Lucide React](https://lucide.dev/)。
*   **动画**: [Framer Motion](https://www.framer.com/motion/)。
*   **国际化**: `react-i18next`，配合自定义 `I18nProvider` 实现。

---

## 2. 视觉规范 (Design System)

### 2.1 颜色体系 (Colors)
基于 `Indigo` 和 `Slate` 构建的高级感深色/浅色体系。

| 变量名 | 色值 (Light) | 色值 (Dark) | 用途 |
| :--- | :--- | :--- | :--- |
| `--primary` | `#6366f1` | `#6366f1` | 品牌主色、主按钮、激活态 |
| `--secondary` | `#ec4899` | `#ec4899` | 强调色、装饰性渐变 |
| `--background` | `#ffffff` | `#0f172a` | 页面背景 |
| `--foreground` | `#0f172a` | `#f8fafc` | 主要文本颜色 |
| `--muted` | `#f8fafc` | `#1e293b` | 次要背景、分割线 |
| `--muted-foreground`| `#64748b` | `#94a3b8` | 辅助文本、描述文字 |

### 2.2 字体体系 (Typography)
*   **正文 (Body)**: `Inter`, system-ui, sans-serif。强调清晰、易读。
*   **标题/品牌 (Heading)**: `Outfit`, sans-serif。强调现代感和几何美学。
*   **字号标准**:
    *   `h1`: 3.5rem - 4.5rem (Hero 标题)
    *   `h2`: 2.5rem - 3rem (区块标题)
    *   `body`: 1rem (16px)
    *   `small`: 0.875rem (14px)

### 2.3 视觉特征 (Visual Style)
*   **玻璃拟态 (Glassmorphism)**: 导航栏、卡片采用 `backdrop-filter: blur(12px)`。
*   **渐变 (Gradients)**: 按钮和强调文字使用 `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`。
*   **圆角 (Radius)**: 标准圆角为 `0.75rem` (12px)，大型容器建议 `1.5rem` (24px)。

---

## 3. 项目架构 (Architecture)

### 3.1 目录结构
```text
src/
├── app/            # Next.js App Router 页面与布局
├── components/     # 可复用的 UI 组件
├── i18n/           # 国际化配置文件与 Provider
│   └── locales/    # JSON 语言包 (zh-CN.json, en-US.json)
├── assets/         # 图片、SVG 等静态资源
├── siteConfig.js   # 全局站点配置 (URL, 联系信息等)
├── index.css       # 站点局部全局样式
└── shared-design-system.css # 核心设计系统原子类
```

### 3.2 关键组件标准
*   **Navbar**: 必须包含 Logo、多语言切换、Portal 入口。滚动时需有毛玻璃效果。
*   **Footer**: 必须包含品牌描述、产品链接、ICP 备案号 (纯文本格式)。
*   **Hero**: 采用“徽章 + 巨幕标题 + 副标题 + 引导按钮”的结构。

---

## 4. 国际化 (i18n) 实践

1.  **Provider 模式**: 使用 `I18nProvider` 包裹全局 `layout`。
2.  **客户端加载**: 在 `useEffect` 中读取 `localStorage` 初始化语言，防止服务端/客户端渲染不一致。
3.  **命名空间**: 统一使用 `translation` 命名空间，键名采用小驼峰 (如 `nav.getStarted`)。

---

## 5. SEO 与元数据

每个站点的 `layout.jsx` 必须包含：
*   **Title**: 品牌名 + 核心 Slogan。
*   **Description**: 包含行业关键词的简短描述。
*   **Favicon**: 统一使用 `/logo.svg`。
*   **Semantic HTML**: 确保页面只有一个 `h1`，区块使用 `section`。

---

## 6. 部署规范 (Deployment)

### 6.1 Next.js 配置 (`next.config.js`)
必须配置静态导出：
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

### 6.2 部署脚本 (`deploy.sh`)
统一使用 `rsync` 部署至远程服务器，并确保部署前运行 `npm run build`。

### 6.3 Nginx 配置
*   启用 Gzip 压缩。
*   配置静态文件永久缓存 (`_next/static`)。
*   配置 `try_files $uri $uri.html $uri/ /index.html` 以支持 Clean URLs。

---

## 7. 协作原则
1.  **组件优先**: 尽量抽离通用 UI，保持 `page.jsx` 逻辑简洁。
2.  **纯净代码**: 避免在组件内直接写长段 CSS，优先使用 `shared-design-system.css` 中的原子类。
3.  **性能**: 静态资源（尤其是 Hero 图片）必须压缩，推荐使用 `.webp` 格式。
