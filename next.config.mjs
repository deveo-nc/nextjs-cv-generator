/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    assetPrefix: './',
    unoptimized: true,
    images: {
        loader: 'imgix',
    },
};

export default nextConfig;
