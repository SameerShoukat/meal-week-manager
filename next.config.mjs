/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images : {
        domains : ['https://dummyjson.com', "https://meal-week-manager.web.app"]
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    
};

export default nextConfig;
