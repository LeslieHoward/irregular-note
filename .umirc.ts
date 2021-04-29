import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  publicPath: './',
  base: '/irregular-note',
  title: 'Site Name',
  mode: 'site',
  dynamicImport: {},
  // chainWebpack(memo) {
  //   memo
  //     .entry('index')
  //     .add('src/index.md')
  //     .end();
  // },
});
