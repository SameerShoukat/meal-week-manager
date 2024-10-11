/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images : {
        domains : ['https://dummyjson.com']
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    
};

export default nextConfig;
