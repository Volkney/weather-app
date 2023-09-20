import weatherFaviconPath from './images/icons/weather-favicon.png';

export default function setFavicons() {
    const faviconData = [
        { rel: 'apple-touch-icon', sizes: '180x180', href: weatherFaviconPath },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: weatherFaviconPath },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: weatherFaviconPath },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }, // Assuming you still use the separate SVG for this
        { rel: 'icon', type: 'image/png', href: weatherFaviconPath }
    ];

    const metaTags = [
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
    ];

    faviconData.forEach(data => {
        const link = document.createElement('link');
        for (let [key, value] of Object.entries(data)) {
            link.setAttribute(key, value);
        }

        const oldLink = document.head.querySelector(`link[rel="${data.rel}"]`);
        if (oldLink) {
            document.head.removeChild(oldLink);
        }

        document.head.appendChild(link);
    });

    metaTags.forEach(metaData => {
        const meta = document.createElement('meta');
        for (let [key, value] of Object.entries(metaData)) {
            meta.setAttribute(key, value);
        }

        const oldMeta = document.head.querySelector(`meta[name="${metaData.name}"]`);
        if (oldMeta) {
            document.head.removeChild(oldMeta);
        }

        document.head.appendChild(meta);
    });
}
