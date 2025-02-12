/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/*",
      },
      {
        protocol: "https",
        hostname: "3hdrj4nvyn.ufs.sh",
        port: "",
        pathname: "/f/*",
      },
    ],
  },
  transpilePackages: ["three"],
};

export default config;
