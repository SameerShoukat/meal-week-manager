/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images : {
        domains : ['https://americanautolink.com','https://portal.americanautolink.com', 'https://quotation.americanautolink.com']
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    
};

export default nextConfig;
