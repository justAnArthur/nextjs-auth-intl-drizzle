import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
let nextConfig = {
  // reactStrictMode: true
}

const withNextIntl = createNextIntlPlugin(
  './app/(internal)/_providers/intl/config.ts'
)
nextConfig = withNextIntl(nextConfig)

export default nextConfig
