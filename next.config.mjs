/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        //  TODO: Warning this allows production builds to successfully complete even if project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
