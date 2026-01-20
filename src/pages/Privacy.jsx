import React from 'react';

import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container pt-20 pb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">隐私政策</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground mb-8">生效日期：2026年1月1日</p>
          
          <h3>1. 信息收集</h3>
          <p>我们需要收集和使用您的个人信息，主要包括：注册账户信息（如邮箱）、使用服务时产生的数据（如文档内容、配置信息）。我们仅收集为提供服务所必需的信息。</p>

          <h3>2. 信息使用</h3>
          <p>我们收集的信息将用于：提供和改进我们的服务、通知您产品更新、保障账号安全。我们不会向第三方出售您的个人信息。</p>

          <h3>3. 数据安全</h3>
          <p>我们采取业界标准的安全措施（如SSL加密、访问控制）来保护您的数据。这是我们的核心承诺。</p>

          <h3>4. Cookie 使用</h3>
          <p>我们使用 Cookie 来改善用户体验，例如保持登录状态。您可以随时在浏览器设置中管理 Cookie。</p>

          <h3>5. 您的权利</h3>
          <p>您有权访问、更正或删除您的个人信息。如需行使权利，请联系我们。</p>
          
          <h3>6. 联系我们</h3>
          <p>如果您对本隐私政策有任何疑问，请通过 support@xutils.cn 联系我们。</p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
