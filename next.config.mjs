/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force dark mode
  darkMode: 'class', 
  defaultTheme: 'dark',
    images: {
    domains: ['pantaleone-net.s3.us-west-1.amazonaws.com']
  }
};

export default nextConfig;
