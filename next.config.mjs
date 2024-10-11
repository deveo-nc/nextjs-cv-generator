/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        loader: "imgix",
        path: ""
    }
};

export default nextConfig;
