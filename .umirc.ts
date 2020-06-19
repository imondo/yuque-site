import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/',
  publicPath: '/',
  title: 'Mondo',
  favicon: 'https://imondo.cn/files/logo.png',
  logo: 'https://imondo.cn/files/logo.png',
  outputPath: 'dist',
  mode: 'site',
  links: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700',
    },
  ],
  navs: [
    {
      title: 'GitHub',
      path: 'https://github.com/one-pupil',
    },
    {
      title: 'About',
      path: 'https://imondo.cn',
    },
  ],
  resolve: {
    includes: ['src/docs'],
  },
  plugins: [`${__dirname}/plugin.ts`],
  exportStatic: {},
  proxy: {
    '/yuque': {
      target: 'https://imondo.cn',
      changeOrigin: true,
    },
  },
});
