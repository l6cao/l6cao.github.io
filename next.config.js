const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/l6cao.github.io' : '',
  assetPrefix: isProd ? '/l6cao.github.io/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};