export const basicMeta = {
    title: 'gpuseoul',
    description: 'gpuseoul',
    generator: 'Next.js',
    applicationName: 'gpu',
    referrer: 'origin-when-cross-origin',
    keywords: ['gpu', 'art', 'vr'],
    authors: [{ name: 'screenxyz' }, { name: 'screenxyz', url: 'https://screenxyz.net' }],
    creator: 'gpu',
    publisher: 'gpu',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://gpuseoul.com'),
    alternates: {
        canonical: '/',
        languages: {
            'ko-KR': '/',
        },
    },
    openGraph: {
        title: 'gpuseoul',
        description: 'gpuseoul',
        url: 'https://gpuseoul.com',
        siteName: 'gpu',
        images: [
            {
                url: '/gpu192.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
        },
    },
    icons: {
        icon: '/gpu192.png',
        shortcut: '/gpu192.png',
        apple: '/gpu192.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/gpu192.png',
        },
    },
}

export const basicViewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: "no",
    viewportFit : "cover"
}

export const metadata = basicMeta;
export const viewport = basicViewport;