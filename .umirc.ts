import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/',
  publicPath: '/',
  title: 'Mondo',
  favicon: 'https://imondo.cn/files/logo.png',
  logo: 'https://imondo.cn/files/logo.png',
  outputPath: 'dist',
  mode: 'site',
  hash: true,
  metas: [
    {
      name: 'referrer',
      content: 'no-referrer',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700',
    },
  ],
  navs: [
    {
      title: '仿如昨日',
      path: 'https://www.yuque.com/mondo/docs',
    },
    {
      title: '关于',
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
