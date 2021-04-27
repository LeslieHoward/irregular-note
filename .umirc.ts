import { defineConfig } from 'umi';

export default defineConfig({
  outputPath: 'docs',
  publicPath: './',
  base: '/irregular-note',
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  title: false,
  ignoreMomentLocale: true,
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
