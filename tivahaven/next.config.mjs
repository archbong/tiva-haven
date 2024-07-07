/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "roadfood.com"
            },
            {
                protocol: "https",
                hostname: "lyndells.com"
            },
            {
                protocol: "https",
                hostname: "ik.imagekit.io"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "www.bakingbusiness.com"
            }
        ],
    }
};

export default nextConfig;
