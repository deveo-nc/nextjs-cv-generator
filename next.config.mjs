/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: '/nextjs-cv-generator',
    assetPrefix: '/nextjs-cv-generator',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
