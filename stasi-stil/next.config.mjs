/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [75, 100], // разрешени стойности за quality
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i.imgur.com",
            port: "",
            pathname: "/**", // разрешаваме всички пътища
          },
        ],
      }
};

export default nextConfig;
