import { defineConfig } from 'umi';

export default defineConfig({
  outputPath: 'docs',
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
