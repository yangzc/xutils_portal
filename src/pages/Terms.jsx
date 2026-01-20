import React from 'react';

import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container pt-20 pb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">服务条款</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground mb-8">生效日期：2026年1月1日</p>
          
          <h3>1. 条款接受</h3>
          <p>欢迎使用 XUtils 平台（含智能写作与盯盘助手）。通过访问或使用我们的服务，即表示您同意受本条款的约束。</p>

          <h3>2. 服务变更</h3>
          <p>我们要不断改进服务，这意味着我们可能会增加、修改或删除某些功能。我们会尽可能提前通知重大变更。</p>

          <h3>3. 用户责任</h3>
          <p>您需要对您的账户下的所有活动负责。请妥善保管您的密码。您不得利用本服务进行任何非法活动。</p>

          <h3>4. 知识产权</h3>
          <p>XUtils 服务中的所有内容（软件、设计、Logo等）均受版权和知识产权法保护。用户在使用服务过程中产生的内容归用户所有。</p>

          <h3>5. 免责声明</h3>
          <p>服务按“现状”提供，我们不提供任何明示或暗示的保证。对于因使用服务而造成的任何间接损失，我们不承担责任。</p>
          
          <h3>6. 终止服务</h3>
          <p>如果您违反本条款，我们保留暂停或终止向您提供服务的权利。</p>
        </div>
      </main>
    </div>
  );
};

export default Terms;
