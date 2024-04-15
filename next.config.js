/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [{
            protocol: 'https',
            hostname:"images.unsplash.com",
        }, {
            protocol: 'https',
            hostname:"www.yudiz.com",
        }
        ],
    }
}

module.exports = nextConfig
