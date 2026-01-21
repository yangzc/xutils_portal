export const URLS = {
  portal: '/',
  lowCode: '/doc',
  stockMonitor: '/stock',
};

export const COMPANY_INFO = {
  email: 'zhc_yang@163.com',
};

export const ROUTES = {
  privacy: '/privacy',
  terms: '/terms',
  feedback: '/feedback',
};

export const getPortalLink = (path) => `${URLS.portal}${path}`;

export const getCommonLinks = (t) => ({
  products: [
    { name: t('nav.lowcode') || '智能写作', href: URLS.lowCode },
    { name: t('nav.stockMonitor') || '盯盘助手', href: URLS.stockMonitor }
  ],
  company: [
    // In portal, these should be relative, but for universal config we might need logic.
    // simpler to keep them absolute for consistency across sites, OR handle conditionally.
    // Let's make them Absolute by default for simplicity in cross-site usage.
    // But inside Portal, standard <Link> handles absolute URLs fine (as external) or we use <a>.
    { name: t('footer.links.privacy') || '隐私政策', href: getPortalLink(ROUTES.privacy) },
    { name: t('footer.links.terms') || '服务条款', href: getPortalLink(ROUTES.terms) },
    { name: t('footer.links.feedback') || '建议反馈', href: getPortalLink(ROUTES.feedback) }
  ]
});
