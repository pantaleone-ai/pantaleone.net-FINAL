import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   // Configure `pageExtensions` to include markdown and MDX files
   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // Force dark mode
  darkMode: 'class',
  defaultTheme: 'dark',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pantaleone-net.s3.us-west-1.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
      localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
  }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)