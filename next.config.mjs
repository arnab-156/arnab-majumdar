/** @type {import('next').NextConfig} */
const nextConfig = {};
import withBundleAnalyzer from '@next/bundle-analyzer';

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});
