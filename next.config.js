
/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;


const isProd = process.env.NODE_ENV === 'production';
/*
 * Gets the BASE_PATH from the command used to start this app.
 * If BASE_PATH is specified but it does not start with a "/"
 * then add it.
 */
function getBasePath() {
  

  let basePath = '';

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith('/')) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = '/' + process.env.BASE_PATH;
    }
  }
  return basePath;
}

const assetPrefix = isProd ? process.env.NEXT_PUBLIC_ASSET_PREFIX : undefined;

module.exports = {
  basePath: getBasePath(),
  assetPrefix: assetPrefix,
  async rewrites() {
    return [
      {
        source: getBasePath() + '/api/:path*',
        destination: `${
          process.env.NEXT_PUBLIC_BASE_URL ?? 'http://54.91.149.175:8000'
          // process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:8000'
        }/api/:path*`,
        basePath: false
      },
      {
        source: getBasePath() + '/salvoeBridge/api/:path*',
        destination: `${
          process.env.NEXT_PUBLIC_BASE_URL ?? 'http://54.91.149.175:8000'
          // process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:8000'
        }/api/:path*`,
        basePath: false
      }
    ];
  },
  output: 'myApp'
};

