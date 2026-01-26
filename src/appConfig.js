export const APP_CONFIG = {
    version: '-',
    downloadLinks: {
        windows: '#',
        macosIntel: '#',
        macosAppleSilicon: '#',
        linux: '#',
    }
};

export async function fetchAppConfig() {
    try {
        const response = await fetch('https://dl.xutils.cn/download/version.json', {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        return {
            version: data.version.startsWith('v') ? data.version : `v${data.version}`,
            downloadLinks: {
                windows: data.downloads.windows.url,
                macosIntel: data.downloads.macos_intel.url,
                macosAppleSilicon: data.downloads.macos_arm.url,
                linux: data.downloads.linux.url
            }
        };
    } catch (error) {
        console.error('Failed to fetch app config:', error);
        return APP_CONFIG; // Return default config on failure
    }
}
