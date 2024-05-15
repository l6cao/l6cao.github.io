const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '/' : '',
  images: {
    unoptimized: true,
  },
};
