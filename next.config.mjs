/** @type {import('next').NextConfig} */

const nextConfig = {
    redirects: async () => {
      return [
        {
          source: "/",
          destination: "/reports",
          permanent: true,
        },
      ];
    },
  };
  
export default nextConfig;
