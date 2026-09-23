import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.12", "192.168.1.12:3000", "192.168.1.12:3001", "192.168.1.73"],
};

export default nextConfig;
