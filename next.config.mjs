import { withPayload } from '@payloadcms/next/withPayload'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  serverExternalPackages: [],
  webpack: (webpackConfig, { isServer }) => {
    if (isServer) {
      webpackConfig.externals = [...(webpackConfig.externals || []), 'bufferutil', 'utf-8-validate']
    }
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
